import Image from 'next/image';
import Link from 'next/link';
import logo from '@/img/logo.png';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
	return (
		<div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white'>
			<Link href='/'>
				<Image src={logo} alt='AtrouniMedia' width={80} />
			</Link>

			<DropdownMenu>
				<DropdownMenuTrigger className='focus:outline-none'>
					<Avatar>
						<AvatarImage src='https://github.com/shadcn.png' alt='Avatar' />
						<AvatarFallback className='text-black'>RA</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href={'/profile'}>Profile</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href={'/auth'}>Logout</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default Navbar;
