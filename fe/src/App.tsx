import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.route'
import Book from './routes/book/book.route'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/:id" element={<Book />} />
        </Routes>
    )
}

export default App
