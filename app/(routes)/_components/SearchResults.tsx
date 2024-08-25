import { useSearchParams } from "next/navigation";
import React from "react";

const SearchResults = () => {
	const searchParams = useSearchParams();
	const query = searchParams.get("query");

	return (
		<div>
			<h1>
				Search Results for: {query}
			</h1>
		</div>
	);
};

export default SearchResults;
