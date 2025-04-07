import Database from 'better-sqlite3';

let db: Database.Database;

if (process.env.NODE_ENV === 'development') {
  db = new Database('./lib/database/time_table.sqlite');
} else {
  db = new Database('./lib/database/time_table.sqlite', { readonly: false });
}

// Khởi tạo schema
db.exec(`
  CREATE TABLE IF NOT EXISTS semester (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    year TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS course (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id TEXT,
    name TEXT NOT NULL,
    room TEXT NOT NULL,
    credit INTEGER,
    teacher TEXT,
    day TEXT,
    time TEXT,
    start_date TEXT,
    end_date TEXT,
    semester_id INTEGER,
    FOREIGN KEY (semester_id) REFERENCES semester(id)
  )
`);
//
// db.exec(`
//   CREATE TABLE IF NOT EXISTS courses_of_semesters (
//     semester_id INTEGER,
//     course_id INTEGER,
//     enrollment_date TEXT,
//     PRIMARY KEY (semester_id, course_id),
//     FOREIGN KEY (semester_id) REFERENCES semester(id),
//     FOREIGN KEY (course_id) REFERENCES course(id)
//   )
// `);

// const insert = db.prepare('INSERT INTO course (course_id, name, room, credit, teacher, time, start_date, end_date) VALUES (?, ?)');
// insert.run('MA005.E22.LT.CNTT', 'Xác suất thống kê', 'P01', 5, 'Nguyễn Văn Hợi', '8:00', 'Thứ 5', '04/07/2025', '20/07/2025');
// insert.run('IE105.E23.LT.CNTT', 'Nhập môn bảo đảm và an ninh thông tin', 'P01', 5, 'Tô Nguyễn Nhật Quang', '8:00', 'Thứ 5', '04/07/2025', '20/07/2025');

// Các hàm truy vấn database có kiểu dữ liệu rõ ràng
// export function getAllUsers() {
//     return db.prepare('SELECT * FROM users').all();
// }

// export function getUserById(id: number) {
//     return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
// }

// export function createUser(user: { name: string; email: string }): number {
//     const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
//     const result = stmt.run(user.name, user.email);
//     return result.lastInsertRowid as number;
// }

// export function updateUser(id: number, user: { name: string; email: string }): boolean {
//     const stmt = db.prepare('UPDATE users SET name = ?, email = ? WHERE id = ?');
//     const result = stmt.run(user.name, user.email, id);
//     return result.changes > 0;
// }

// export function deleteUser(id: number): boolean {
//     const result = db.prepare('DELETE FROM users WHERE id = ?').run(id);
//     return result.changes > 0;
// }

export default db;