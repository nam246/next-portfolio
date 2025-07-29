import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/layout/HeroCarousel";
import { Download, GitBranch, Mail, Smartphone } from "lucide-react";

const information = {
	name: "vũ hoàng diệu trung",
	email: "trungvuhoang2005@gmail.com",
	phoneNumber: "+84984041242",
	github: "https://github.com/nam246",
	bio: "Xin chào! Tôi là Trung, một Developer nghiệp dư, đam mê tạo ra những trải nghiệm web tuyệt vời. Với kiến thức về JavaScript, React, PHP và các công nghệ hiện đại, tôi chuyên xây dựng ứng dụng web từ ý tưởng đến sản phẩm hoàn thiện. Tôi luôn tìm kiếm cơ hội để học hỏi công nghệ mới và giải quyết những thách thức thú vị trong lập trình",
	skills: [
		{
			title: "Lập trình Frontend",
			description: [
				"Thành thạo: HTML5, CSS3, JavaScript (ES6+), TypeScript , Responsive Web Design.",
				"Frameworks/Libraries: ReactJS, NextJS, jQuery, Bootstrap 5, TailwindCSS.",
				"Công cụ thiết kế: Figma, Photoshop (Kiến thức căn bản).",
				"Kiểm soát phiên bản: Git, GitHub, GitLab.",
			],
		},
		{
			title: "Lập trình Backend & Database",
			description: [
				"PHP (Laravel, Wordpress) cơ bản, Java cơ bản.",
				"Kiến thức cơ bản về OOP.",
				"Database: MySQL, PostgreSQL, SQLite, MSSQL (Cơ bản).",
				"SQL: DDL, DML, DCL, T-SQL.",
				"RESTful API, HTTP protocol, JWT.",
				"Kiến thức cơ bản về Docker, Docker Compose.",
				"Công cụ khác: Postman, Github Actions, GitLab CI.",
			],
		},
		{
			title: "Kỹ năng IT Support",
			description: [
				"Hệ điều hành: Windows, Linux.",
				"Microsoft Offices, Google Workspace",
				"Xử lý sự cố kỹ thuật.",
				"Công cụ hỗ trợ từ xa: TeamViewer, AnyDesk, Remote Desktop.",
				"Bảo mật dữ liệu, phần mềm diệt virus, tường lửa.",
			],
		},
		{
			title: "Kỹ năng mềm",
			description: [
				"Làm việc nhóm hiệu quả",
				"Khả năng học hỏi nhanh.",
				"Quản lý thời gian và báo cáo tiến độ.",
			],
		},
	],
	experiences: [
		{
			position: "Frontend developer",
			companyName: "Joyful Co., Ltd",
			companyWebsite: "",
			startDate: "6/2025",
			endDate: "now",
			accomplishments: [
				"Phát triển giao diện web sử dụng PHP, HTML, CSS, SASS, Bootstrap, JQuery (AJAX), MySQL.",
				"Hợp tác với team UI/UX để chuyển đổi thành giao diện người dùng responsive",
				"Tối ưu hóa website cho các thiết bị di động sử dụng Media query và Bootstrap",
				"Hỗ trợ khách hàng về website hosting và domain pointing.",
				"Bảo trì và sửa lỗi website.",
				"Viết báo cáo tiến độ công việc hàng tuần.",
				"Tìm hiểu về công nghệ khác sau giờ làm việc để phục vụ việc mở rộng lĩnh vực phòng kỹ thuật theo yêu cầu của trưởng phòng",
				"Làm việc theo yêu cầu của cấp trên.",
			],
		},
		{
			position: "Frontend developer",
			companyName: "Sikido Media & Advertising Inc.",
			companyWebsite: "",
			startDate: "11/2022",
			endDate: "5/2024",
			accomplishments: [
				"Phát triển giao diện web sử dụng PHP, HTML, CSS, SASS, Bootstrap, JQuery (AJAX), MySQL.",
				"Hợp tác với team UI/UX để chuyển đổi thành giao diện người dùng responsive",
				"Tối ưu hóa website cho các thiết bị di động sử dụng Media query và Bootstrap",
				"Hỗ trợ khách hàng về website hosting và domain pointing.",
				"Bảo trì và sửa lỗi website.",
				"Viết báo cáo tiến độ công việc hàng tuần.",
				"Tìm hiểu về công nghệ khác sau giờ làm việc để phục vụ việc mở rộng lĩnh vực phòng kỹ thuật theo yêu cầu của trưởng phòng",
				"Làm việc theo yêu cầu của cấp trên.",
			],
		},
		{
			position: "Computer Technican",
			companyName: "Viễn Đông computer Ltd.",
			companyWebsite: "",
			startDate: "5/2022",
			endDate: "11/2022",
			accomplishments: [
				"Lắp ráp máy tính theo yêu cầu khách hàng.",
				"Cài đặt Windows và phần mềm theo nhu cầu.",
				"Kiểm tra và xử lý lỗi phần cứng, phần mềm.",
				"Hỗ trợ khách hàng tại văn phòng giải quyết các vấn đề máy tính.",
				"Làm việc theo yêu cầu của cấp trên.",
			],
		},
	],
	education: [
		{
			university: "Đại học Công Nghệ Thông Tin - UIT",
			major: "Công nghệ thông tin",
			degrees: "Đại học (liên thông)",
			startDate: Date(),
			endDate: Date(),
			achievements: [""],
		},
		{
			university: "Đại học Công nghiệp thành phố Hồ Chí Minh - IUH",
			major: "Công nghệ thông tin",
			degrees: "Cao Đẳng",
			startDate: Date(),
			endDate: Date(),
			achievements: [""],
		},
	],
	languages: [
		{
			name: "Tiếng Anh TOEIC 680 (Nghe, Đọc), Giao tiếp căn bản.",
			proficiency: "",
		},
		{
			name: "Tiếng Nhật JLPT N5.",
			proficiency: "",
		},
	],
};

const SectionHeader = ({ icon, title }: { icon: string; title: string }) => (
	<div className="bg-slate-100 dark:bg-slate-900 rounded-md font-bold text-lg p-3 flex items-center gap-2 shadow border-l-4 border-sky-500 hover:translate-x-1 transition-all">
		<span className="text-sky-500 text-2xl">{icon}</span>
		<h2 className="text-sky-700 text-xl ps-2">{title}</h2>
	</div>
);

export default function Homepage() {
	return (
		<>
			<div className="section mb-3 flex flex-col lg:flex-row justify-between align-start gap-5">
				<div className="flex flex-col gap-3 flex-1">
					<figure>
						<Image src="/avataaars.png" width={150} height={150} alt="user-image" />
					</figure>
					<h1 className="uppercase font-bold text-2xl">{information.name}</h1>
					<ul className="list-none ps-0">
						<li className="mb-3">
							<Link
								className="hover:text-sky-500"
								target="_blank"
								href={"mailto:" + information.email}
							>
								<Mail className="inline mr-1 align-top" /> Email: {information.email}
							</Link>
						</li>
						<li className="mb-3">
							<Link
								className="hover:text-sky-500"
								target="_blank"
								href={"tel:" + information.phoneNumber}
							>
								<Smartphone className="inline mr-1 align-top" /> Phone number:
								{information.phoneNumber}
							</Link>
						</li>
						<li className="mb-3">
							<Link
								className="hover:text-sky-500"
								target="_blank"
								href={information.github}
							>
								<GitBranch className="inline mr-1 align-top" />
								Github
							</Link>
						</li>
						<li className="mb-3">
							<Link
								className="hover:text-sky-500"
								target="_blank"
								href="/VuHoangDieuTrung-Software Developer.pdf"
								download={true}
							>
								<Download className="inline mr-1 align-top" /> Download CV
							</Link>
						</li>
					</ul>

					<p className="rounded-md">{information.bio}</p>
				</div>

				<div className="flex-1">
					<HeroCarousel />
				</div>
			</div>

			<div className="section mb-3">
				<SectionHeader icon={`🛠️`} title={`Kỹ năng`} />
				<ul className="mt-3 space-y-2">
					{information.skills.map((skill, index) => (
						<li key={index}>
							<div className="font-bold">{skill.title}</div>
							<ul className="list-disc list-inside ms-4">
								{skill.description.map((d, i) => (
									<li key={i}>{d}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>

			<div className="section mb-3">
				<SectionHeader icon={`💼`} title={`Kinh nghiệm làm việc`} />
				<div className="mt-3 space-y-5">
					{information.experiences.map((exp, index) => (
						<div key={index} className="mb-5">
							<h3 className="font-semibold text-lg">
								{exp.position} | {exp.companyName}
							</h3>
							<div className="mb-3">
								{exp.startDate} - {exp.endDate}
							</div>
							<ul className="list-disc list-inside ms-4">
								{exp.accomplishments.map((acc, i) => (
									<li key={i}>{acc}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="section mb-3">
				<SectionHeader icon={`🎓`} title={`Học vấn`} />
				<div className="mt-3 space-y-3">
					{information.education.map((e, index) => (
						<div key={index}>
							<h3 className="font-semibold text-base">{e.university}</h3>
							<ul className="list-disc list-inside ms-4">
								<li>{e.degrees}</li>
								<li>Chuyên ngành: {e.major}</li>
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="section mb-3">
				<SectionHeader icon={`🌐`} title={`Ngoại ngữ`} />
				<ul className="list-disc list-inside ms-4 mt-3">
					{information.languages.map((language, index) => (
						<li key={index}>{language.name}</li>
					))}
				</ul>
			</div>
		</>
	);
}
