import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const handleLogin = async (email, senha) => {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token;
            const userName = data.name; // Obtém o nome do usuário

            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName); // Armazena o nome do usuário no localStorage

            window.location.href = '/chat'; // Redireciona para a página do chat
        } else {
            const errorData = await response.json();
            console.error('Erro no login:', errorData.message);
            alert(`Erro ao fazer login: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Verifique o console para mais detalhes.');
    }
};



    function Login() {
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const [error, setError] = useState('');
    
        const handleSubmit = async (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário
            try {
                await handleLogin(email, senha);
            } catch (error) {
                setError('Erro ao fazer login');
            }
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        );
    }
    
    export default Login;
    
