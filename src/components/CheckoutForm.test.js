import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render,screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () =>{ 
	 
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/First Name:/i);
     const lastName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);
    const button = screen.getByRole("button");
    
    
    userEvent.type(firstName,"therman");
    userEvent.type(lastName,"mcmillan");
    userEvent.type(address,"80 charleston dr");
    userEvent.type(city,"senoia");
    userEvent.type(state,"georgia");
    userEvent.type(zip,"30276");
    userEvent.click(button);
    
    const confirmation = screen.getByTestId("success-message");   
    expect(confirmation).toBeInTheDocument();
    
});
