import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {

  // Estado local para guardar el rol seleccionado

  const [rolSeleccionado, setRolSeleccionado] = useState(null);
  const { iniciarSesion } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar Sesión</Text>
      <Text style={styles.subtitulo}>Selecciona tu rol:</Text>

      {/* Botón de rol Admin */}
      <TouchableOpacity
        style={[styles.botonRol, rolSeleccionado === 'admin' && styles.seleccionado]}
        onPress={() => setRolSeleccionado('admin')}
      >
        <Text style={styles.textoBoton}>Admin</Text>
      </TouchableOpacity>

      {/* Botón de rol Common */}
      <TouchableOpacity
        style={[styles.botonRol, rolSeleccionado === 'common' && styles.seleccionado]}
        onPress={() => setRolSeleccionado('common')}
      >
        <Text style={styles.textoBoton}>Common</Text>
      </TouchableOpacity>

      {/* Botón de Ingresar */}
      <TouchableOpacity
        style={[styles.botonIngresar, !rolSeleccionado && styles.deshabilitado]}
        onPress={() => rolSeleccionado && iniciarSesion(rolSeleccionado)}
        disabled={!rolSeleccionado}
      >
        <Text style={styles.textoIngresar}>Ingresar</Text>
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
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  botonRol: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  seleccionado: {
    borderColor: '#4a90e2',
    backgroundColor: '#e8f0fe',
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: '600',
  },
  botonIngresar: {
    marginTop: 20,
    width: '80%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4a90e2',
    alignItems: 'center',
  },
  deshabilitado: {
    backgroundColor: '#aaa',
  },
  textoIngresar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});