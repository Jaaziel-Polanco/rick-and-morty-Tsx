import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'
import { NotificationProvider } from './context/notification.context'
import { Suspense } from 'react'
import { Box, CircularProgress } from '@mui/material'

function App() {

  return (
    <NotificationProvider >
      <BrowserRouter>
        <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>} >
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>

  )
}

export default App
