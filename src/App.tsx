import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "./contexts/AuthProvider";
import { UserProvider } from "./contexts/UserProvider";
import MainRoutes from "./routes/routes";

const queryClient = new QueryClient();

const App: React.FC = () => {
  // Bütün dəyişənlər camelCase formatında
  const userName = "soltan"; // ✅ Düzgün format
  const name = "sss"
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>
          <MainRoutes />
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;