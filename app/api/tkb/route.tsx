// "use server"

// import { promises as fs } from "fs";
// import path from "path";

// // Định nghĩa đường dẫn tới file JSON
// const filePath = path.join(process.cwd(), "data", "data.json");

// export async function GET() {
//     try {
//         const data = await fs.readFile(filePath, "utf-8");
//         return new Response(data, {
//             status: 200,
//             headers: { "Content-Type": "application/json" }
//         });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error }), { status: 500 });
//     }
// }

// export async function POST(req: Request): Promise<Response> {
//     const dataFs = await fs.readFile(filePath, "utf-8");

//     try {
//         const data = await JSON.parse(dataFs);
//         const body = await req.json();

//         data[body.index].subjects.push(body.data);

//         await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

//         return new Response(JSON.stringify({ message: "Lưu dữ liệu thành công!" }), { status: 200 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error }), { status: 400 })
//     }
// }

// export async function DELETE(req: Request) {

//     const data = await fs.readFile(filePath, "utf-8");

//     const newData = await JSON.parse(data);

//     try {
//         const index = await req.json();
//         newData[index.index].subjects.splice(index.arrIndex, 1);
//         await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
//         return new Response(JSON.stringify({ message: "Lưu dữ liệu thành công!" }), { status: 200 });

//     } catch (error) {
//         return new Response(JSON.stringify({ error: error }), { status: 500 });
//     }
// }

// export async function PATCH(req: Request) {

//     const data = await fs.readFile(filePath, "utf-8");

//     const newData = await JSON.parse(data);

//     try {
//         const index = await req.json();
//         newData[index.index].subjects[index.arrIndex] = {

//         };
//         await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
//         return new Response(JSON.stringify({ message: "Lưu dữ liệu thành công!" }), { status: 200 });

//     } catch (error) {
//         return new Response(JSON.stringify({ error: error }), { status: 500 });
//     }
// }
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
const FILE_PATH = path.join(process.cwd(), "data", "data.json");
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

        // Validate input
        if (!body.index && body.index !== 0 || !body.data) {
            return createResponse({ error: "Dữ liệu không hợp lệ" }, 400);
        }

        // Validate data structure
        if (body.index >= data.length || !Array.isArray(data[body.index]?.subjects)) {
            return createResponse({ error: "Index không hợp lệ" }, 400);
        }

        // Add new subject
        data[body.index].subjects.push(body.data);
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