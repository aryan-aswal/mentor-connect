// import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    // const { token } = useSelector((state) => state.auth);
    const token = "as";
    if(token !== null) {
        return children;
    } else {
        return <Navigate to={'/login'} />
    }
}

export default PrivateRoute