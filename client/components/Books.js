import React from 'react'
import Book from './Book'

const Books = ({ books }) => {
    return (
        <div>
            {
                books.map((book, i) =>
                    <Book book={book} key={i} />
                )
            }
        </div>
    )
}

export default Books