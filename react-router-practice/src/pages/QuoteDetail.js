


import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';


const QuoteDetail = () => {
	const params = useParams();

	return (
		<>
			<h1>Quote Details Page</h1>
			<h1>Params are {params.quoteId}</h1>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
		</>
	);
}

export default QuoteDetail;
