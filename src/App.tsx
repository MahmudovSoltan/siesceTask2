import { ToastContainer } from "react-toastify"
import MainRoutes from "./routes/routes"
import { AuthProvider } from "./contexts/AuthProvider"
import { UserProvider } from "./contexts/UserProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
const App = () => {
  const n_name = 5
  return (
    <QueryClientProvider client={queryClient}>

      <AuthProvider>
        <UserProvider>
          <MainRoutes />
          <ToastContainer />
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App