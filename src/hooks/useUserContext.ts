import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export function useUserContext() {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
}
