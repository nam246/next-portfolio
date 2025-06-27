import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

export default function Projects() {
	const items = [
		{
			name: "bloodflame.vn",
			url: "",
			image: "/gallery/Screenshot1.png",
			techstack: ["PHP", "Bootstrap 5", "JQuery", "AJAX", "MySQL"],
		},
		{
			name: "poohhousebridal.com",
			url: "",
			image: "/gallery/Screenshot2.png",
			techstack: ["PHP", "Bootstrap 5", "JQuery", "AJAX", "MySQL"],
		},
		{
			name: "lepetitmusee.edu.vn",
			description: "",
			url: "https://lepetitmusee.edu.vn/",
			image: "/gallery/Screenshot3.png",
			techstack: ["PHP", "Bootstrap 5", "ES6", "JQuery", "AJAX", "MySQL"],
		},
		{
			name: "acecafe.vn",
			description: "",
			url: "https://acecafe.vn/",
			image: "/gallery/Screenshot4.png",
			techstack: [
				"PHP",
				"Bootstrap 5",
				"ES6",
				"JQuery",
				"AJAX",
				"particle.js",
				"MySQL",
			],
		},
		{
			name: "Thời khóa biểu của tôi",
			description: "Ứng dụng thời khóa biểu Local dùng để track thông tin học",
			url: "https://mytkb.up.railway.app/",
			image: "/gallery/cdhome.png",
			techstack: ["NextJS 15", "Shadcn UI", "TailwindCSS", "SQLite", "Prisma ORM"],
		},
		{
			name: "cdhome.vn",
			description: "",
			url: "http://demolp.free.nf/",
			image: "/gallery/cdhome.png",
			techstack: ["PHP", "ES6", "Bootstrap 5", "JQuery", "MySQL"],
		},
		{
			name: "joyfuldecor.com.vn",
			description: "",
			url: "http://joyful.free.nf/",
			image: "/gallery/Screenshot 2025-06-21 135850.png",
			techstack: ["PHP", "ES6", "Bootstrap 5", "JQuery", "MySQL"],
		},
		{
			name: "computer-demo-13.vercel.app",
			description: "",
			url: "https://computer-demo-13.vercel.app/",
			image: "/gallery/computer-demo-12.png",
			techstack: ["NextJS", "ES6", "TypeScript", "TailwindCSS"],
		},
	];

	return (
		<div className="wrapper">
			<div className="page-header">
				<h1>PROJECTS</h1>
			</div>
			<div className="gallery grid grid-cols-1 md:grid-cols-2 gap-6">
				{items.map((item, index) => (
					<div
						key={index}
						className="item rounded-xl overflow-hidden border border-sky-100 shadow-lg bg-white hover:shadow-2xl transition-all duration-200 flex flex-col"
					>
						<figure className="img overflow-hidden">
							<Image
								className="hover:scale-105 transition-transform duration-300 rounded-t-xl"
								src={item.image}
								alt={item.name}
								width={500}
								height={200}
							/>
						</figure>
						<div className="p-4 flex-1 flex flex-col justify-between">
							<h2 className="font-bold text-lg text-sky-700 mb-2 truncate">
								{item.name}
							</h2>
							<div className="flex items-center gap-2 flex-wrap mb-3">
								{item.techstack.map((tech, i) => (
									<div
										key={i}
										className="bg-sky-500 text-white text-xs rounded-2xl py-1 px-2 hover:bg-sky-400 transition-colors"
									>
										{tech}
									</div>
								))}
							</div>
							{item.url && (
								<Link
									href={item.url}
									className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-sky-50 text-sky-700 font-medium border border-sky-200 hover:bg-sky-100 hover:text-sky-900 transition-colors w-max mt-auto"
									target="_blank"
									rel="noopener noreferrer"
								>
									<ExternalLink size={15} />
									Demo
								</Link>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
