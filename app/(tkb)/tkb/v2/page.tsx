"use client"
import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Sửa import từ radix-ui thành component UI
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card";
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@/components/ui/popover"; // Gộp import từ cùng một package

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

// Kiểu form data tách riêng
type FormDataType = Omit<Subject, 'thoiGianBatDau' | 'thoiGianKetThuc'> & {
    thoiGianBatDau: string;
    thoiGianKetThuc: string;
};

// Form ban đầu
const initialFormData: FormDataType = {
    maMonHoc: "",
    tenMonHoc: "",
    phongHoc: "",
    thoiGianBatDau: "",
    thoiGianKetThuc: ""
};

export default function Tkb() {
    const [data, setData] = useState<TkbType[]>([]);
    const [formData, setFormData] = useState<FormDataType>(initialFormData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Tách fetch data thành hàm riêng và memoize nó
    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            const res = await fetch("/api/tkb");
            if (!res.ok) throw new Error("Failed to fetch data");
            const newData = await res.json();
            setData(newData);
            setError(null);
        } catch (error) {
            console.error("Lỗi khi fetch API:", error);
            setError("Không thể tải dữ liệu. Vui lòng thử lại sau.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent, index: number) => {
        e.preventDefault();
        try {
            // Convert strings to Date objects
            const reqData = {
                ...formData,
                thoiGianBatDau: new Date(formData.thoiGianBatDau),
                thoiGianKetThuc: new Date(formData.thoiGianKetThuc)
            };

            const res = await fetch("/api/tkb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    index,
                    data: reqData
                }),
            });

            if (!res.ok) throw new Error("Failed to create");

            // Reset form and refresh data
            setFormData(initialFormData);
            fetchData();
        } catch (error) {
            console.error("Error:", error);
            setError("Không thể thêm môn học. Vui lòng thử lại.");
        }
    };

    const handleAction = async (method: string, index: number, arrIndex: number) => {
        try {
            const res = await fetch("/api/tkb", {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ index, arrIndex }),
            });

            if (!res.ok) throw new Error(`Failed to ${method.toLowerCase()}`);

            // Refresh data instead of reloading page
            fetchData();
        } catch (error) {
            console.error(`Error during ${method}:`, error);
            setError(`Không thể thực hiện hành động. Vui lòng thử lại.`);
        }
    };

    const handleDelete = (index: number, arrIndex: number) =>
        handleAction("DELETE", index, arrIndex);

    const handlePatch = (index: number, arrIndex: number) =>
        handleAction("PATCH", index, arrIndex);

    const calculateTimeRemaining = (endDate: Date): number => {
        const now = new Date();
        const diff = new Date(endDate).getTime() - now.getTime();
        return diff / (1000 * 60 * 60 * 24); // Convert to days
    };

    const renderSubjectCountdown = (subject: Subject, index: number, arrIndex: number) => {
        const timeRemaining = calculateTimeRemaining(new Date(subject.thoiGianKetThuc));

        if (timeRemaining <= 0) {
            handleDelete(index, arrIndex);
            return null;
        }

        return `Môn ${subject.tenMonHoc} - Thời gian còn lại: ${timeRemaining.toFixed(2)} ngày`;
    };

    if (isLoading) return <div className="flex justify-center p-8">Đang tải...</div>;
    if (error) return <div className="flex justify-center p-8 text-red-500">{error}</div>;
    if (!data || data.length === 0) return <div className="flex justify-center p-8">Không có dữ liệu</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {data.map((item: TkbType, index: number) => (
                    <Card key={`day-${index}`} className="h-full">
                        <CardHeader>
                            <CardTitle>{item.day}</CardTitle>
                        </CardHeader>

                        <div className="flex-grow">
                            {item.subjects.length > 0 ? (
                                item.subjects.map((subject, i) => (
                                    <CardContent key={`subject-${i}`} className="border-b last:border-0 pb-4">
                                        <div className="space-y-1">
                                            <p>Mã môn học: <b>{subject.maMonHoc}</b></p>
                                            <p>Môn: <b>{subject.tenMonHoc}</b></p>
                                            <p>Phòng học: <b>{subject.phongHoc}</b></p>
                                            <p>Kết thúc: <b>{new Date(subject.thoiGianKetThuc).toLocaleString('vi-VN')}</b></p>
                                            <p>{renderSubjectCountdown(subject, index, i)}</p>
                                        </div>
                                        <div className="mt-2 space-x-2 flex">
                                            <Button
                                                variant="destructive"
                                                onClick={() => handleDelete(index, i)}
                                                size="sm"
                                            >
                                                Xóa
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                onClick={() => handlePatch(index, i)}
                                                size="sm"
                                            >
                                                Sửa
                                            </Button>
                                        </div>
                                    </CardContent>
                                ))
                            ) : (
                                <CardContent>
                                    <p className="text-center text-gray-500">Chưa có môn học</p>
                                </CardContent>
                            )}
                        </div>

                        <CardFooter className="pt-4">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full">Thêm môn học</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <form
                                        onSubmit={(e) => handleSubmit(e, index)}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-1">
                                            <Label htmlFor={`maMonHoc-${index}`}>Mã môn học</Label>
                                            <Input
                                                id={`maMonHoc-${index}`}
                                                name="maMonHoc"
                                                placeholder="Nhập mã môn học"
                                                value={formData.maMonHoc}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor={`tenMonHoc-${index}`}>Tên môn học</Label>
                                            <Input
                                                id={`tenMonHoc-${index}`}
                                                name="tenMonHoc"
                                                placeholder="Nhập tên môn học"
                                                value={formData.tenMonHoc}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor={`phongHoc-${index}`}>Phòng học</Label>
                                            <Input
                                                id={`phongHoc-${index}`}
                                                name="phongHoc"
                                                placeholder="Nhập phòng học"
                                                value={formData.phongHoc}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor={`thoiGianBatDau-${index}`}>Thời gian bắt đầu</Label>
                                            <Input
                                                id={`thoiGianBatDau-${index}`}
                                                type="datetime-local"
                                                name="thoiGianBatDau"
                                                value={formData.thoiGianBatDau}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor={`thoiGianKetThuc-${index}`}>Thời gian kết thúc</Label>
                                            <Input
                                                id={`thoiGianKetThuc-${index}`}
                                                type="datetime-local"
                                                name="thoiGianKetThuc"
                                                value={formData.thoiGianKetThuc}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Thêm môn học
                                        </Button>
                                    </form>
                                </PopoverContent>
                            </Popover>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}