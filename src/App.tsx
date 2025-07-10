import { ToastContainer } from "react-toastify"
import MainRoutes from "./routes/MainRoutes"
import { AuthProvider } from "./contexts/AuthProvider"


const App = () => {
  return (
    <AuthProvider>
      <MainRoutes />
      <ToastContainer />
    </AuthProvider>
  )
}

export default App