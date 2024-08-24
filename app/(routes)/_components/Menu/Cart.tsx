import React from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";

const CartMenu = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="link">
					<ShoppingBag />
				</Button>
			</SheetTrigger>

			<SheetContent>
				<SheetHeader>
					<SheetTitle>My Cart</SheetTitle>
					<SheetDescription>...</SheetDescription>
				</SheetHeader>
				Empty
			</SheetContent>
		</Sheet>
	);
};

export default CartMenu;
