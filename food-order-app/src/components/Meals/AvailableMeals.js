import { useEffect } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useState } from 'react';




const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();
	// the function we pass to useEffect should not return a promise 
	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch('https://react-demo-d50c0-default-rtdb.europe-west1.firebasedatabase.app/meals.json');

			if (!response.ok) {
				throw new Error('Something went wrong!');
			};

			const responseData = await response.json();

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMeals(loadedMeals);
			setIsLoading(false);
		};
		fetchMeals().catch(error => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className={classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	};

	if (httpError) {
		return (
			<section className={classes.MealsError}>
				<p>{httpError}</p>
			</section>
		)
	};

	const mealsList = meals.map((meal) => {
		return (
			<MealItem
				id={meal.id}
				key={meal.id}
				meal={meal}
			/>
		);
	});

	return (
		<section className={classes.meals}>
			<Card>
				<ul>
					{mealsList}
				</ul>
			</Card>

		</section>
	);
};

export default AvailableMeals;