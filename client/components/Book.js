import React from 'react'

const Book = ({ book }) => {
    return (
        <div className='book'>     
            <h3>{book.title}</h3>
            <p>by {book.author_name}</p>
            <p>Editions published: {book.edition_count}</p>
            <p>First Publish Year: {book.first_publish_year}</p>
        </div>
    )
}

export default Book