## DATA TYPES

1. String
2. Number
3. BigInt
4. Boolean
5. undefined
6. null
7. Symbol
8. Object
   1. Object
   2. Array
   3. Date

---

Học Oracle Database có thể là một hành trình dài nhưng rất đáng giá, đặc biệt nếu bạn muốn làm việc trong các môi trường doanh nghiệp lớn. Dưới đây là các bước và tài nguyên bạn có thể tham khảo để học về Oracle Database:

**1. Nắm vững kiến thức nền tảng về Cơ sở dữ liệu và SQL:**

Trước khi đi sâu vào Oracle, hãy đảm bảo bạn có kiến thức vững chắc về:

- **Các khái niệm cơ sở dữ liệu quan hệ (RDBMS):** Bảng, cột, hàng, khóa chính, khóa ngoại, mối quan hệ, chuẩn hóa dữ liệu (normalization).
- **SQL (Structured Query Language):** Đây là ngôn ngữ chung để giao tiếp với các RDBMS. Bạn cần thành thạo:
  - **DDL (Data Definition Language):** `CREATE`, `ALTER`, `DROP` (tạo, sửa, xóa bảng, view, index...).
  - **DML (Data Manipulation Language):** `SELECT`, `INSERT`, `UPDATE`, `DELETE` (truy vấn, thêm, sửa, xóa dữ liệu).
  - **DCL (Data Control Language):** `GRANT`, `REVOKE` (cấp/thu hồi quyền).
  - **TCL (Transaction Control Language):** `COMMIT`, `ROLLBACK`, `SAVEPOINT` (quản lý giao dịch).
- **Logic cơ bản của cơ sở dữ liệu:** Giao dịch (transactions), ACID properties, chỉ mục (indexes).

**2. Bắt đầu với Oracle SQL và PL/SQL:**

Sau khi có nền tảng vững chắc về SQL, bạn có thể chuyển sang các phần mở rộng và tính năng riêng của Oracle:

- **Oracle SQL:** Mặc dù SQL là chuẩn, Oracle có một số cú pháp và hàm riêng. Hãy làm quen với chúng.
- **PL/SQL:** Đây là ngôn ngữ lập trình thủ tục mạnh mẽ của Oracle. Bạn cần học cách viết:
  - Thủ tục (Procedures), Hàm (Functions).
  - Gói (Packages) để tổ chức mã.
  - Kích hoạt (Triggers).
  - Xử lý lỗi (Exception Handling).
  - Con trỏ (Cursors).

**3. Hiểu về Kiến trúc Oracle Database:**

Oracle Database có một kiến trúc phức tạp và mạnh mẽ. Bạn cần hiểu các thành phần chính như:

- **Instance:** SGA (System Global Area), Background Processes.
- **Database:** Data Files, Control Files, Redo Log Files, Archive Log Files.
- **Kiến trúc Multi-tenant (CDB/PDB):** Một tính năng quan trọng từ Oracle 12c trở đi.
- **User/Schema/Tablespace:** Cách Oracle quản lý người dùng, đối tượng và lưu trữ vật lý.

**4. Học về Quản trị Oracle Database (DBA):**

Đây là phần quan trọng nhất nếu bạn muốn trở thành một DBA. Bao gồm:

- **Cài đặt và cấu hình:** Cài đặt Oracle Database trên các hệ điều hành khác nhau (Linux được khuyến nghị).
- **Quản lý người dùng và quyền hạn:** Tạo, quản lý user, role, profile, cấp và thu hồi quyền.
- **Quản lý không gian lưu trữ:** Tablespace, Datafile, ASM (Automatic Storage Management).
- **Sao lưu và phục hồi (Backup & Recovery):** Sử dụng RMAN (Recovery Manager) là kỹ năng cốt lõi. Hiểu về Hot Backup, Cold Backup, điểm phục hồi (restore points).
- **Giám sát hiệu suất (Performance Tuning):** Sử dụng các công cụ như Statspack, AWR, ADDM để phân tích và tối ưu hiệu suất truy vấn, instance và I/O.
- **Tính sẵn sàng cao (High Availability):** Hiểu về Data Guard, Real Application Clusters (RAC) nếu có thể (nhưng đây là chủ đề nâng cao).
- **Bảo mật:** Triển khai các biện pháp bảo mật cho cơ sở dữ liệu.

**5. Các nguồn học và tài liệu:**

- **Tài liệu chính thức của Oracle (Oracle Documentation):** Đây là nguồn thông tin chính xác và đầy đủ nhất. Hãy làm quen với việc tìm kiếm thông tin trên trang docs.oracle.com.
- **Oracle Live SQL:** Một nền tảng trực tuyến miễn phí của Oracle cho phép bạn thực hành SQL và PL/SQL mà không cần cài đặt gì. Rất tiện lợi cho người mới bắt đầu.
- **Oracle Database Free:** Oracle cung cấp phiên bản "Oracle Database Free" (trước đây là Express Edition - XE) cho phép bạn cài đặt và sử dụng miễn phí trên máy tính cá nhân để thực hành.
- **Các khóa học trực tuyến (Online Courses):**
  - **Oracle University:** Đây là kênh đào tạo chính thức của Oracle, cung cấp các khóa học có trả phí và đôi khi có các tài nguyên miễn phí. Đây là nơi tốt nhất để chuẩn bị cho các chứng chỉ Oracle.
  - **Coursera, Udemy, edX:** Có nhiều khóa học về SQL, PL/SQL và Oracle Database trên các nền tảng này, cả miễn phí và trả phí.
  - **Oracle Academy:** Cung cấp tài nguyên và khóa học miễn phí cho các tổ chức giáo dục và học sinh/sinh viên.
- **Sách chuyên ngành:** Có rất nhiều sách về Oracle Database, từ cơ bản đến nâng cao. Một số tác giả nổi tiếng như Tom Kyte, Jonathan Lewis.
- **Blog và Diễn đàn:** Tham gia các cộng đồng Oracle trực tuyến (ví dụ: Ask Tom của Oracle, các diễn đàn DBA).
- **Kênh YouTube:** Nhiều kênh chia sẻ kiến thức về Oracle, hướng dẫn cài đặt và thực hành.

**6. Thực hành là chìa khóa:**

Oracle Database là một hệ thống phức tạp, và cách tốt nhất để học là thông qua thực hành.

- **Cài đặt Oracle:** Hãy cài đặt một phiên bản Oracle Database Free trên máy tính của bạn và tự mình thực hiện các tác vụ quản trị, tạo bảng, viết truy vấn, PL/SQL.
- **Làm các bài tập:** Tìm kiếm các bài tập SQL và PL/SQL và giải chúng.
- **Xây dựng các dự án nhỏ:** Thử xây dựng một ứng dụng nhỏ sử dụng Oracle làm database backend.

**7. Cân nhắc các chứng chỉ Oracle:**

Oracle cung cấp các chương trình chứng chỉ (Certification) cho các cấp độ khác nhau (Associate, Professional, Master, Specialist). Việc theo đuổi chứng chỉ có thể giúp bạn có lộ trình học tập rõ ràng và được công nhận về kỹ năng.

- **Oracle Database SQL Certified Associate (OCA):** Thường là chứng chỉ đầu tiên về SQL.
- **Oracle Database Administration 2019 Certified Professional (OCP):** Dành cho DBA.

**Lời khuyên:**

- **Bắt đầu từ cơ bản:** Đừng vội vàng nhảy vào các chủ đề nâng cao nếu bạn chưa vững kiến thức nền tảng.
- **Tập trung vào một phiên bản cụ thể:** Oracle phát triển rất nhanh. Hãy chọn một phiên bản LTS (Long Term Support) như Oracle 19c hoặc phiên bản mới nhất Oracle 23ai để bắt đầu.
- **Kiên nhẫn:** Oracle Database là một chủ đề rộng lớn. Hãy kiên nhẫn và học từng bước một.
- **Tìm một người hướng dẫn (mentor):** Nếu có thể, tìm một DBA Oracle có kinh nghiệm để học hỏi và giải đáp thắc mắc.

Chúc bạn thành công trên con đường học Oracle Database!
