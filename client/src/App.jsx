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
import MentorApplicationForm from './pages/MentorApplicationForm'
import CompletionPage from './pages/CompletionPage'
import MentorDetailsPage from './pages/MentorDetailsPage'
import AllMentors from './pages/AllMentors'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'


function App() {
    return (
        <div>
            <Navbar></Navbar>
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
                <Route path='/apply-for-mentor' element={
                    <PrivateRoute>
                        <MentorApplicationForm />
                    </PrivateRoute>
                } />
                <Route path='/mentor-applied' element={
                    <PrivateRoute>
                        <CompletionPage />
                    </PrivateRoute>
                } />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/update-password/:token" element={<ResetPassword />} />
                <Route path='/test' element={<Test />}></Route>
                <Route path='/mentors' element={<AllMentors />}></Route>
                <Route path='/mentor/:id' element={<MentorDetailsPage />}></Route>
                <Route path={'/'} element={<HomePage />}></Route>
                <Route path="*" element={<Error />} />

            </Routes>
        </div>
    )
}

export default App
