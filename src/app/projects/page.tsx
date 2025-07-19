import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { PageHeading } from "@/components/layout/PageHeading";

import { ExternalLink } from "lucide-react";

const projects = [
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
		name: "E-centre computer shop",
		description: "",
		url: "https://computer-demo-13.vercel.app/",
		image: "/gallery/computer-demo-12.png",
		techstack: [
			"NextJS",
			"ES6",
			"TypeScript",
			"TailwindCSS",
			"Payload CMS",
			"PostgresSQL",
		],
	},
	{
		name: "Thời khóa biểu của tôi",
		description: "Ứng dụng thời khóa biểu Local dùng để track thông tin học",
		url: "https://mytkb.up.railway.app/",
		image: "/gallery/demo-tkb-thumbnail.png",
		techstack: ["NextJS 15", "Shadcn UI", "TailwindCSS", "SQLite", "Prisma ORM"],
	},
];

export default function Projects() {
	return (
		<>
			<PageHeading title={`projects`} />
			<div className="gallery grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
				{projects.map((item, index) => (
					<Card key={index}>
						<CardHeader>
							<CardTitle>
								{item.url ? (
									<Link
										href={item.url}
										className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
										target="_blank"
										rel="noopener noreferrer"
									>
										{item.name}
										<ExternalLink className="inline ml-1 align-top" size={15} />
									</Link>
								) : (
									item.name
								)}
							</CardTitle>
							<CardDescription>
								{item.description ? item.description : `${"demo " + item.name}`}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
								<Image
									loading="lazy"
									className="hover:scale-105 transition-transform duration-300 h-full w-full rounded-lg object-cover"
									src={item.image}
									alt={item.name}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</AspectRatio>
						</CardContent>
						<CardFooter className="flex flex-col gap-2 projects-start">
							<div className="flex gap-2 flex-wrap">
								{item.techstack.map((tech, i) => (
									<Badge key={i} className="text-white" variant="destructive">
										{tech}
									</Badge>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</>
	);
}
