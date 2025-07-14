import { ToastContainer } from "react-toastify"
import MainRoutes from "./routes/routes"
import { AuthProvider } from "./contexts/AuthProvider"
import { UserProvider } from "./contexts/UserProvider"


const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <MainRoutes />
        <ToastContainer />
      </UserProvider>
    </AuthProvider>
  )
}

export default App