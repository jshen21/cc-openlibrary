import React from 'react'
import { Card } from 'semantic-ui-react'
import Book from './Book'

const Books = ({ books, pickBook }) => {
    return (
        <div>
            <Card.Group className='center'>
                {
                    books.filter(book=> book.author_name).map((book, i) =>
                        <Book book={book} pickBook={pickBook} key={i} />
                    )
                }
            </Card.Group>
        </div>
    )
}

export default Books