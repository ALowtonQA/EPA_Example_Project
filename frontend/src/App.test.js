import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './components/User/Login';
import { BrowserRouter } from 'react-router-dom';

describe("Did pages render correctly test", () => {

  test('Login page rendered correctly', () => {
    render(<BrowserRouter> <Login /> </BrowserRouter>);
    const element = screen.getByText("Don't have an account? Sign Up");
    expect(element).toBeInTheDocument();
  });

});
