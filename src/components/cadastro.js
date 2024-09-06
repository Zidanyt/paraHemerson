import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        cnpj: '',
        celular: '',
        senha: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { ...formData, celular: parseInt(formData.celular, 10) };

            await axios.post('http://localhost:3000/cadastro', data);
            navigate('/chat');
        } catch (err) {
            console.error('Erro ao cadastrar:', err.response ? err.response.data : err.message);
            setError('Erro ao cadastrar. Verifique os dados e tente novamente.');
        }
    };
    
    

    return (
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>CNPJ:</label>
                    <input
                        type="text"
                        name="cnpj"
                        value={formData.cnpj}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Celular:</label>
                    <input
                        type="text"
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Cadastro;
