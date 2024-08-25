"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";
import { Heart, Search, User2Icon } from "lucide-react";
import { Courgette } from "next/font/google";
import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import CartMenu from "./Cart";
import Link from "next/link";
import { useRouter } from "next/navigation";

const courgetteFont = Courgette({ subsets: ["latin"], weight: "400" });

const Header = () => {
	const router = useRouter();
	const [query, setQuery] = useState("");

	const handleSearch = () => {
		if (query.trim()) {
			router.push(`/search?query=${encodeURIComponent(query)}`);
		}
	};

	return <div className="mx-auto shadow-md mt-1">
			<div className="container flex flex-row items-center justify-between">
				<div>
					<h2 className={`${courgetteFont.className} text-xl capitalize`}>
						e-commerce
					</h2>
				</div>
				<div className="hidden md:flex relative md:min-w-96 lg:w-1/2">
					<Input type="text" placeholder="search..." className="w-full border-2" onChange={e => setQuery(e.target.value)} />
					<Button variant="link" className="absolute right-1" onClick={handleSearch}>
						<Search />
					</Button>
				</div>
				<div className="flex flex-row items-center space-x-3 cursor-pointer">
					<ModeToggle />
					<Link href="/fav">
						<Heart />
					</Link>
					<CartMenu />
					<Link href="/login">
						<User2Icon />
					</Link>
				</div>
				<div className="flex md:hidden px-3">
					<MobileMenu />
				</div>
			</div>
			<div>
				<NavMenu />
			</div>
		</div>;
};

export default Header;
