import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { LoginForm } from "../src/components/Login/LoginForm";
import { BrowserRouter } from "react-router-dom";
import { makeRequestPost } from "../src/lib/requests";

jest.mock("../src/lib/requests");

describe("LoginForm component ", () => {
  let container;
  beforeEach(() => {
    container = render(<LoginForm />, { wrapper: BrowserRouter });
  });

  test("Render a button of login", () => {
    const btnLogin = screen.getByRole("button", { name: "Iniciar Sesión" });
    expect(btnLogin).toBeInTheDocument();
  });

  test("LoginForm component calls the makeRequestPost function", async () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    const data = {
      email: "user@fake.co",
      password: "userfake",
    };

    makeRequestPost.mockResolvedValueOnce({
      accessToken: "XXXXXXX",
      user: {
        email: "user@fake.co",
        id: 123456789,
        name: "userFake",
        role: "admin",
      },
    });

    const inputEmail = screen.getByTestId("login-email-input");
    fireEvent.change(inputEmail, { target: { value: data.email } });

    const inputPassword = screen.getByTestId("login-password-input");
    fireEvent.change(inputPassword, { target: { value: data.password } });

    const btnLogin = screen.getByRole("button", { name: "Iniciar Sesión" });
    fireEvent.click(btnLogin);

    await waitFor(() => {
      expect(makeRequestPost).toHaveBeenCalledTimes(1);
    });
  });

});
