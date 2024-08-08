import axios from 'axios'
import { useState, useEffect } from 'react'
import { StyledHome } from './home.styled'

import { Link } from 'react-router-dom'

const Home = () => {
    const [books, setBooks] = useState([] as Books)
    const getBooks = async () => {
        const res = await axios.get('http://localhost:8000/books')
        setBooks(res?.data?.books || [])
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <StyledHome>
            <header>
                <span className="title">Best Sellers</span>
                <span className="subtitle">our most popular books</span>
            </header>

            <section className="books">
                {books.map((book) => (
                    <div className="book" key={book.id}>
                        <Link to={`/books/${book.id}`}>
                            <div className="cover">
                                <img
                                    src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                                    alt="Book Cover"
                                />
                            </div>

                            <div className="info">
                                <span className="title">{book.title}</span>
                                <span className="author">{book.author}</span>
                                <span>{book.availableStock}</span>
                                <span className="price">$ {book.price}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </StyledHome>
    )
}

export default Home
