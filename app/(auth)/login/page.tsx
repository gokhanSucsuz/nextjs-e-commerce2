"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: " Username must be at least 2 characters." })
		.max(50),
	password: z
		.string()
		.min(2, { message: " Password must be at least 2 characters." })
		.max(50)
});

function LoginPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: ""
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	return (
		<div className="w-full md:w-3/5">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="md:space-y-8 container border md:mx-4 md:py-4 rounded-xl "
				>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) =>
							<div className="">
								<FormItem>
									<FormLabel className="validLabel">Username</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormMessage className="validError" />
								</FormItem>
							</div>}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) =>
							<div className="">
								<FormItem>
									<FormLabel className="validLabel">Password</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormMessage className="validError" />
								</FormItem>
							</div>}
					/>
					<Button type="submit">Submit</Button>
				</form>
				<div className="mt-8 flex space-x-4 items-center justify-center">
					<Label>Dont have any account?</Label>
					<Link href="/register">Register</Link>
				</div>
			</Form>
		</div>
	);
}

export default LoginPage;
