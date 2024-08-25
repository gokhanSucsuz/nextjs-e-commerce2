"use client";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion";
import { faq } from "@/constants";

const AccordionFAQ = () => {
	return (
		<div>
			<Accordion type="single" collapsible className="w-full">
				{faq.map(f => {
					return (
						<AccordionItem key={f.id} value={`item-${f.id}`}>
							<AccordionTrigger>
								{f.title}
							</AccordionTrigger>
							<AccordionContent>
								{f.description}
							</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
		</div>
	);
};

export default AccordionFAQ;
