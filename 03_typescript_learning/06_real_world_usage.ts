// Real-World TypeScript Usage

// 31. API Request/Response Typing
// Define precise types for what your app sends and receives over HTTP.

// Generic API envelope that most REST APIs return
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    timestamp: string;
}

interface ApiError {
    status: number;
    message: string;
    errors?: Record<string, string[]>;
}

// Resource-specific shapes
interface UserResponse {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasNextPage: boolean;
}

// Typed fetch wrapper — all call sites know exactly what they get back
async function apiFetch<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
    const res = await fetch(url, options);
    if (!res.ok) {
        const err: ApiError = await res.json();
        throw err;
    }
    return res.json() as Promise<ApiResponse<T>>;
}

// Usage
async function getUsers(): Promise<PaginatedResponse<UserResponse>> {
    const response = await apiFetch<PaginatedResponse<UserResponse>>("/api/users");
    return response.data; // TypeScript knows this is PaginatedResponse<UserResponse>
}


// 32. DTO Pattern (Data Transfer Object)
// DTOs separate the shape of data crossing a system boundary (HTTP, DB) from
// the internal domain model. Use them to validate, strip, and transform data.

// Internal domain model
interface UserDomain {
    id: string;
    name: string;
    email: string;
    passwordHash: string; // never sent to the client
    createdAt: Date;
}

// DTO for creating a user (inbound — what the client sends)
interface CreateUserDto {
    name: string;
    email: string;
    password: string; // plain text, hashed before storage
}

// DTO for the client response (outbound — what the server sends back)
interface UserDto {
    id: string;
    name: string;
    email: string;
    createdAt: string; // serialised as ISO string, not Date
}

// Mapper: domain → DTO (keeps passwordHash out of the response)
function toUserDto(user: UserDomain): UserDto {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt.toISOString(),
    };
}


// 33. Type-Safe Service Layer
// A service layer encapsulates business logic. Typing the interface makes
// implementations swappable and easy to mock in tests.

interface UserService {
    findById(id: string): Promise<UserDto | null>;
    findAll(page: number, pageSize: number): Promise<PaginatedResponse<UserDto>>;
    create(dto: CreateUserDto): Promise<UserDto>;
    update(id: string, dto: Partial<CreateUserDto>): Promise<UserDto>;
    delete(id: string): Promise<void>;
}

// Concrete implementation
class UserServiceImpl implements UserService {
    private users: UserDomain[] = [];

    async findById(id: string): Promise<UserDto | null> {
        const user = this.users.find(u => u.id === id);
        return user ? toUserDto(user) : null;
    }

    async findAll(page: number, pageSize: number): Promise<PaginatedResponse<UserDto>> {
        const start = (page - 1) * pageSize;
        const items = this.users.slice(start, start + pageSize).map(toUserDto);
        return { items, total: this.users.length, page, pageSize, hasNextPage: start + pageSize < this.users.length };
    }

    async create(dto: CreateUserDto): Promise<UserDto> {
        const user: UserDomain = {
            id: crypto.randomUUID(),
            name: dto.name,
            email: dto.email,
            passwordHash: `hashed_${dto.password}`,
            createdAt: new Date(),
        };
        this.users.push(user);
        return toUserDto(user);
    }

    async update(id: string, dto: Partial<CreateUserDto>): Promise<UserDto> {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) throw new Error(`User ${id} not found`);
        if (dto.name) this.users[index].name = dto.name;
        if (dto.email) this.users[index].email = dto.email;
        return toUserDto(this.users[index]);
    }

    async delete(id: string): Promise<void> {
        this.users = this.users.filter(u => u.id !== id);
    }
}


// 34. Error Handling with Discriminated Unions
// A discriminated union has a shared literal field (the "discriminant") that lets
// TypeScript narrow to the exact variant in each branch — no casting needed.

type Result<T, E = string> =
    | { success: true;  data: T }
    | { success: false; error: E };

// Domain-specific error variants
type AppError =
    | { kind: "not_found";   resource: string; id: string }
    | { kind: "validation";  field: string;    message: string }
    | { kind: "unauthorized"; message: string }
    | { kind: "server_error"; message: string; stack?: string };

async function findUserById(id: string): Promise<Result<UserDto, AppError>> {
    if (!id) {
        return { success: false, error: { kind: "validation", field: "id", message: "ID is required" } };
    }
    // simulate not found
    return { success: false, error: { kind: "not_found", resource: "User", id } };
}

async function handleUserRequest(id: string) {
    const result = await findUserById(id);

    if (!result.success) {
        // TypeScript narrows result.error to AppError
        switch (result.error.kind) {
            case "not_found":
                console.log(`${result.error.resource} with id ${result.error.id} not found`);
                break;
            case "validation":
                console.log(`Validation failed on '${result.error.field}': ${result.error.message}`);
                break;
            case "unauthorized":
                console.log(`Unauthorized: ${result.error.message}`);
                break;
            case "server_error":
                console.error(`Server error: ${result.error.message}`);
                break;
        }
        return;
    }

    // TypeScript knows result.data is UserDto here
    console.log(`Found user: ${result.data.name}`);
}


// 35. Async Typing (Promise, async/await)
// TypeScript infers return types of async functions as Promise<T>.

// Explicit Promise generics
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry<T>(
    url: string,
    retries: number = 3
): Promise<T> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.json() as T;
        } catch (err) {
            if (attempt === retries) throw err;
            await delay(attempt * 500);
        }
    }
    throw new Error("Unreachable");
}

// Promise.all — TypeScript infers a tuple of resolved types
async function loadDashboard(userId: string) {
    const [user, posts, notifications] = await Promise.all([
        apiFetch<UserDto>(`/api/users/${userId}`),
        apiFetch<PaginatedResponse<{ id: string; title: string }>>(`/api/users/${userId}/posts`),
        apiFetch<number>(`/api/users/${userId}/notifications/count`),
    ]);
    return { user: user.data, posts: posts.data, notificationCount: notifications.data };
}

// Async generator — useful for streaming / paginated data
async function* paginate<T>(
    fetcher: (page: number) => Promise<PaginatedResponse<T>>
): AsyncGenerator<T> {
    let page = 1;
    while (true) {
        const result = await fetcher(page);
        for (const item of result.items) yield item;
        if (!result.hasNextPage) break;
        page++;
    }
}


// 36. Strict Mode (strictNullChecks, noImplicitAny)
// Enabled via tsconfig.json — "strict": true turns them all on at once.

// --- strictNullChecks ---
// Without it, null and undefined are assignable to every type (a common bug source).
// With it, you must handle them explicitly.

function getLength(value: string | null): number {
    // value.length  // Error: Object is possibly 'null'
    return value?.length ?? 0; // safe: optional chaining + nullish coalescing
}

// Non-null assertion operator (!) — tells TypeScript "I know this isn't null"
function findElement(id: string): HTMLElement {
    return document.getElementById(id)!; // assert it exists — use sparingly
}

// --- noImplicitAny ---
// Prevents parameters and variables from silently getting type `any`.
// Forces you to annotate when TypeScript can't infer.

function processItems(items: string[]): void { // must annotate — no implicit any
    items.forEach(item => console.log(item.toUpperCase()));
}

// --- Additional strict flags enabled by "strict": true ---
// strictFunctionTypes    : checks function parameter types contravariantly
// strictBindCallApply    : types bind/call/apply correctly
// strictPropertyInitialization : class properties must be initialised in the constructor
// noImplicitThis         : flags `this` expressions with an implied `any` type
// alwaysStrict           : emits "use strict" in output and parses in strict mode

// Recommended tsconfig.json for a new project:
// {
//   "compilerOptions": {
//     "strict": true,
//     "target": "ES2020",
//     "module": "NodeNext",
//     "moduleResolution": "NodeNext",
//     "outDir": "./dist",
//     "rootDir": "./src",
//     "declaration": true,
//     "sourceMap": true,
//     "esModuleInterop": true,
//     "skipLibCheck": true
//   }
// }
