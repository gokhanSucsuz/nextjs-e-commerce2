"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const items = [
	{
		id: "remote",
		label: "Remote",
	},
	{
		id: "hybrid",
		label: "Hybrid",
	},
	{
		id: "office",
		label: "Office",
	},
] as const;

const formSchema = z.object({
	fullname: z
		.string()
		.min(2, { message: "Fullname must be at least 2 characters." })
		.max(50),
	username: z
		.string()
		.min(2, { message: "Username must be at least 2 characters." })
		.max(50),
	password: z
		.string()
		.min(2, { message: "Password must be at least 2 characters." })
		.max(50),
	email: z.string().email({ message: "Invalid email address!" }),
	birthday: z.string().refine(date => {
		const birthdate = new Date(date);
		const age = new Date().getFullYear() - birthdate.getFullYear();
		return age >= 18;
	}, { message: "You must be at least 18 years old." }),
	startDate: z.string().refine(date => {
		const startDate = new Date(date);
		return startDate >= new Date();
	}, { message: "Start date must be in the future." }),
	gender: z.enum(["Male", "Female", "Other"], {
		required_error: "Please select a gender!"
	}),
	items: z
		.array(z.enum(["remote", "hybrid", "office"]))
		.min(1, { message: "You must select at least one job type." })
});

function RegisterPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullname: "",
			username: "",
			password: "",
			email: "",
			birthday: "",
			startDate: "",
			gender: "Male",
			items: ["remote"],  // default job type selection
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
					className="md:space-y-2 container border md:mx-4 md:py-2 rounded-xl"
				>
					<FormField
						control={form.control}
						name="fullname"
						render={({ field }) =>
							<FormItem>
								<FormLabel>Fullname</FormLabel>
								<FormControl>
									<Input placeholder="Fullname" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>}
					/>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) =>
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder="Username" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) =>
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" placeholder="Email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) =>
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type="password" placeholder="Password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>}
					/>
					<FormField
						control={form.control}
						name="birthday"
						render={({ field }) =>
							<FormItem>
								<FormLabel>Birthday</FormLabel>
								<FormControl>
									<Input type="date" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>}
					/>
					<FormField
						control={form.control}
						name="startDate"
						render={({ field }) =>
							<FormItem>
								<FormLabel>Start Date</FormLabel>
								<FormControl>
									<Input type="date" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>}
					/>
					<FormField
						control={form.control}
						name="gender"
						render={({ field }) =>
							<FormItem>
								<FormLabel>Gender</FormLabel>
								<FormControl>
									<RadioGroup {...field} onValueChange={field.onChange} className="flex items-center space-x-3">
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Male" id="r1" />
											<Label htmlFor="r1">Male</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Female" id="r2" />
											<Label htmlFor="r2">Female</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Other" id="r3" />
											<Label htmlFor="r3">Other</Label>
										</div>
									</RadioGroup>
								</FormControl>
								<FormMessage />
							</FormItem>}
					/>
					<FormField
						control={form.control}
						name="items"
						render={() => (
							<FormItem>
								<div className="mb-2">
									<FormLabel className="text-base">Job Type</FormLabel>
									
								</div>
								<div className="flex space-x-3">
									{items.map((item) => (
									<FormField
										key={item.id}
										control={form.control}
										name="items"
										render={({ field }) => (
											<FormItem
												key={item.id}
												className="flex flex-row items-start space-x-3 space-y-0"
											>
												<FormControl>
													<Checkbox
														checked={field.value?.includes(item.id)}
														onCheckedChange={(checked) => {
															return checked
																? field.onChange([...field.value, item.id])
																: field.onChange(
																		field.value?.filter(
																			(value) => value !== item.id
																		)
																  );
														}}
													/>
												</FormControl>
												<FormLabel className="text-sm font-normal">
													{item.label}
												</FormLabel>
											</FormItem>
										)}
									/>
								))}
								</div>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
				<div className="mt-8 flex space-x-4 items-center justify-center">
					<Label>Already have an account?</Label>
					<Link href="/login">Login</Link>
				</div>
			</Form>
		</div>
	);
}

export default RegisterPage;
