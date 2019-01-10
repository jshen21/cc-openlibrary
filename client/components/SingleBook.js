import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { checkBookId, convertBookcoverId } from '../utils-client'



const SingleBook = ({ singleBook, clearBook }) => {
    //checkBookId edge cases (returning falsy value) have been considered when fetching the data
    const bookId = convertBookcoverId(checkBookId(singleBook))
    return (
        <div>
            <div className='center mt2 mb1'>
                <div className='navRight'>
                    <nav>
                        <button className='pointer' onClick={event => clearBook(event)}>Back</button>
                    </nav>
                </div>
            </div>
            <div className='center'>
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
        </div>
    )

}

export default SingleBook