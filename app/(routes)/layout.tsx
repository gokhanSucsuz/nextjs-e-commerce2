import React from "react";
import Header from "./_components/Menu/Header";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/toaster";

interface RoutesLayoutProps {
	children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
	return (
		<div>
			<Header />
			<div className="min-h-screen">
				{children}
			</div>
			<Toaster />
			<Footer />
		</div>
	);
};

export default RoutesLayout;
