import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "../ui/aspect-ratio";

const images = [
	{
		url: "/carousel/buddy-an-ivaWTRbSH1I-unsplash.jpg",
	},
	{
		url: "/carousel/jeff-james-2NCsNfCqFec-unsplash.jpg",
	},
	{
		url: "/carousel/kelly-sikkema-gRZynBXSdz4-unsplash.jpg",
	},
	{
		url: "/carousel/nikita-pishchugin-y2lZI81BGk0-unsplash.jpg",
	},
	{
		url: "/carousel/tuaans-3cwIyLwYfzc-unsplash.jpg",
	},
];
export function HeroCarousel() {
	return (
		<Carousel className="w-full ">
			<CarouselContent>
				{images.map((image, index) => (
					<CarouselItem key={index}>
						<AspectRatio ratio={1 / 1}>
							<Image
								className="rounded-md"
								src={image.url}
                loading="lazy"
								alt={`carousel ${index}`}
								fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</AspectRatio>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
