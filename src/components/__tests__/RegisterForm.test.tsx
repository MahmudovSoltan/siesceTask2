import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import SignInForm from "../signin/SignInForm";
import { vi } from 'vitest'
// API-dən gələn errorları mock edirik
  const mockErrorResponse = {
    firstname: ["İstifadəçi adı boş ola bilməz.", "İstifadəçi adı ən azı 3 hərf uzunluğunda olmalıdır."],
    email: ["Email boş ola bilməz.", "Email formatı düzgün deyil."],
    password: ["Şifrə boş ola bilməz."]
  };

// registerFunc funksiyasını mock edirik
vi.mock("../../services/auth", () => ({
  registerFunc: vi.fn((_, setErrors) => {
    setErrors(mockErrorResponse);
    return Promise.reject("Validation error");
  }),
}));

import { registerFunc } from "../../services/auth";

test("shows first error messages when form validation fails", async () => {
  const setLoading = vi.fn();

  const contextValue = {
    loading: false,
    setLoading,
  };

  render(
    <BrowserRouter>
      <AuthContext.Provider value={contextValue as any}>
        <SignInForm />
      </AuthContext.Provider>
    </BrowserRouter>
  );

  fireEvent.change(screen.getByLabelText(/First Name/i), {
    target: { value: "" },
  });
  fireEvent.change(screen.getByLabelText("Password"), {
    target: { value: "1234" },
  });

  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "notanemail" },
  });

  fireEvent.click(screen.getByRole("button", { name: /create account/i }));

  await waitFor(() => {
    expect(screen.getByTestId("form-firstName-error")).toBeInTheDocument();
    expect(screen.getByTestId("form-email-error")).toBeInTheDocument();
    expect(screen.getByTestId("form-email-error")).toHaveTextContent("Email formatı");
    expect(screen.getByTestId("form-password-error")).toBeInTheDocument()
  });

  expect(registerFunc).toHaveBeenCalled();
});
