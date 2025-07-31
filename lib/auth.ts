// Simple authentication utilities using localStorage
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  title: string;
  isLoggedIn: boolean;
}

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  const userData = localStorage.getItem('currentUser');
  if (!userData) return null;
  
  try {
    return JSON.parse(userData);
  } catch {
    return null;
  }
};

export const setCurrentUser = (user: User): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const logout = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('currentUser');
};

export const isLoggedIn = (): boolean => {
  const user = getCurrentUser();
  return user?.isLoggedIn || false;
};

// Mock user data for the current user
export const mockCurrentUser: User = {
  id: 'current-user',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  title: 'Full-Stack Developer & Designer',
  isLoggedIn: true
};