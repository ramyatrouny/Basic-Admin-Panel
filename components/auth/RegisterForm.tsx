'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
	name: z.string().min(1, {
		message: 'Name is required',
	}),
	email: z
		.string()
		.min(1, {
			message: 'Email is required',
		})
		.email({
			message: 'Email is not valid',
		}),
	password: z.string().min(1, {
		message: 'Password is required',
	}),
	confirmPassword: z.string().min(1, {
		message: 'Confirm Password is required',
	}),
});

const RegisterForm = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	const handleSubmit = (data: z.infer<typeof formSchema>) => {
		router.push('/');
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Register</CardTitle>
				<CardDescription>
					Create an account with your credentials
				</CardDescription>
			</CardHeader>

			<CardContent className='space-y-2'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className='space-y-6'
					>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
										Name
									</FormLabel>
									<FormControl>
										<Input
											className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
											placeholder='Enter Name'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
										Email
									</FormLabel>
									<FormControl>
										<Input
											className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
											placeholder='Enter Email'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
										Password
									</FormLabel>
									<FormControl>
										<Input
											className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
											placeholder='Enter Password'
											type='password'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='confirmPassword'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-white'>
										Confirm Password
									</FormLabel>
									<FormControl>
										<Input
											className='bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0'
											placeholder='Enter Confirm Password'
											type='confirm Password'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className='w-full'>Register</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default RegisterForm;