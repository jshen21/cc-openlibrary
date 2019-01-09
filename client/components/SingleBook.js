import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { checkBookId, convertBookcoverId } from '../utils-client'



const SingleBook = ({ singleBook, clearBook }) => {
    const bookId = convertBookcoverId(checkBookId(singleBook))
    return (
        <div className='center'>
            <nav>
                <button className='pointer' onClick={event => clearBook(event)}>Back</button>
            </nav>
            <Card>
                <Image alt='Book cover image is not available' src={`http://covers.openlibrary.org/b/${bookId}-L.jpg?`} />
                <Card.Content>
                    <Card.Header>{singleBook.title}</Card.Header>
                    <Card.Meta>
                        <p>{singleBook.authors && `by ${singleBook.authors[0].name}` || ''}</p>
                        <p>{singleBook.subtitle && `Subtitle: ${singleBook.subtitle}` || ''}</p>
                        <p>{singleBook.publishers && `Publishers: ${singleBook.publishers.join(', ')}` || ''}</p>
                        <p>{singleBook.publish_date && `Publication Date: ${singleBook.publish_date}` || ''}</p>
                    </Card.Meta>
                    <Card.Description>{singleBook.description || 'There\'s no description for this book yet.'}</Card.Description>
                </Card.Content>
            </Card>
        </div>
    )

}

export default SingleBook