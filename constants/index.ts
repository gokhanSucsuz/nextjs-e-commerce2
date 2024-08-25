export const categories: {
	title: string;
	href: string;
	description: string;
}[] = [
	{
		title: "T-Shirts",
		href: "/shop/t-shirts",
		description:
			"Explore a variety of T-shirts in different styles, colors, and sizes."
	},
	{
		title: "Jeans",
		href: "/shop/jeans",
		description: "Find the perfect pair of jeans for any occasion."
	},
	{
		title: "Jackets",
		href: "/shop/jackets",
		description:
			"Stay warm and stylish with our selection of jackets and outerwear."
	},
	{
		title: "Sneakers",
		href: "/shop/sneakers",
		description: "Browse our collection of comfortable and trendy sneakers."
	},
	{
		title: "Accessories",
		href: "/shop/accessories",
		description: "Complete your outfit with our range of fashion accessories."
	},
	{
		title: "Hats",
		href: "/shop/hats",
		description:
			"Choose from a variety of hats to add the perfect finishing touch to your look."
	}
];

interface FAQType {
	id: string;
	title: string;
	description: string;
}

export const faq: FAQType[] = [
	{
		id: "1",
		title: "What is Lorem Ipsum?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: "2",
		title: "What is Lorem Ipsum?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: "3",
		title: "What is Lorem Ipsum?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: "4",
		title: "What is Lorem Ipsum?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: "5",
		title: "What is Lorem Ipsum?",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
];

interface CarouselType {
	id: number;
	image: string;
}

export const slider: CarouselType[] = [
	{
		id: 1,
		image: "/slider/1.jpg"
	},
	{
		id: 2,
		image: "/slider/2.jpg"
	},
	{
		id: 3,
		image: "/slider/3.jpg"
	},
	{
		id: 4,
		image: "/slider/4.jpg"
	},
	{
		id: 5,
		image: "/slider/5.jpg"
	},
	{
		id: 6,
		image: "/slider/6.jpg"
	},
	{
		id: 7,
		image: "/slider/7.jpg"
	},
	{
		id: 8,
		image: "/slider/8.jpg"
	}
];

export interface ProductType {
	id: number;
	title: string;
	price: number;
	mrp: number;
	description: string;
	image: string;
}

export const products: ProductType[] = [
	{
		id: 1,
		title: "Product One",
		price: 100,
		mrp: 120,
		description:
			"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet",
		image: "/products/1.jpg"
	},
	{
		id: 2,
		title: "Product Two",
		price: 150,
		mrp: 180,
		description:
			"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		image: "/products/2.jpg"
	},
	{
		id: 3,
		title: "Product Three",
		price: 200,
		mrp: 220,
		description:
			"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
		image: "/products/3.jpg"
	},
	{
		id: 4,
		title: "Product Four",
		price: 250,
		mrp: 300,
		description:
			"Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		image: "/products/4.jpg"
	},
	{
		id: 5,
		title: "Product Five",
		price: 120,
		mrp: 140,
		description:
			"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
		image: "/products/5.jpg"
	},
	{
		id: 6,
		title: "Product Six",
		price: 130,
		mrp: 160,
		description:
			"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
		image: "/products/6.jpg"
	},
	{
		id: 7,
		title: "Product Seven",
		price: 140,
		mrp: 170,
		description:
			"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
		image: "/products/7.jpg"
	},
	{
		id: 8,
		title: "Product Eight",
		price: 160,
		mrp: 190,
		description:
			"Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form.",
		image: "/products/8.jpg"
	},
	{
		id: 9,
		title: "Product Nine",
		price: 110,
		mrp: 130,
		description:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
		image: "/products/9.jpg"
	},
	{
		id: 10,
		title: "Product Ten",
		price: 170,
		mrp: 200,
		description:
			"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
		image: "/products/10.jpg"
	},
	{
		id: 11,
		title: "Product Eleven",
		price: 180,
		mrp: 210,
		description:
			"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
		image: "/products/11.jpg"
	},
	{
		id: 12,
		title: "Product Twelve",
		price: 190,
		mrp: 230,
		description:
			"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
		image: "/products/12.jpg"
	},
	{
		id: 13,
		title: "Product Thirteen",
		price: 210,
		mrp: 250,
		description:
			"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
		image: "/products/13.jpg"
	},
	{
		id: 14,
		title: "Product Fourteen",
		price: 220,
		mrp: 260,
		description:
			"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		image: "/products/14.jpg"
	},
	{
		id: 15,
		title: "Product Fifteen",
		price: 230,
		mrp: 270,
		description:
			"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
		image: "/products/15.jpg"
	},
	{
		id: 16,
		title: "Product Sixteen",
		price: 240,
		mrp: 280,
		description:
			"More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		image: "/products/16.jpg"
	},
	{
		id: 17,
		title: "Product Seventeen",
		price: 250,
		mrp: 290,
		description:
			"It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
		image: "/products/17.jpg"
	},
	{
		id: 18,
		title: "Product Eighteen",
		price: 260,
		mrp: 300,
		description:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
		image: "/products/18.jpg"
	},
	{
		id: 19,
		title: "Product Nineteen",
		price: 270,
		mrp: 310,
		description:
			"Contrary to popular belief, Lorem Ipsum is not simply random text.",
		image: "/products/19.jpg"
	},
	{
		id: 20,
		title: "Product Twenty",
		price: 280,
		mrp: 320,
		description:
			"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
		image: "/products/20.jpg"
	},
	{
		id: 21,
		title: "Product Twenty-One",
		price: 290,
		mrp: 330,
		description:
			"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
		image: "/products/21.jpg"
	}
];
