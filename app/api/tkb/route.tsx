"use server"

import { promises as fs } from "fs";
import path from "path";

// Định nghĩa đường dẫn tới file JSON
const filePath = path.join(process.cwd(), "data", "data.json");

export async function GET() {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return new Response(data, {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}

// export async function POST(req: any) {
//     try {
//         const newData = await req.json();
//         await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
//         return new Response(JSON.stringify({ message: "Lưu dữ liệu thành công!" }), { status: 200 });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: "Không thể ghi vào file JSON" }), { status: 500 });
//     }
// }

export async function POST(req: Request): Promise<Response> {
    const dataFs = await fs.readFile(filePath, "utf-8");

    const data = await JSON.parse(dataFs);
    const body = await req.json();

    data[body.index].subjects.push(body.data);

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

    return new Response(JSON.stringify({ message: "Lưu dữ liệu thành công!" }), { status: 200 });
}

export async function DELETE(req: Request) {

    const data = await fs.readFile(filePath, "utf-8");

    const newData = await JSON.parse(data);

    try {
        const index = await req.json();
        newData[index.index].subjects.splice(index.arrIndex, 1);
        await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
        return new Response(JSON.stringify({ message: "Lưu dữ liệu thành công!" }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}

export async function PATCH(req: Request) {

    const data = await fs.readFile(filePath, "utf-8");

    const newData = await JSON.parse(data);

    try {
        const index = await req.json();
        newData[index.index].subjects[index.arrIndex] = {

        };
        await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
        return new Response(JSON.stringify({ message: "Lưu dữ liệu thành công!" }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}

// export default async function create(formData: FormData): Promise<void | never> {

//     const data = await fs.readFile(filePath, "utf-8");

//     const newData = await JSON.parse(data);

//     const index = formData.get("index");
//     if (typeof index === "string" && !isNaN(Number(index))) {
//         const numericIndex = Number(index);
//         newData[numericIndex].subjects.push({
//             "maMonHoc": formData.get("maMonHoc"),
//             "tenMonHoc": formData.get("tenMonHoc"),
//             "phongHoc": formData.get("phongHoc"),
//             "thoiGianBatDau": formData.get("thoiGianBatDau"),
//             "thoiGianKetThuc": formData.get("thoiGianKetThuc")
//         })
//     }

//     await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
// }