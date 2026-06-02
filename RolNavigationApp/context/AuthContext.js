import React, { createContext, useState } from 'react';

// Creamos el contexto global de autenticación

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Estado global: rol del usuario y si la sesión está activa
  const [rol, setRol] = useState(null);
  const [sesionActiva, setSesionActiva] = useState(false);

  // Función para iniciar sesión guardando el rol seleccionado
  const iniciarSesion = (rolSeleccionado) => {
    setRol(rolSeleccionado);
    setSesionActiva(true);
  };

  // Función para cerrar sesión y limpiar el estado global
  const cerrarSesion = () => {
    setRol(null);
    setSesionActiva(false);
  };

  return (
    <AuthContext.Provider value={{ rol, sesionActiva, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
}