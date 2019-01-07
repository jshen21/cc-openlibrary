import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { checkBookId, convertBookcoverId } from '../utils-client'



const SingleBook = ({ singleBook, clearBook }) => {
    const bookId = convertBookcoverId(checkBookId(singleBook))
    return (
        <div>
            <nav>
                <span onClick={event => clearBook(event)}>Back</span>
            </nav>
            <Card>
                <Image alt='Book cover is not available' src={`http://covers.openlibrary.org/b/${bookId}-L.jpg?default=false`} />
                <Card.Content>
                    <Card.Header>{singleBook.title}</Card.Header>
                    <Card.Meta>
                        <p>{singleBook.authors ? `by ${singleBook.authors[0].name}` : `There is no author information`}</p>
                        <p>{singleBook.subtitle? `Subtitle: ${singleBook.subtitle}` : ''}</p>
                        <p>{singleBook.publishers.length? `Publishers: ${singleBook.publishers.join(', ')}` : ''}</p>
                        <p>{singleBook.publish_date? `Publication Date: ${singleBook.publish_date}` : ''}</p>
                    </Card.Meta>
                    <Card.Description>{singleBook.description || 'There\'s no description for this book yet.'}</Card.Description>
                </Card.Content>
            </Card>
        </div>
    )

}

export default SingleBook