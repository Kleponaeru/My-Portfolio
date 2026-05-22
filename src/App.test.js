import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders refreshed portfolio heading", () => {
  render(<App />);
  expect(screen.getByText(/Kelvin Lie/i)).toBeInTheDocument();
  expect(screen.getByText(/current and relevant work first/i)).toBeInTheDocument();
});
