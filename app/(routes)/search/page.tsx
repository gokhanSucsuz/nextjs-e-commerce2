"use client";
import React, { Suspense } from "react";
import SearchResults from "../_components/SearchResults";

const SearchPage = () => {
	return (
		<Suspense fallback={<div>Loading search results...</div>}>
			<SearchResults />
		</Suspense>
	);
};

export default SearchPage;
