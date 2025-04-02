"use client"
type Subject = {
    maMonHoc: string,
    tenMonHoc: string,
    phongHoc: string,
    thoiGianBatDau: Date,
    thoiGianKetThuc: Date
}

type TkbType = {
    index: number,
    day: string,
    subjects: Subject[]
}

import { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { PopoverContent } from "@/components/ui/popover";


export default function Tkb() {
    const [data, setData] = useState<TkbType[]>([])

    const [maMonHoc, setMaMonHoc] = useState<string>("");
    const [monHoc, setMonHoc] = useState<string>("");
    const [phongHoc, setPhongHoc] = useState<string>("");
    const [thoiGianBatDau, setThoiGianBatDau] = useState<Date>();
    const [thoiGianKetThuc, setThoiGianKetThuc] = useState<Date>();

    const reqData: Subject = {
        maMonHoc: maMonHoc,
        tenMonHoc: monHoc,
        phongHoc: phongHoc,
        thoiGianBatDau: thoiGianBatDau || new Date(),
        thoiGianKetThuc: thoiGianKetThuc || new Date()
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("/api/tkb");
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.error("Lỗi khi fetch API:", error);
            }
        }
        fetchData();
    }, [])

    const postHandle = async (index: number) => {
        const data = await fetch("api/tkb", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                index: index,
                data: reqData
            }),
        })

        const res = await data.json();

        if (res.status) {
            console.log("created!");
        }
    }

    const deleteHandle = async (index: number, arrIndex: number) => {
        const res = await fetch("/api/tkb", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ index: index, arrIndex: arrIndex }),
        })
        if (res.status) {
            window.location.reload();
        }
    }

    const patchHandle = async (index: number, arrIndex: number) => {
        const res = await fetch("/api/tkb", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ index: index, arrIndex: arrIndex }),
        })
        if (res.status) {
            window.location.reload();
        }
    }

    function dateCalculate(d: Date) {
        const currDate = new Date();
        const endDate = new Date(d);

        const diff = Number(endDate) - Number(currDate);
        const diffInHour = (diff / (1000 * 60 * 60)) / 24;

        return diffInHour;
    }

    function countDown(subject: Subject, index: number, arrIndex: number) {
        const dateRemaining = dateCalculate(subject.thoiGianKetThuc);

        if (dateRemaining <= 0) {
            deleteHandle(index, arrIndex);
        }
        return (
            <>{"Môn " + subject.tenMonHoc + " Thời gian còn lại: " + dateRemaining}</>
        )
    }

    return (
        <div className="flex justify-between p-4">
            <div className="p-2 flex gap-2 mx-auto ">
                {data.map((item: TkbType, index: number) => (
                    <Card key={index} className="flex-1">
                        <CardHeader>
                            <CardTitle>{item.day}</CardTitle>
                            <CardDescription></CardDescription>
                        </CardHeader>
                        {item.subjects.map((subject, i) => (
                            <CardContent key={i}>
                                <div>
                                    <p>Mã môn học: <b>{subject.maMonHoc}</b></p>
                                    <p>Môn: <b>{subject.tenMonHoc}</b></p>
                                    <p>Phòng học: <b>{subject.phongHoc}</b></p>
                                    <p>Kết thúc: <b>{String(subject.thoiGianKetThuc)}</b></p>
                                    <p>{countDown(subject, index, i)}</p>
                                </div>
                                <Button type="button" onClick={() => deleteHandle(index, i)} className="bg-red-500">Xóa</Button>
                                <Button type="button" onClick={() => patchHandle(index, i)} className="mx-2 bg-yellow-500">Sửa</Button>
                            </CardContent>
                        ))}
                        <CardFooter>
                            <Popover>
                                <PopoverTrigger className="bg-blue-200 rounded-lg p-2">Thêm môn học</PopoverTrigger>
                                <PopoverContent>
                                    <form onSubmit={() => postHandle(index)} className="flex flex-col">
                                        <Input type="hidden" name="index" value={index} />
                                        <div>
                                            <Label htmlFor="maMonHoc">Tên môn học</Label>
                                            <Input
                                                type="text"
                                                name="maMonHoc"
                                                placeholder="Nhập mã môn học"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaMonHoc(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="tenMonHoc">Tên môn học</Label>
                                            <Input
                                                type="text"
                                                name="tenMonHoc"
                                                placeholder="Nhập tên môn học"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMonHoc(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="phongHoc">Phòng học</Label>
                                            <Input
                                                type="text"
                                                name="phongHoc"
                                                placeholder="Nhập phòng học"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhongHoc(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="thoiGianBatDau">Thời gian bắt đầu</Label>
                                            <Input
                                                type="date"
                                                name="thoiGianBatDau"
                                                placeholder="Nhập thời gian bắt đầu"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThoiGianBatDau(new Date(e.target.value))}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="thoiGianKetThuc">Thời gian kết thúc</Label>
                                            <Input
                                                type="date"
                                                name="thoiGianKetThuc"
                                                placeholder="Nhập thời gian kết thúc"
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThoiGianKetThuc(new Date(e.target.value))}
                                            />
                                        </div>
                                        <Button type="submit">Submit</Button>
                                    </form>
                                </PopoverContent>
                            </Popover>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}