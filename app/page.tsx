import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
	const information = {
		name: "vũ hoàng diệu trung",
		email: "trungvuhoang2005@gmail.com",
		phoneNumber: "+84984041242",
		github: "https://github.com/nam246",
		bio: "Xin chào! Tôi là Trung, một Developer nghiệp dư, đam mê tạo ra những trải nghiệm web tuyệt vời. Với kiến thức về JavaScript, React, PHP và các công nghệ hiện đại, tôi chuyên xây dựng ứng dụng web từ ý tưởng đến sản phẩm hoàn thiện. Tôi luôn tìm kiếm cơ hội để học hỏi công nghệ mới và giải quyết những thách thức thú vị trong lập trình",
		skills: [
			{
				name: "",
				description: "",
			},
			{
				name: "",
				description: "",
			},
		],
		experiences: [
			{
				title: "",
				companyName: "",
				companyWebsite: "",
				startDate: Date(),
				endDate: Date(),
				accomplishments: "",
			},
		],
		education: [
			{
				name: "",
				major: "",
				degrees: "",
				startDate: Date(),
				endDate: Date(),
				achievements: "",
			},
		],
		language: [
			{
				name: "",
				proficiency: "",
			},
		],
	};

	return (
		<div className="wrapper">
			<div className="section mb-3 flex flex-col lg:flex-row justify-between align-start gap-5">
				<div className="flex-1">
					<figure>
						<Image src="/avataaars.png" width={150} height={150} alt="user-image" />
					</figure>
					<h1 className="uppercase">{information.name}</h1>
					<ul className="list-none ps-0">
						<li>
							<i className="fa-solid fa-envelope"></i> Email:{" "}
							<Link href={"mailto:" + information.email}>{information.email}</Link>
						</li>
						<li>
							<i className="fa-solid fa-phone"></i> Phone number:{" "}
							<Link href={"tel:" + information.phoneNumber}>
								{information.phoneNumber}
							</Link>
						</li>
						<li>
							<i className="fa-brands fa-github"></i>{" "}
							<Link href={information.github}>Github</Link>
						</li>
					</ul>

					<div className="bg-slate-100 rounded-md p-3 my-5 cursor-pointer transition-all">
						{information.bio}
					</div>
				</div>

				<div className="flex-1"></div>
			</div>

			<div className="section mb-3">
				<div className="bg-slate-100 rounded-md font-bold text-lg p-3 flex items-center gap-2 shadow border-l-4 border-sky-500 hover:translate-x-1 transition-all">
					<span className="text-sky-500 text-2xl">🛠️</span>
					<h2 className="text-sky-700 text-xl ps-2">Kỹ năng</h2>
				</div>
				<ul className="mt-3 space-y-2">
					<li className="">
						<b>Ngôn ngữ lập trình: </b> JavaScript (ES6), PHP, Java (cơ bản), Python
						(cơ bản).
					</li>
					<li className="">
						<b>Frontend: </b>HTML, CSS (SASS, LESS, Bootstrap, TailwindCSS), JQuery,
						ReactJS, NextJS.
					</li>
					<li className="">
						<b>Backend: </b>NestJS, Laravel.
					</li>
					<li className="">
						<b>Cơ sở dữ liệu: </b> MSSQL, MySQL, PostgreSQL.
					</li>
					<li className="">
						<b>Tools: </b>Docker, Git, Postman, Figma.
					</li>
					<li className="">
						<b>More: </b>Wordpress, Strapi, Restful API, JWT Auth, SEO cơ bản.
					</li>
				</ul>
			</div>

			<div className="section mb-3">
				<div className="bg-slate-100 rounded-md font-bold text-lg p-3 flex items-center gap-2 shadow border-l-4 border-sky-500 hover:translate-x-1 transition-all">
					<span className="text-sky-500 text-2xl">💼</span>
					<h2 className="text-sky-700 text-xl ps-2">Kinh nghiệm làm việc</h2>
				</div>
				<div className="mt-3 space-y-5">
					<div className="mb-5">
						<h3 className="font-semibold text-lg text-gray-800">Joyful Co Ltd.</h3>
						<div className="mb-3 text-gray-600">6/2025 - now</div>
						<ul className="list-disc list-inside text-gray-700 ms-4">
							<li>Phát triển website theo yêu cầu của công ty.</li>
						</ul>
					</div>

					<div className="mb-5">
						<h3 className="font-semibold text-lg text-gray-800">
							Frontend developer | Sikido Media & Advertising Inc.
						</h3>
						<div className="mb-3 text-gray-600">11/2022 - 5/2024</div>
						<ul className="list-disc list-inside text-gray-700 ms-4">
							<li>
								Phát triển giao diện web sử dụng PHP, HTML, CSS, SASS, Bootstrap, JQuery
								(AJAX), MySQL.
							</li>
							<li>
								Hợp tác với team UI/UX để chuyển đổi thành giao diện người dùng
								responsive
							</li>
							<li>
								Tối ưu hóa website cho các thiết bị di động sử dụng Media query và
								Bootstrap
							</li>
							<li>Hỗ trợ khách hàng về website hosting và domain pointing.</li>
							<li>Bảo trì và sửa lỗi website.</li>
							<li>Viết báo cáo tiến độ công việc hàng tuần.</li>
							<li>
								Tìm hiểu về công nghệ khác sau giờ làm việc để phục vụ việc mở rộng lĩnh
								vực phòng kỹ thuật theo yêu cầu của trưởng phòng
							</li>
							<li>Làm việc theo yêu cầu của cấp trên.</li>
						</ul>
					</div>

					<div className="mb-5">
						<h3 className="font-semibold text-lg text-gray-800">
							Computer Technican | Viễn Đông computer
						</h3>
						<div className="mb-3 text-gray-600">4/2022 - 11/2022</div>
						<ul className="list-disc list-inside text-gray-700 ms-4">
							<li>Lắp ráp máy tính theo yêu cầu khách hàng.</li>
							<li>Cài đặt Windows và phần mềm theo nhu cầu.</li>
							<li>Kiểm tra và xử lý lỗi phần cứng, phần mềm.</li>
							<li>Hỗ trợ khách hàng tại văn phòng giải quyết các vấn đề máy tính.</li>
							<li>Làm việc theo yêu cầu của cấp trên.</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="section mb-3">
				<div className="bg-slate-100 rounded-md font-bold text-lg p-3 flex items-center gap-2 shadow border-l-4 border-sky-500 hover:translate-x-1 transition-all">
					<span className="text-sky-500 text-2xl">🎓</span>
					<h2 className="text-sky-700 text-xl ps-2">Education</h2>
				</div>
				<div className="mt-3 space-y-3">
					<div>
						<h3 className="font-semibold text-base text-gray-800">
							Đại học Công nghê thông tin
						</h3>
						<ul className="list-disc list-inside text-gray-700 ms-4">
							<li>Đại Học (Liên thông)</li>
							<li>Chuyên ngành: Công nghệ thông tin</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold text-base text-gray-800">
							Đại học Công nghiệp thành phố Hồ Chí Minh
						</h3>
						<ul className="list-disc list-inside text-gray-700 ms-4">
							<li>Cao Đẳng</li>
							<li>Chuyên ngành: Công nghệ thông tin</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="section mb-3">
				<div className="bg-slate-100 rounded-md font-bold text-lg p-3 flex items-center gap-2 shadow border-l-4 border-sky-500 hover:translate-x-1 transition-all">
					<span className="text-sky-500 text-2xl">🌐</span>
					<h2 className="text-sky-700 text-xl ps-2">Languages</h2>
				</div>
				<ul className="list-disc list-inside text-gray-700 ms-4 mt-3">
					<li>Tiếng Anh TOEIC 680 (Nghe, Đọc), Giao tiếp căn bản.</li>
					<li>Tiếng Nhật JLPT N5.</li>
				</ul>
			</div>
		</div>
	);
}
