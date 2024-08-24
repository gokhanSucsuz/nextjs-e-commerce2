"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col p-4 items-center bg-myColor-200 dark:bg-myColor-300 text-white">
			<Button
				variant="link"
				onClick={() => router.push("/")}
				className="text-white"
			>
				All Right Reserved...
			</Button>

			<div>
				<Link href="/" target="_blank">
					Copyright ©
				</Link>
			</div>
		</div>
	);
};

export default Footer;
