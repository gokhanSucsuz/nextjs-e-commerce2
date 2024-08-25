"use client";
import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/constants";
import Image from "next/image";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ProductToast from "./ProductToast";

interface ProductItemProps {
	product: ProductType;
}

const ProductModal = ({ product }: ProductItemProps) => {
	const [quantity, setQuantity] = useState(1);
	const handleQuantity = (process: string) => {
		if (process === "minus") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="destructive">Detail</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[900px]">
				<DialogHeader>
					<DialogTitle>Product Detail</DialogTitle>
					<DialogDescription>
						You can see the product that you choosed
					</DialogDescription>
				</DialogHeader>
				<div className="grid grid-cols-1 md:grid-cols-2 p-4">
					<div>
						<Image
							src={product.image}
							alt={product.title}
							width={1920}
							height={1600}
							priority
							className="w-full h-96 object-cover hover:scale-95 rounded-xl mb-4"
						/>
					</div>
					<div className="p-4">
						<h2>
							{product.title}
						</h2>
						<p className="mt-5 font-light">
							{product.description}
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
							consequuntur magnam corporis modi inventore quibusdam aperiam
							incidunt recusandae, soluta rerum, quam sunt eos autem dolorem
							illo nihil ut harum delectus dignissimos totam. Consequatur
							molestiae sit impedit? Delectus ut magnam, deserunt dolor officia
							doloremque omnis dolorum quos, quaerat, ullam ab odio.
						</p>
						<div className="flex justify-between items-center mt-3">
							<span className="text-green-500 font-bold">
								${product.price}
							</span>
							<span className="line-through text-red-500 font-bold">
								${product.mrp}
							</span>
						</div>
						<div className="mt-8">
							<div className="flex flex-row items-center space-x-4 text-center">
								<Button
									variant="destructive"
									size="icon"
									onClick={() => handleQuantity("minus")}
								>
									-
								</Button>
								<h2>
									{quantity}
								</h2>
								<Button
									variant="destructive"
									size="icon"
									onClick={() => handleQuantity("plus")}
								>
									+
								</Button>
							</div>
						</div>
					</div>
				</div>

				<DialogFooter className="flex justify-between">
					<Button variant="outline" className="bg-green-700 text-white" asChild>
						<ProductToast quantity={quantity} />
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default ProductModal;
