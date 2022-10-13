import { Navigate } from 'react-router-dom';

export const PublicRouter = ({ children, isUser }) => (!isUser ? children : <Navigate to="/store" />);
