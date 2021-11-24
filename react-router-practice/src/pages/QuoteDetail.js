import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Max', text: "Learning React is fun!" },
	{ id: 'q2', author: 'Peter', text: "Learning React is great!" },
	{ id: 'q3', author: 'George', text: "Learning JavaScript is fun!" }
];


const QuoteDetail = () => {
	const params = useParams();
	const quote = DUMMY_QUOTES.find((currQuote) => currQuote.id === params.quoteId);
	const match = useRouteMatch();
	console.log(match);
	if (!quote) {
		return <p>No quote found!</p>
	};

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`${match.path}`} exact>
				<div className="center">
					<Link className="btn--flat" to={`${match.url}/comments`}>Load comments</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
}

export default QuoteDetail;
