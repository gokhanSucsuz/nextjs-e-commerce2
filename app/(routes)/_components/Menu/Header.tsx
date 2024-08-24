import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { Heart, Search, User2Icon } from "lucide-react";
import { Courgette } from "next/font/google";
import React from "react";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import CartMenu from "./Cart";

const courgetteFont = Courgette({ subsets: ["latin"], weight: "400" });

const Header = () => {
	return (
		<div className="mx-auto shadow-md mt-1">
			<div className="container flex flex-row items-center justify-between">
				<div>
					<h2 className={`${courgetteFont.className} text-xl`}>ECommerce</h2>
				</div>
				<div className="hidden md:flex relative md:min-w-96 lg:w-1/2">
					<Input
						type="text"
						placeholder="search..."
						className="w-full border-2"
					/>
					<Button variant="link" className="absolute right-1">
						<Search />
					</Button>
				</div>
				<div className="flex flex-row items-center space-x-3 cursor-pointer">
					<ModeToggle />
					<Heart />
					<CartMenu />
					<User2Icon />
				</div>
				<div className="flex md:hidden px-4">
					<MobileMenu />
				</div>
			</div>
			<div>
				<NavMenu />
			</div>
		</div>
	);
};

export default Header;
