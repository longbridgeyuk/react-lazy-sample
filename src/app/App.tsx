import { AppProvider } from './AppProvider'
import { AppRoutes } from './AppRoutes'

export function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
