import React from 'react'
import { Card } from 'semantic-ui-react'
import { checkBookId } from '../utils-client'

const Book = ({ book, pickBook }) => {
    return (
        <Card 
            onClick={() => {(pickBook && checkBookId(book)) 
                ? pickBook(checkBookId(book))
                : alert('Details about this book can not be found!')}}>
            <Card.Content>           
                <Card.Header>{book.title}</Card.Header>
                <Card.Meta>by {book.author_name}</Card.Meta>
                <Card.Meta>first published in {book.first_publish_year}</Card.Meta> 
                <Card.Meta>editions: {book.edition_count}</Card.Meta>
            </Card.Content>      
        </Card>
    )
}

export default Book