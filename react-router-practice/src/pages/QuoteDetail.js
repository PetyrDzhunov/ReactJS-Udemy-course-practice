


import React from 'react';
import { useParams, Route } from 'react-router-dom';
import Comment from '../components/comments/Comments';


const QuoteDetail = () => {
	const params = useParams();
	console.log(params);
	return (
		<>
			<h1>Quote Details Page</h1>
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<p>Current params are {params.quoteId}</p>
			</Route>
		</>
	);
}

export default QuoteDetail;
