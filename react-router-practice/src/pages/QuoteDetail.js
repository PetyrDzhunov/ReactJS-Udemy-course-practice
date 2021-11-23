


import React from 'react';
import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
	const params = useParams();
	console.log(params);
	return (
		<>
			<h1>Quote Details Page</h1>
			<p>Current params are {params.quoteId}</p>
		</>
	);
}

export default QuoteDetail;
