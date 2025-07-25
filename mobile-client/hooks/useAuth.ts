import { AuthContext } from '@/providers/auth/AuthProvider';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext);
