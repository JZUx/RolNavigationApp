import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function SettingsScreen() {

  // Obtener la función cerrarSesion del AuthContext

  const { cerrarSesion } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>⚙️ Settings</Text>
      <Text style={styles.subtitulo}>Estas en Settings</Text>

      {/* Botón de Logout */}
      <TouchableOpacity style={styles.botonLogout} onPress={cerrarSesion}>
        <Text style={styles.textoLogout}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  botonLogout: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  textoLogout: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});