"use client";
import React from "react";

import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import { slider } from "@/constants";
import Image from "next/image";

const Hero = () => {
	const plugin = React.useRef(
		Autoplay({
			delay: 2000,
			stopOnInteraction: true
		})
	);
	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-full mx-auto"
			opts={{ align: "start", loop: true }}
		>
			<CarouselContent>
				{slider.map((slide, index) =>
					<CarouselItem key={index}>
						<Image
							priority
							src={slide.image}
							alt="slide"
							width={1920}
							height={1080}
							className="max-h-96 min-h-32 object-cover md:h-[450px] lg:h-[520px]"
						/>
					</CarouselItem>
				)}
			</CarouselContent>
			<CarouselPrevious className="left-0" />
			<CarouselNext className="right-0" />
		</Carousel>
	);
};

export default Hero;
