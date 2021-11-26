import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
	test('renders "Hello World" as a text', () => {
		//Arrange
		render(<Greeting />);
		//Act
		//... nothing
		//Assert
		const helloWorldElement = screen.getByText('Hello World');
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders good to see you if the button was NOT clicked', () => {
		render(<Greeting />);

		const shouldBeSeen = screen.getByText(/It's good to see you!/i);
		expect(shouldBeSeen).toBeInTheDocument();
	});

	test('renders "Changed" if the button WAS clicked', () => {
		//Arrange
		render(<Greeting />);

		//Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const outputElement = screen.getByText(/changed/i);
		expect(outputElement).toBeInTheDocument();
	});

	test('only one paragraph is visible when the button WAS clicked', () => {

		render(<Greeting />);

		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		const outputElement = screen.queryByText(/good to see you/i);
		expect(outputElement).toBeNull();
	});

});
