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

import { projects } from "@/lib/data";

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
