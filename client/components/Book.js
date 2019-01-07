import React from 'react'
import { Card } from 'semantic-ui-react'

const checkBookId = (book) => {
    if (book.isbn && book.isbn.length) {
        return `ISBN:${book.isbn[0]}`
    } else if (book.oclc && book.oclc.length) {
        return `OCLC:${book.oclc[0]}`
    } else if (book.lccn && book.lccn.length) {
        return `LCCN:${book.lccn[0]}`
    } else if (book.olid && book.olid.length) {
        return `OLID:${book.olid[0]}`
    } else {
        return false
    }
}


const Book = ({ book, pickBook }) => {
    return (
        <Card onClick={() => {(pickBook && checkBookId(book)) ? pickBook(checkBookId(book)): alert('No found')}}>
            <Card.Content>           
                <Card.Header>{book.title}</Card.Header>
                <Card.Meta>by {book.author_name}</Card.Meta>
                <Card.Meta>first published in {book.first_publish_year}</Card.Meta> 
            </Card.Content>      
        </Card>
    )
}

export default Book