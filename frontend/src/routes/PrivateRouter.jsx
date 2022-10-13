import { Navigate } from 'react-router-dom';

export const PrivateRouter = ({ children, isUser }) => (isUser ? children : <Navigate to="/" />);
