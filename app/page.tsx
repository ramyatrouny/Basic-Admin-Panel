import DashboardCard from '@/components/dashboard/DashboardCard';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
	return (
		<>
			<div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
				<DashboardCard
					title={'Posts'}
					count={100}
					icon={<Newspaper className='text-slate-500' size={72} />}
				/>
				<DashboardCard
					title={'Categories'}
					count={12}
					icon={<Folder className='text-slate-500' size={72} />}
				/>
				<DashboardCard
					title={'Users'}
					count={750}
					icon={<User className='text-slate-500' size={72} />}
				/>
				<DashboardCard
					title={'Posts'}
					count={1200}
					icon={<MessageCircle className='text-slate-500' size={72} />}
				/>
			</div>
		</>
	);
}
