import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './components/User/Login';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './components/User/Signup';
import Reviews from './components/Reviews/Reviews';

describe("Did pages render correctly test", () => {

  test('Login page rendered correctly', () => {
    render(<BrowserRouter> <Login /> </BrowserRouter>);
    const element = screen.getByText("Don't have an account? Sign Up");
    expect(element).toBeInTheDocument();
  });
  
  test('Login page rendered correctly', () => {
    render(<BrowserRouter> <SignUp /> </BrowserRouter>);
    const element = screen.getByText("Already have an account? Sign in");
    expect(element).toBeInTheDocument();
  });

  test('Login page rendered correctly', () => {
    sessionStorage.setItem("username", "Test")
    render(<BrowserRouter> <Reviews /> </BrowserRouter>);
    const element = screen.getByText("Write a Review");
    expect(element).toBeInTheDocument();
  });

});
