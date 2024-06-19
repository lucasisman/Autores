import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorForm = () => {
    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', { name, quote })
        .then(() => navigate('/'))
        .catch(err => setErrors(err.response.data.errors));
    };

    return (
        <div>
        <h2>Add a New Author</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            {errors.name && <p>{errors.name.message}</p>}

            <label>Quote:</label>
            <input type="text" value={quote} onChange={e => setQuote(e.target.value)} />
            {errors.quote && <p>{errors.quote.message}</p>}

            <button type="submit">Submit</button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </form>
        </div>
    );
};

export default AuthorForm;
