import React from 'react'
import { Item } from 'semantic-ui-react'
import Book from './Book'

const Books = ({ books, pickBook }) => {
    return (
        <div>
            <Item.Group divided>
                {
                    books.map((book, i) =>
                        <Book book={book} pickBook={pickBook} key={i} />
                    )
                }
            </Item.Group>
        </div>
    )
}

export default Books