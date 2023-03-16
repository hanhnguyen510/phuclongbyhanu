import { useContext, useEffect } from 'react';
import { userAuthContext } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    let { user } = useContext(userAuthContext);
    useEffect(() => {
        if (!user) {
            navigate(config.routes.sigin);
        }
    }, [user, navigate]);

    return children;
}

export default ProtectedRoute;
