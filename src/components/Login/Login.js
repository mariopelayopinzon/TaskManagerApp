// src/components/Login/Login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Simulación de autenticación
        const user = { username, role: username === 'manager' ? 'manager' : 'employee' }; // Asignar rol basado en el nombre de usuario
        onLogin(user);
        router.push('/'); // Redirigir a la página principal después de iniciar sesión
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default Login;