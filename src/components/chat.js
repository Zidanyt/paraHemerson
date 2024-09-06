import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Corrija a importação para usar a função correta

const getUserNameFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken.name; // Supondo que 'name' está no token
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
            return null;
        }
    }
    return null;
};

function Chat() {
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName') || getUserNameFromToken(); // Obtém o nome do usuário

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/'); // Redireciona para o login se não estiver autenticado
        } else {
            // Lógica para buscar mensagens ou conectar ao socket
        }
    }, [navigate]);

    return (
        <div>
            <h1>Bem-vindo, {userName ? userName : 'Visitante'}!</h1>
            <h2>Chat</h2>
            {/* Renderizar a interface de chat aqui */}
        </div>
    );
}

export default Chat;
