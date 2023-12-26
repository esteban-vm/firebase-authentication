import type { FC } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Navigation } from '@/components'
import { Home, Login, Profile, Register } from '@/pages'
import store from '@/store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <main>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='profile' element={<Profile />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </main>
    </Provider>
  )
}

export default App
