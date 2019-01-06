import React from 'react'
import Book from './Book'

const Books = ({ books }) => {
    console.log("BOOKS", books)
    return (
        <div id='books' className='row wrap'>
            {
                books.map((book, i) =>
                    <Book book={book} key={i} />
                )
            }
        </div>
    )
}

export default Books