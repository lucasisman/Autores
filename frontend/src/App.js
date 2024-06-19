import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import AuthorEdit from './components/AuthorEdit';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Favorite Authors</h1>
        <Link to="/new">Add an Author</Link>
        <Routes>
          <Route path="/" element={<AuthorList />} />
          <Route path="/new" element={<AuthorForm />} />
          <Route path="/edit/:id" element={<AuthorEdit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
