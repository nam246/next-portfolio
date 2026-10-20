# C# .NET cheatsheet
# 1. C# Basics

## Kiểu dữ liệu

```csharp
var person = new { Name = "An", Age = 25 }; // (implicitly typed local variables)
int age = 28;               // Integer (whole number)
double myDoubleNum = 5.99D  // Floating point number
bool active = true;
char myLetter = 'D';        // Character
string name = "Trung";      // String
DateTime now = DateTime.Now;
```

Phân biệt:

* Value type: `int`, `bool`, `struct`, `enum`
* Reference type: `class`, `string`, `array`, `object`
* `null`, nullable types: `int?`, `string?`

* **Khai báo biến:** `var`, `dynamic`, `object` (Khi nào nên dùng?).
* **Value Types vs Reference Types:**
  * Memory Allocation: Stack vs Heap.
  * `struct` vs `class` vs `record` (Điểm khác biệt cốt lõi).
* **Null Safety:** Nullable reference types (`string?`), Null-coalescing (`??`, `??=`), Null-conditional (`?.`).
* **String Handling:** String Interpolation (`$""`), Raw String Literals (`"""..."""` - C# 11), `StringBuilder`.

## 2. Lập trình hướng đối tượng nâng cao (Advanced OOP & Modern C#)

4 khái niệm chính:

| Concept       | Ý nghĩa                            |
| ------------- | ---------------------------------- |
| Encapsulation | Đóng gói dữ liệu + behavior        |
| Inheritance   | Class kế thừa class khác           |
| Polymorphism  | Cùng interface nhưng behavior khác |
| Abstraction   | Chỉ expose thứ cần thiết           |

* **Access Modifiers:** `public`, `private`, `protected`, `internal`, `private protected`, `protected internal`.
* **Interface vs Abstract Class:** Bảng so sánh nhanh và Default Interface Methods.
* **Pattern Matching:** `switch` expression hiện đại, Property pattern, Relational pattern.
* **Properties:** Auto-implemented properties, `init`-only properties (C# 9).
* **Primary Constructors:** Cú pháp khai báo nhanh cho `class` và `struct` (C# 12).

## 3. Quản lý bộ nhớ & Hiệu năng (Memory Management & Performance)

* **Garbage Collection (GC):** Cách thức hoạt động cơ bản (Generations 0, 1, 2) và LOH (Large Object Heap).
* **Resource Management:** `IDisposable` interface và cú pháp `using` statement / `using` declaration hiện đại.
* **Performance Boosters:** Khái niệm nhanh về `ref`, `out`, `in` parameters, và sơ lược về `Span<T>` / `Memory<T>`.

## 4. LINQ Cheatsheet (Language Integrated Query)

* **Deferred Execution (Hoãn thực thi):** `IEnumerable` vs `IQueryable` (Khi nào code chạy?).
* **Các hàm thông dụng (Cheat-list ngắn):**
  * Lọc & Chọn: `.Where()`, `.Select()`, `.SelectMany()`.
  * Tìm phần tử: `.First()`, `.FirstOrDefault()`, `.Single()`, `.SingleOrDefault()`.
  * Gom nhóm & Sắp xếp: `.GroupBy()`, `.OrderBy()`, `.OrderByDescending()`.
* **LINQ hiệu năng cao:** Tránh lỗi "Multiple Enumeration".

## 5. Lập trình bất đồng bộ (Asynchronous Programming)

* **Từ khóa:** `async` và `await` hoạt động như thế nào?
* **Task vs ValueTaks:** Khi nào nên dùng `ValueTask` để tối ưu bộ nhớ?
* **Xử lý đa tác vụ:** `Task.WhenAll()`, `Task.WhenAny()`.
* **Bỏ qua tác vụ:** Sử dụng `CancellationToken` đúng cách.

## 6. Khung ứng dụng .NET (The .NET Ecosystem & Web API)

* **Dependency Injection (DI):** Phân biệt Lifetime: `Transient` vs `Scoped` vs `Singleton`.
* **Middleware Pipeline:** Luồng đi của Request trong ASP.NET Core.
* **Configuration & Options Pattern:** Cách đọc file `appsettings.json`.

## 7. Các đoạn code mẫu "Ăn liền" (Quick Snippets)

* Đọc/Ghi file nhanh (`System.IO.File`).
* Serialization/Deserialization JSON (`System.Text.Json`).
* Gọi API nhanh với `HttpClient` / `IHttpClientFactory`.

# 2. .NET / .NET CLI

## Định nghĩa

.NET là runtime + SDK + thư viện/framework ecosystem để chạy và phát triển ứng dụng C#.

Phân biệt:

```text
.NET Runtime
.NET SDK
ASP.NET Core
```

* **Runtime** → chạy application.
* **SDK** → phát triển application.
* **ASP.NET Core** → framework xây dựng web/API trên .NET.

## .NET CLI

Các command quan trọng:

```bash
dotnet --version
dotnet --info

dotnet new webapi
dotnet new console

dotnet restore
dotnet build
dotnet run

dotnet test

dotnet add package <package>
dotnet remove package <package>

dotnet clean
dotnet publish
```

## Project / Solution

```text
MyApp.sln
 ├── MyApp.Api
 ├── MyApp.Application
 ├── MyApp.Domain
 └── MyApp.Infrastructure
```

## `csproj`

Đây là file định nghĩa project:

```xml
<TargetFramework>net10.0</TargetFramework>

<PackageReference
    Include="Microsoft.EntityFrameworkCore"
    Version="..." />
```

# 3. GENERAL DEVELOPMENT SKILLS

[General development skill](/general-dev-skills)

```text
Git
HTTP / HTTPS
Data Structures & Algorithms
```

# 4. Database Fundamentals

[Database](/database-fundamental)

# 5. ASP.NET Core Basics

# 6. Object Relational Mapping (Entity Framework Core)

# 7. Dependency Injection

# 8. Caching

# 9. Databases

# 10. Log frameworks

# 11. API Clients and Communication (REST)

# 12. Real-Time Communication (Web socket)

# 13. Object Mapping

