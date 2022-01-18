import { useRouter } from 'next/router';

export default function detailsPage() {
	const newsId = useRouter().query.newsId;

	console.log(newsId);
	return (
		<h1>Details News</h1>
	)
};