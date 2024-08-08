import axios from 'axios'
import { StyledBook } from './book.styled'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Book = () => {
    const [book, setBook] = useState({} as Book)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/books/${id}`).then((res) => {
            setBook(res?.data?.book || {})
        })
    }, [id])

    const order = async () => {
        try {
            const res = await axios.post(
                `http://localhost:8000/books/${id}/purchase`
            )
            if (res && res.status === 200) {
                alert(res.data?.message)
                setBook((prev) => ({
                    ...prev,
                    availableStock: prev.availableStock - 1,
                }))
            }
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }

    return (
        <StyledBook>
            {book.id && (
                <>
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

                    <button
                        className="order-button"
                        onClick={() => {
                            order()
                        }}
                    >
                        Order
                    </button>
                </>
            )}
        </StyledBook>
    )
}

export default Book
