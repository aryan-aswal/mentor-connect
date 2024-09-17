import { Route, Routes } from 'react-router'
import './App.css'

import Login from './pages/AuthPage'
import Signup from './pages/RegisterPage'
import VerifyOtp from './pages/VerifyOtp'
import OpenRoute from './components/OpenRoute'
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword'
import Error from './pages/Error'
import ResetPassword from './pages/ResetPassword'
import Test from './pages/Test'

function App() {
    return (
        <>
            <Routes>
                <Route
                    path='/login'
                    element={
                        <OpenRoute>
                            <Login />
                        </OpenRoute>
                    } />

                <Route
                    path='/signup'
                    element={
                        <OpenRoute>
                            <Signup />
                        </OpenRoute>
                    } />

                <Route
                    path='/verify-email'
                    element={
                        <OpenRoute>
                            <VerifyOtp />
                        </OpenRoute>
                    } />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/update-password/:token" element={<ResetPassword />} />
                <Route path='/test' element={<Test />}></Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default App
