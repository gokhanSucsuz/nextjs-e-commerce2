import { ProductType } from "@/constants";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductModal from "./ProductModal";
import ProductToast from "./ProductToast";

interface ProductItemProps {
	product: ProductType;
}

const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>
						{product.title}
					</CardTitle>
					<CardDescription className="line-clamp-2">
						{product.description}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Image
						src={product.image}
						alt={product.title}
						width={1920}
						height={1600}
						priority
						className="w-full h-56 object-cover hover:scale-95 rounded-xl mb-4"
					/>
					<div className="flex justify-between items-center">
						<span className="text-green-500 font-bold">
							${product.price}
						</span>
						<span className="line-through text-red-500 font-bold">
							${product.mrp}
						</span>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					<ProductModal product={product} />
					<Button variant="outline" asChild>
						<ProductToast quantity={1} />
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default ProductItem;
