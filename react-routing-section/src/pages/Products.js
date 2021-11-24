import { Link, useNavigate } from "react-router-dom";



const Products = () => {
	// const navigate = useNavigate();
	// navigate('/welcome',{replace:true}); // not pushing but replacing it in history
	// navigate(-1) // go to previous page
	// navigate(-2) // go to the 2nd previous page
	// navigate(1) // go to forward page
	return (
		<section>
			<h1>The Products Page</h1>
			<ul>
				<Link to='/products/p1'>Product 1</Link>
				<Link to='/products/p2'>Product 2</Link>
				<Link to='/products/p3'>Product 3</Link>
			</ul>
		</section>
	);
};

export default Products;