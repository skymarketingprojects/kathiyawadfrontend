import AppProvider from "./provider"
import UserRoutes from "./routes"

function App() {

  return (
    <AppProvider>
      <UserRoutes />
    </AppProvider>
  )
}

export default App
