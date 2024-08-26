import { categories } from "@/constants";
import React from "react";
import Head from "next/head";

interface ShopDetailPageProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: ShopDetailPageProps) {
	const project = categories.find(product =>
		product.href.includes(params.slug)
	);

	if (!project) {
		return {
			title: "Project not found",
			description: "The requested project could not be found."
		};
	}

	return {
		title: project.title,
		description: project.description
	};
}

const ShopDetailPage = ({ params }: ShopDetailPageProps) => {
	const project = categories.find(product =>
		product.href.includes(params.slug)
	);

	if (!project) {
		return <div>Project not found!</div>;
	}

	const jsonLd = { "@context": "https://schema.org", "@type": "Product", name: project.title, image: "", description: project.description, datePublished: "", dateModified: "", author: { "@type": "Person", name: "Gökhan SUÇSUZ" }, offers: { "@type": "Offer", url: project.href, priceCurrency: "USD", price: "0.00", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "120" } };

	return (
		<div>
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</Head>
			<div>
				{params.slug}
			</div>
		</div>
	);
};

export default ShopDetailPage;
