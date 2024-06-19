import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => setAuthors(res.data))
        .catch(err => console.error(err));
    }, []);

    const deleteAuthor = id => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(() => setAuthors(authors.filter(author => author._id !== id)))
        .catch(err => console.error(err));
    };

    return (
        <div>
        <h2>We have quotes by:</h2>
        <table>
            <thead>
            <tr>
                <th>Author</th>
                <th>Actions Available</th>
            </tr>
            </thead>
            <tbody>
            {authors.map(author => (
                <tr key={author._id}>
                <td>{author.name}</td>
                <td>
                    <Link to={`/edit/${author._id}`}>Edit</Link>
                    <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default AuthorList;
