import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload, error: null };
    case 'LOGIN_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'REGISTER_REQUEST':
      return { ...state, loading: true, error: null };
    case 'REGISTER_SUCCESS':
      return { ...state, loading: false, user: action.payload, error: null };
    case 'REGISTER_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, error: null };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Persist user to localStorage
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('user');
    }
  }, [state.user]);

  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
      // Simulate API call — replace with real backend endpoint later
      await new Promise(resolve => setTimeout(resolve, 1200));

      if (email === 'demo@modernshop.com' && password === 'password123') {
        const user = { _id: '1', name: 'Demo User', email, token: 'mock-jwt-token' };
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return user;
      }
      // Accept any valid-looking credentials for demo purposes
      if (email && password.length >= 6) {
        const user = { _id: '2', name: email.split('@')[0], email, token: 'mock-jwt-token' };
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return user;
      }
      throw new Error('Invalid email or password');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAIL', payload: err.message });
      throw err;
    }
  };

  const register = async (name, email, password) => {
    dispatch({ type: 'REGISTER_REQUEST' });
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      const user = { _id: Date.now().toString(), name, email, token: 'mock-jwt-token' };
      dispatch({ type: 'REGISTER_SUCCESS', payload: user });
      return user;
    } catch (err) {
      dispatch({ type: 'REGISTER_FAIL', payload: err.message });
      throw err;
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      error: state.error,
      login,
      register,
      logout,
      clearError,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
