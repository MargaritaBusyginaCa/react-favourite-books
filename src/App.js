import React, { useState } from 'react';
import list from './components/List'
import BookComponent from './components/BookComponents'

function App() {
  const [books, setBooks] = useState(list)
  return (
    <div className="main-container">
      <h1>Favourite Books List</h1>
    <BookComponent books = {books}/>
    </div>
  );
}

export default App;
