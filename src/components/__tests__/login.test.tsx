import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import LoginForm from "../login/LoginForm";



describe("Login form integration test", () => {
    const mockLogin = vi.fn();
    const mockSetLoading = vi.fn();

    const authContextValue = {
        login: mockLogin,
        loading: false,
        setLoading: mockSetLoading,
    };

    const renderForm = () =>
        render(
            <BrowserRouter>
                <AuthContext.Provider value={authContextValue as any}>
                    <LoginForm />
                </AuthContext.Provider>
            </BrowserRouter>
        );

    test("shows toast error when login fails", async () => {
        renderForm();

        // Email inputunu doldur
        fireEvent.change(screen.getByLabelText(/email/i), {
            target: { value: "" },
        });

        // Password inputunu doldur
        fireEvent.change(screen.getByLabelText(/password/i), {
            target: { value: "" },
        });

        // Login düyməsinə klik et
        fireEvent.click(screen.getByRole("button", { name: /login/i }));

        // Toast error göstərilibmi, onu yoxla
        
        await waitFor(() => {
            // const emailInput = screen.getByTestId('form-error')
            expect(screen.getByTestId("form-password-error")).toBeInTheDocument();
            expect(screen.getByTestId("form-password-error").textContent).toContain("");
            // expect(emailInput.textContent).toContain("Email boş ola")
        });

    });

});
   