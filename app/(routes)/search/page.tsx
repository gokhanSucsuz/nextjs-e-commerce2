"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const SearchPage = () => {
	const searchParams = useSearchParams();

	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				{searchParams.get("query")}
			</Suspense>
		</div>
	);
};

export default SearchPage;
