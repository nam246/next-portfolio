"use server"

import { promises as fs } from "fs";
import path from "path";

// Định nghĩa kiểu dữ liệu
type Subject = {
    maMonHoc: string;
    tenMonHoc: string;
    phongHoc: string;
    thoiGianBatDau: Date;
    thoiGianKetThuc: Date;
}

type TkbType = {
    index: number;
    day: string;
    subjects: Subject[];
}

// Constants
const FILE_PATH = path.join(process.cwd(), "data", "data_v2.json");
const HEADERS = { "Content-Type": "application/json" };

// Helper function để đọc file
async function readDataFile(): Promise<TkbType[]> {
    try {
        const data = await fs.readFile(FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading data file:", error);
        throw new Error("Không thể đọc file dữ liệu");
    }
}

// Helper function để ghi file
async function writeDataFile(data: TkbType[]): Promise<void> {
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

export async function GET() {
    try {
        const data = await readDataFile();
        return createResponse(data);
    } catch (error) {
        return createResponse({ error: "Không thể lấy dữ liệu" }, 500);
    }
}

export async function POST(req: Request): Promise<Response> {
    try {
        const data = await readDataFile();
        const body = await req.json();

        data.push(body.data.semesterFormData);
        await writeDataFile(data);

        return createResponse({ message: "Lưu dữ liệu thành công!" });
    } catch (error) {
        console.error("POST error:", error);
        return createResponse({ error: "Lỗi khi xử lý yêu cầu" }, 400);
    }
}

export async function DELETE(req: Request) {
    try {
        const data = await readDataFile();
        const { index, arrIndex } = await req.json();

        // Validate input
        if ((index === undefined) || (arrIndex === undefined)) {
            return createResponse({ error: "Thiếu thông tin index hoặc arrIndex" }, 400);
        }

        // Validate data structure
        if (index >= data.length ||
            !Array.isArray(data[index]?.subjects) ||
            arrIndex >= data[index].subjects.length) {
            return createResponse({ error: "Index không hợp lệ" }, 400);
        }

        // Remove subject
        data[index].subjects.splice(arrIndex, 1);
        await writeDataFile(data);

        return createResponse({ message: "Xóa dữ liệu thành công!" });
    } catch (error) {
        console.error("DELETE error:", error);
        return createResponse({ error: "Lỗi khi xử lý yêu cầu" }, 500);
    }
}

export async function PATCH(req: Request) {
    try {
        const data = await readDataFile();
        const { index, arrIndex, updatedData } = await req.json();

        // Validate input
        if ((index === undefined) || (arrIndex === undefined)) {
            return createResponse({ error: "Thiếu thông tin index hoặc arrIndex" }, 400);
        }

        // Validate data structure
        if (index >= data.length ||
            !Array.isArray(data[index]?.subjects) ||
            arrIndex >= data[index].subjects.length) {
            return createResponse({ error: "Index không hợp lệ" }, 400);
        }

        // Update subject - sửa theo updatedData nếu có, nếu không thì để trống
        data[index].subjects[arrIndex] = updatedData || {};
        await writeDataFile(data);

        return createResponse({ message: "Cập nhật dữ liệu thành công!" });
    } catch (error) {
        console.error("PATCH error:", error);
        return createResponse({ error: "Lỗi khi xử lý yêu cầu" }, 500);
    }
}