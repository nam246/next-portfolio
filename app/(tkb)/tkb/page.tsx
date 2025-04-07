"use client"

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
//     CardFooter
// } from "@/components/ui/card";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import { PopoverContent } from "@/components/ui/popover";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Trash2, Plus } from "lucide-react";

const initialSemesterFormData = {
    year: ""
}

const initialCourseFormData = {
    courseId: "",
    name: "",
    room: "",
    credit: 0,
    teacher: "",
    day: "",
    time: "",
    startDate: "",
    endDate: "",
    semesterId: null,
}

export default function Tkb() {
    const [semester, setSemester] = useState([]);
    const [courses, setCourses] = useState([]);
    const [semesterFormData, setSemesterFormData] = useState(initialSemesterFormData);
    const [courseFormData, setCourseFormData] = useState(initialCourseFormData);

    const fetchSemesterData = useCallback(async () => {
        try {
            const res = await axios.get("/api/tkb/semester");
            const data = await res.data;
            setSemester(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchSemesterData();
    }, [fetchSemesterData])

    const fetchCourseData = useCallback(async () => {
        try {
            const res = await axios.get("/api/tkb");
            const data = await res.data;
            setCourses(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchCourseData();
    }, [fetchCourseData])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCourseFormData(prev => ({ ...prev, [name]: value }));
        if (name === 'year') {
            setSemesterFormData(prev => ({ ...prev, [name]: value }));
        }
    }

    const handleSemesterFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const reqData = semesterFormData;
            const res = await axios.post('/api/tkb/semester', reqData);
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }

    const handleCourseFormSubmit = async (e: React.FormEvent, semesterId: number) => {
        e.preventDefault();
        try {
            const reqData = { ...courseFormData, semesterId };
            await axios.post('/api/tkb', reqData);
            setCourseFormData(initialCourseFormData);
        } catch (error) {
            console.log(error);
        }
    }

    // const deleteHandle = async (index: number, arrIndex: number) => {
    //     const res = await fetch("/api/tkb", {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({index: index, arrIndex: arrIndex}),
    //     })
    //     if (res.status) {
    //         window.location.reload();
    //     }
    // }

    // const patchHandle = async (index: number, arrIndex: number) => {
    //     const res = await fetch("/api/tkb", {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({index: index, arrIndex: arrIndex}),
    //     })
    //     if (res.status) {
    //         window.location.reload();
    //     }
    // }

    // function dateCalculate(d: Date) {
    //     const currDate = new Date();
    //     const endDate = new Date(d);
    //
    //     const diff = Number(endDate) - Number(currDate);
    //     const diffInHour = (diff / (1000 * 60 * 60)) / 24;
    //
    //     return diffInHour;
    // }

    // function countDown(subject: Subject, index: number, arrIndex: number) {
    //     const dateRemaining = dateCalculate(subject.thoiGianKetThuc);

    //     if (dateRemaining <= 0) {
    //         deleteHandle(index, arrIndex);
    //     }
    //     return (
    //         <>{"Môn " + subject.tenMonHoc + " Thời gian còn lại: " + dateRemaining}</>
    //     )
    // }

    return (
        <Tabs className="p-5" defaultValue="addCourse">
            <TabsList>
                <TabsTrigger value="tkb">Thời khóa biểu</TabsTrigger>
                <TabsTrigger value="addSemester">Thông tin học kỳ</TabsTrigger>
                <TabsTrigger value="addCourse">Thêm môn học</TabsTrigger>
            </TabsList>
            <TabsContent value="tkb">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">

                </div>
            </TabsContent>
            <TabsContent value="addSemester">

            </TabsContent>
            <TabsContent value="addCourse">
                <div className="grid grid-cols-8 gap-5">
                    <div className="col-span-2">
                        <form onSubmit={(e) => handleSemesterFormSubmit(e)}
                            className="flex flex-col border rounded-md p-2 mb-5">
                            <div>
                                <Label htmlFor="year">Niên học</Label>
                                <Input
                                    type="text"
                                    name="year"
                                    placeholder="Nhập niên học"
                                    value={semesterFormData.year}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <Button className="mt-2" type="submit">Submit</Button>
                        </form>
                    </div>

                    <div className="col-span-6">
                        {semester.length > 0 ? semester.map((s: any, index: number) => (
                            <Table key={index} className="mb-5 border rounded">
                                <TableCaption>Thông tin học phần học kỳ {s.year}</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">STT</TableHead>
                                        <TableHead>Mã lớp học</TableHead>
                                        <TableHead>Tên môn học</TableHead>
                                        <TableHead>Số tín chỉ</TableHead>
                                        <TableHead>Giáo viên</TableHead>
                                        <TableHead>Thứ</TableHead>
                                        <TableHead>Giờ</TableHead>
                                        <TableHead>Thời gian bắt đầu</TableHead>
                                        <TableHead>Thời gian kết thúc</TableHead>
                                        <TableHead>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline"><Plus /></Button>
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <form onSubmit={(e) => handleCourseFormSubmit(e, s.id)}
                                                        className="flex flex-col">
                                                        <div>
                                                            <Label htmlFor="courseId">Tên môn học</Label>
                                                            <Input
                                                                type="text"
                                                                name="courseId"
                                                                placeholder="Nhập mã môn học"
                                                                value={courseFormData.courseId}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="name">Tên môn học</Label>
                                                            <Input
                                                                type="text"
                                                                name="name"
                                                                placeholder="Nhập tên môn học"
                                                                value={courseFormData.name}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="room">Phòng học</Label>
                                                            <Input
                                                                type="text"
                                                                name="room"
                                                                placeholder="Nhập phòng học"
                                                                value={courseFormData.room}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="credit">Số tín chỉ</Label>
                                                            <Input
                                                                type="number"
                                                                name="credit"
                                                                placeholder="Nhập số tín chỉ"
                                                                value={courseFormData.credit}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="teacher">Giáo viên</Label>
                                                            <Input
                                                                type="text"
                                                                name="teacher"
                                                                placeholder="Nhập tên giáo viên"
                                                                value={courseFormData.teacher}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="startDate">Thời gian bắt đầu</Label>
                                                            <Input
                                                                type="date"
                                                                name="startDate"
                                                                placeholder="Nhập thời gian bắt đầu"
                                                                value={courseFormData.startDate}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="endDate">Thời gian kết thúc</Label>
                                                            <Input
                                                                type="date"
                                                                name="endDate"
                                                                placeholder="Nhập thời gian kết thúc"
                                                                value={courseFormData.endDate}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <Button className="mt-2" type="submit">Submit</Button>
                                                    </form>
                                                </PopoverContent>
                                            </Popover>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {courses.map((v: any, i: number) => (
                                        <TableRow key={i}>
                                            <TableCell className="font-medium">1</TableCell>
                                            <TableCell>{v.course_id}</TableCell>
                                            <TableCell>{v.name}</TableCell>
                                            <TableCell>{v.credit}</TableCell>
                                            <TableCell>{v.teacher}</TableCell>
                                            <TableCell>{v.day}</TableCell>
                                            <TableCell>{v.time}</TableCell>
                                            <TableCell>{new Date(v.start_date).toLocaleString('vi-VN')}</TableCell>
                                            <TableCell>{new Date(v.end_date).toLocaleString('vi-VN')}</TableCell>
                                            <TableCell>
                                                <Button className="bg-red-500 hover:bg-red-400"><Trash2 /></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                </TableFooter>
                            </Table>
                        )) : ''}
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    )
}