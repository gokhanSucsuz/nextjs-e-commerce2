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
import { Menu } from "lucide-react";
import { categories } from "@/constants";
import Link from "next/link";

export function MobileMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<Menu />
				</Button>
			</SheetTrigger>

			<SheetContent>
				<SheetHeader>
					<SheetTitle>Mobile Menu</SheetTitle>
					<SheetDescription>Choose a category...</SheetDescription>
				</SheetHeader>
				{categories.map(category => {
					return (
						<Link
							key={category.description}
							href={category.href}
							className="flex flex-col border-b-2 cursor-pointer hover:bg-myColor-400 p-3"
						>
							{category.title}
						</Link>
					);
				})}
			</SheetContent>
		</Sheet>
	);
}
