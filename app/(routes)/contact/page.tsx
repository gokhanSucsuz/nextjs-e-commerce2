import React, { Suspense } from "react";
import AccordionFAQ from "../_components/AccordionFAQ";
import AlertDialogExample from "../_components/AlertDialogExample";

const ContactPage = () => {
	return (
		<div className="container mx-auto">
			<div className="flex flex-row items-center justify-center">
				<div className="w-full md:w-1/2">
					<AlertDialogExample />
				</div>
				<div className="w-full md:w-1/2">
					<Suspense fallback={<div className="">Loading...</div>}>
						<AccordionFAQ />
					</Suspense>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
