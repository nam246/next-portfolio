"use server"

import { promises as fs } from "fs";
import path from "path";

type Course = {
    id: string,
    name: string,
    room: string,
    credit: number,
    teacher: string,
    day: string,
    time: string,
    startDate: Date,
    endDate: Date,
}

type Semester = {
    semester: number,
    courses: Course[]
}

// Constants
const FILE_PATH = path.join(process.cwd(), "data", "data_v2.json");
const HEADERS = { "Content-Type": "application/json" };

// Helper function để đọc file
async function readDataFile(): Promise<Semester[]> {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading data file:", error);
        throw new Error("Không thể đọc file dữ liệu");
    }
}

// Helper function để ghi file
async function writeDataFile(data: Semester[]): Promise<void> {
    try {
        await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing data file:", error);
        throw new Error("Không thể ghi file dữ liệu");
    }
}

// Helper function để tạo response
function createResponse(data: any, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: HEADERS
    });
}

export async function POST(req: Request): Promise<Response> {
    try {
        const data = await readDataFile();
        const body = await req.json();

        console.log(data);
        console.log(body);

        // data[body.data.semesterIndex].courses.push(body.data);
        // await writeDataFile(data);

        return createResponse({ message: "Lưu dữ liệu thành công!" });
    } catch (error) {
        console.error("POST error:", error);
        return createResponse({ error: "Lỗi khi xử lý yêu cầu" }, 400);
    }
}