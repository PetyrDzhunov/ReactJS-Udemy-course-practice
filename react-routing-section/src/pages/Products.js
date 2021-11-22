import { Link } from "react-router-dom";

const Products = () => {
	return (
		<section>
			<h1>The Products Page</h1>
			<ul>
				<Link>A Book</Link>
				<Link>A Carpet</Link>
				<Link>An Online Course</Link>
			</ul>
		</section>
	);
};

export default Products;