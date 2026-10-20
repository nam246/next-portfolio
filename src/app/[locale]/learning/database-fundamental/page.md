# DATABASE FUNDAMETAL

## Database là gì?

- Một cơ sở dữ liệu (Database) là một tập hợp các tập tin có liên
  quan với nhau, được thiết kế theo một chuẩn chung được các nhà
  khoa học đề xuất.
- Một hệ quản trị cơ sở dữ liệu (Database Management System) là
  một hệ thống gồm các CSDL và các thao tác trên CSDL đó, được
  thiết kế trên một nền tảng phần cứng, phần mềm và với một kiến
  trúc nhất định.

## Các thao tác trên 1 hệ quản trị CSDL

- Thu thập dữ liệu
- Làm sạch dữ liệu
- Phân tích dữ liệu
- Xử lý dữ liệu
- Khôi phục dữ liệu
- Sao lưu dữ liệu

## Nhóm định nghĩa dữ liệu (DDL)

Gồm các lệnh tạo, thay đổi cấu trúc các bảng dữ liệu (Create,
Drop, Alter)

### Lệnh tạo bảng (CREATE)

```sql
CREATE TABLE <tên_bảng>
 (
 <tên_cột1>    <kiểu_dữ_liệu> [not null],
 <tên_cột2>    <kiểu_dữ_liệu> [not null],
 …
 <tên_cột1>    <kiểu_dữ_liệu> [not null],
 khai báo khóa chính, khóa ngoại, ràng buộc
 )

CREATE TABLE KHACHHANG
(
    MAKH  char(4) primary key,
    HOTEN  varchar(40),
    DCHI  varchar(50),
    SODT  varchar(20),
    NGSINH  smalldatetime,
    DOANHSO money,
    NGDK  smalldatetime,
    CMND  varchar(10)
)

CREATE TABLE CTHD
(
    SOHD int foreign key references HOADON(SOHD),
    MASP char(4) foreign key references SANPHAM(MASP),
    SL  int,
    constraint PK_CTHD primary key (SOHD,MASP)
)

```

**Một số kiểu dữ liệu**

| Phân loại | Kiểu dữ liệu | Mô tả / Ghi chú |
| --- | --- | --- |
| **Chuỗi ký tự** | `varchar(n)`, `char(n)`, `nvarchar(n)`, `nchar(n)` | - `char`: Chuỗi có độ dài cố định.<br>- `varchar`: Chuỗi có độ dài thay đổi.<br>- `nchar` / `nvarchar`: Chuỗi hỗ trợ lưu ký tự Unicode (tiếng Việt có dấu). |
| **Số** | `tinyint`, `smallint`, `int`, `numeric(m,n)`, `decimal(m,n)`, `float`, `real`, `smallmoney`, `money` | - **Số nguyên**: `tinyint`, `smallint`, `int`.<br>- **Số thập phân / Chính xác**: `numeric(m,n)`, `decimal(m,n)`.<br>- **Số thực**: `float`, `real`.<br>- **Tiền tệ**: `smallmoney`, `money`. |
| **Ngày tháng** | `smalldatetime`, `datetime` | Lưu trữ dữ liệu ngày và giờ. |
| **Luận lý** | `bit` | Lưu giá trị logic (0, 1 hoặc NULL). |

### Lệnh sửa cấu trúc bảng (ALTER)

- Thêm thuộc tính

```sql
ALTER TABLE KHACHHANG ADD GHI_CHU varchar(20)
```

- Xóa thuộc tính

```sql
ALTER TABLE KHACHHANG ALTER COLUMN GHI_CHU varchar(50)
```

- Thêm ràng buộc khóa chính:

```sql
ALTER TABLE NHANVIEN ADD CONSTRAINT PK_NV PRIMARY KEY (MANV)
```

- Thêm ràng buộc khóa ngoại

```sql
ALTER TABLE CTHD ADD CONSTRAINT FK_CT_SP FOREIGN KEY (MASP) REFERENCES SANPHAM(MASP)
```

- Thêm ràng buộc check

```sql
ALTER TABLE SANPHAMADD CONSTRAINT CK_GIA CHECK (GIA >=500)
```

- Thêm ràng buộc Unique

```sql
ALTER TABLE KHACHHANG ADD CONSTRAINT UQ_KH UNIQUE (CMND)
```

- Xóa ràng buộc toàn vẹn

```sql
ALTER TABLE CTHD DROP CONSTRAINT FK_CT_SP
```

>Lưu ý: đối với ràng buộc khóa chính, muốn xóa ràng buộc này phải xóa hết các ràng buộc khóa ngoại tham chiếu tới nó.

- Sửa kiểu dữ liệu thuộc tính

```sql
ALTER TABLE KHACHHANG ALTER COLUMN GHI_CHU varchar(50)
```

>**Lưu ý**: Không phải sửa bất kỳ kiểu dữ liệu nào cũng được.

- Xóa thuộc tính

```sql
ALTER TABLE KHACHHANG DROP COLUMN Ghi_chu
```

### Lệnh xóa bảng (DROP)

```sql
DROP TABLE tên_bảng
```

## Nhóm thao tác dữ liệu (DML)

Gồm các lệnh làm thay đổi dữ liệu lưu trong bảng (Insert, Delete,
Update, Select)

### LỆNH TRUY VẤN DỮ LIỆU (SELECT)

1. Toán tử truy vấn

- Toán tử so sánh: =, >,<,>=,<=,<>
- Toán tử logic: AND,  OR,  NOT
- Phép toán: +, - ,* , /
- BETWEEN …. AND
- IS NULL, IS NOT NULL
- LIKE (_ %)
- IN, NOT IN  
- EXISTS , NOT EXISTS
- SOME, ALL

2. Câu truy vấn tổng quát

```sql
SELECT   [DISTINCT] <danh sách cột / biểu thức>
FROM     <bảng>
[JOIN    <bảng khác> ON <điều kiện>]
[WHERE   <điều kiện lọc dòng>]
[GROUP BY <cột gom nhóm>]
[HAVING  <điều kiện lọc nhóm>]
[ORDER BY <cột> [ASC|DESC]]
```

3. Truy vấn đơn giản

```
SANPHAM (MASP, TENSP, DVT, NUOCSX, GIA)
```

- Tìm masp, tensp do “Trung Quoc” sản xuất

```sql
SELECT masp,tensp
FROM SANPHAM
WHERE nuocsx=‘Trung Quoc’
```

- Tìm masp, tensp do “Trung Quoc” sản xuất có giá từ 2000 đến 3000

```sql
SELECT masp,tensp
FROM SANPHAM
WHERE nuocsx=‘Trung Quoc’ AND gia >= 2000 AND gia<= 3000
```

4. Đặt bí danh, sử dụng *, distinct
5. Phép kết (JOIN)

```text
INNER JOIN Chỉ lấy dòng khớp ở cả 2 bảng
LEFT JOIN Lấy hết bảng trái, bảng phải không khớp thì NULL
RIGHT JOIN Ngược lại với LEFT
FULL JOIN Lấy tất cả từ cả 2 bảng
```

```sql
SELECT KH.HOTEN, HD.SOHD, HD.TRIGIA
FROM KHACHHANG KH
INNER JOIN HOADON HD ON KH.MAKH = HD.MAKH
```

6. Hàm tính toán, gom nhóm
7. Truy vấn lồng
8. Phép toán tập hợp
9. Phép chia

### Lệnh thêm dữ liệu (INSERT)

```sql
INSERT INTO SANPHAM values('BC01','But chi', 'cay', 'Singapore', 3000)
INSERT INTO SANPHAM(masp,tensp,dvt,nuocsx,gia) values ('BC01','But chi','cay','Singapore',3000)
```

### Lệnh sửa dữ liệu (UPDATE)

- Tăng giá 10% đối với những sản phẩm do “Trung Quoc” sản xuất

```sql
UPDATE SANPHAM 
SET Gia = Gia*1.1 
WHERE Nuocsx=‘Trung Quoc’
```

### Lệnh Xóa dữ liệu (DELETE)

- Xóa toàn bộ nhân viên

```sql
DELETE FROM NHANVIEN
```

- Xóa những sản phẩm do Trung Quốc sản xuất có giá thấp hơn 10000

```sql
DELETE FROM SANPHAM
WHERE (Gia <10000) and (Nuocsx=‘Trung Quoc’)
```

## Nhóm điều khiển dữ liệu (DCL)

Gồm các lệnh quản lý quyền truy cập vào dữ liệu và các bảng (Grant, Revoke, Deny)

```sql
GRANT SELECT, INSERT ON SANPHAM TO user1          -- cấp quyền
REVOKE INSERT ON SANPHAM FROM user1               -- thu hồi quyền
DENY DELETE ON SANPHAM TO user1                   -- cấm hẳn (ưu tiên cao hơn GRANT)
```

## Nhóm điều khiển Transaction (TCL)

Gồm các lệnh điều khiển Transaction COMMIT, ROLLBACK, SAVEPOINT

### Transaction

Một nhóm operation phải được thực hiện theo nguyên tắc:

```text
BEGIN
 ↓
Operation A
 ↓
Operation B
 ↓
COMMIT
```

Nếu lỗi:

```text
ROLLBACK
```

## Stored procedure

**Định nghĩa**

- Một Stored Procedure là bao gồm các câu lệnh Transact-SQLvà được lưu lại trong cơ sở dữ liệu.
- Transact-SQL (T-SQL) là một ngôn ngữ lập trình được sử dụng làm trung gian giữa cơ sở dữ liệu và các ứng dụng. Nó tương đối dễ học vì thực chất nó được tạo bởi hầu hết là các lệnh SQL

**Lợi ích**

- Module hóa: Chỉ cần viết Stored Procedure 1 lần, sau đó có thể gọi nó nhiều lần ở trong ứng dụng.
- Thực thi nhanh hơn: Stored Procedure sẽ được biên dịch và lưu vào bộ nhớ khi được tạo ra -thực thi nhanh hơn so với việc gửi từng đoạn lệnh SQL tới SQL Server.
- Giảm tải băng thông: gom các câu lệnh SQL vào 1 Stored Procedure và chỉ phải gọi đến 1 lần duy nhất qua network thay vì phải gọi nhiều lần.

**Khai báo một store procedure**

Viết procedure liệt kê danh sách tất cả các khách hàng.

```sql
CREATE PROCEDURE Danh_sach_khach_hang
AS
SELECT * FROM Customers
```

**Thực thi store procedure**

```sql
EXEC Danh_sach_khach_hang;
```

PROCEDURE có tham số

```sql
CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)
AS
SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
```

```sql
EXEC SelectAllCustomers 'London', 'WA1 1DP';
```

PROCEDURE tham số ra

```sql
CREATE PROCEDURE SelectCustomerName
    @CustomerID char(2),
    @CustomerName nvarchar(100) OUTPUT
AS
BEGIN
    SELECT @CustomerName = CustomerName
    FROM Customers
    WHERE CustomerID = @CustomerID
END
GO

DECLARE @CName nvarchar(100)
EXEC SelectCustomerName @CustomerID = '2', @CustomerName = @CName OUTPUT
PRINT @CName   -- in kết quả
```

## Ràng buộc toàn vẹn

- Mô tả chặt chẽ ý nghĩa của ràng buộc toàn vẹn.
- Nội dung được phát biểu bằng ngôn ngữ tự nhiên hoặc bằng ngôn ngữ hình thức (ngôn ngữ tân từ, đại số quan hệ, mã giả,…)
  - Ngôn ngữ tự nhiên: dễ hiểu nhưng không chặt chẽ, logic.
  - Ngôn ngữ hình thức: chặt chẽ, cô đọng.

## Trigger

- Trigger là stored procedure đặc biệt sẽ tự động thực hiện khi có hành động/sự kiện thay đổi dữ liệu (data modification) xảy ra như Update, Insert hoặc Delete lên 1 table mà trigger bảo vệ (được cài đặt).
- Trigger được dùng để đảm bảo tính toàn vẹn dữ liệu (Data Integrity) hoặc thực hiện các quy tắc nghiệp vụ (business rules) nào đó.

Tạo Trigger

Phát biểu: Một sinh viên (MSSV) không được thi quá 2 lần.

```sql
CREATE TRIGGER trg_KiemTraThi2Lan
ON KETQUA
AFTER INSERT -- "FOR" trong T-SQL chính là AFTER
AS
BEGIN
    IF EXISTS (
        SELECT 1
        FROM KETQUA k
        JOIN INSERTED i ON k.MSSV = i.MSSV AND k.MSMH = i.MSMH
        GROUP BY k.MSSV, k.MSMH
        HAVING COUNT(*) > 2
    )
    BEGIN
        PRINT N'Không thể thi quá 2 lần'
        ROLLBACK TRANSACTION
    END
END
```

Sửa Trigger

Sửa trigger KiemTraThi2Lan.

```sql
Alter  Trigger KiemTraThi2Lan
   On KETQUA for Insert
   As 
   begin
      If (Select  Count(*) from KETQUA a, INSERTED  b
      Where a.MSSV=b.MSSV and  a.MSMH=b.MSMH)>2
      Begin
         Print ‘ Khong the qua 2 lan’
         Rollback Transaction
      End
   End 
```

Xóa Trigger

```sql
Drop Trigger TenTrigger
```

làm mất hiệu lực tạm thời của Trigger lên 1 table

```sql
Alter Table   tenTable 
{Enable/ Disable } Trigger {all/TenTrigger}
```

### ACID

| Thành phần  | Ý nghĩa                              |
| ----------- | ------------------------------------ |
| Atomicity   | All or nothing                       |
| Consistency | Data hợp lệ                          |
| Isolation   | Transaction không ảnh hưởng sai nhau |
| Durability  | Commit rồi thì dữ liệu được giữ      |

---

### Mục tiêu

Thiết kế database sao cho:

```text
Correct
Consistent
Maintainable
Performant
Scalable
```

### Entity

Ví dụ hệ thống bán hàng:

```text
User
Product
Order
OrderItem
```

### Relationship

```text
User
 │
 └──< Order
        │
        └──< OrderItem >── Product
```

### Normalization

Mục đích chính:

> Giảm duplicate data và tránh inconsistency.

Ví dụ không tốt:

```text
Order
--------------------------------
OrderId
CustomerName
CustomerPhone
Product1
Product2
Product3
```

Nên tách:

```text
Customer
Order
OrderItem
Product
```

### Normal Forms

Cần biết khái niệm:

```text
1NF
2NF
3NF
```

Không nhất thiết phải học quá sâu ngay từ đầu, nhưng phải hiểu tại sao normalize.

### Denormalization

Đôi khi cố tình duplicate dữ liệu để tăng performance.

Ví dụ:

```text
Order
 ├── CustomerId
 └── CustomerName
```

`CustomerName` có thể được lưu thêm dù đã có ở `Customer`.

Đây là trade-off:

```text
Consistency
     ↕
Performance
```

### Index Design

Cần suy nghĩ:

```text
WHERE
JOIN
ORDER BY
GROUP BY
```

query nào thường xuyên → cân nhắc index.

---
