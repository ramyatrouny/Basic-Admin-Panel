import Image from 'next/image';
import Link from 'next/link';
import logo from '@/img/logo.png';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Navbar = () => {
	return (
		<div className='bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white'>
			<Link href='/'>
				<Image src={logo} alt='AtrouniMedia' width={80} />
			</Link>

			<Avatar>
				<AvatarImage src='https://github.com/shadcn.png' alt='Avatar' />
				<AvatarFallback className='text-black'>RA</AvatarFallback>
			</Avatar>
		</div>
	);
};

export default Navbar;
