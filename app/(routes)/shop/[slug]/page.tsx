import React from "react";

interface ShopDetailPageProps {
	params: {
		slug: string;
	};
}

const ShopDetailPage = ({ params }: ShopDetailPageProps) => {
	return (
		<div>
			<div>
				{params.slug}
			</div>
		</div>
	);
};

export default ShopDetailPage;
