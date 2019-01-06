import React from 'react'

const Book = ({ book }) => {
    return (
        <div className='book'>     
            <h3>{book.title}</h3>
            <p>by {book.author_name}</p>
            <small>first published in {book.first_publish_year}</small>
        </div>
    )
}

export default Book