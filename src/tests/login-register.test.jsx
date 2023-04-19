import { screen } from "@testing-library/react";
import LoginRegister from "../pages/login-register";
import { setup } from "./utils";

it("toggles between registration and login", async () => {
  const { user } = setup(<LoginRegister />);

  const toggleButton = screen.getByRole("button", {
    // Defaults to 'registration mode.'
    name: "Already have an account?",
  });

  // Click the toggle button to switch to 'login mode.'
  await user.click(toggleButton);

  // The heading should now be 'Login.'
  expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();

  // The toggle button should now be 'Don't have an account?'
  expect(
    screen.getByRole("button", { name: "Don't have an account?" })
  ).toBeInTheDocument();

  // Click the toggle button to switch back to 'registration mode.'
  await user.click(toggleButton);

  // The heading should now be 'Register.'
  expect(screen.getByRole("heading", { name: "Register" })).toBeInTheDocument();

  // The toggle button should now be 'Already have an account?'
  expect(
    screen.getByRole("button", { name: "Already have an account?" })
  ).toBeInTheDocument();
});
