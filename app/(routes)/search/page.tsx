"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const SearchResults = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get("query");

	return (
		<div>
			<h1>
				Search Results for: {query}
			</h1>
			{/* Buraya arama sonuçlarını göstermek için ilgili bileşenleri ekleyebilirsiniz */}
		</div>
	);
};

const SearchPage = () => {
	return (
		<Suspense fallback={<div>Loading search results...</div>}>
			<SearchResults />
		</Suspense>
	);
};

export default SearchPage;
