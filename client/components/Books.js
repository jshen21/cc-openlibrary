import React from 'react'
import { Card } from 'semantic-ui-react'
import Book from './Book'

const Books = ({ books, error, pickBook }) => {
    return (
        <div className='mt4'>
            {error? 
                <h3 className='center'>Oooops...No results can be found...</h3> :
                <Card.Group className='center'>
                    {
                        books.filter(book=> book.author_name).map((book, i) =>
                            <Book book={book} pickBook={pickBook} key={i} />
                        )
                    }
                </Card.Group>
            }
        </div>
    )
}

export default Books