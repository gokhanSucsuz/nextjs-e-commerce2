"use client";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

interface ProductToastProps {
	quantity: number;
}

const ProductToast = ({ quantity }: ProductToastProps) => {
	const { toast } = useToast();
	return (
		<Button
			variant="outline"
			className="bg-green-700 text-white"
			onClick={() => {
				toast({
					title: "Successfully",
					description: `Quantity: ${quantity}`,
					variant: "success",
					action: <ToastAction altText="Products added!">OK</ToastAction>
				});
			}}
		>
			Add to cart
		</Button>
	);
};

export default ProductToast;
