import BackButton from '@/components/BackButton';
import PostsTable from '@/components/posts/PostsTable';

const PostsPage = () => {
	return (
		<>
			<BackButton text='Go Back' link='/' />
			<PostsTable />
		</>
	);
};

export default PostsPage;
