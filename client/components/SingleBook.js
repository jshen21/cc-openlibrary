import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { checkBookCoverId } from '../utils-client'



const SingleBook = ({ singleBook, clearBook }) => {
    const bookId = checkBookCoverId(singleBook)
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
                    <Card.Content>
                        <Card.Header>{singleBook.title}</Card.Header>
                        {
                            bookId && <Image src={`http://covers.openlibrary.org/b/${bookId}-L.jpg?default=false`} />
                        }
                        <Card.Meta>
                            <p>{singleBook.authors && `by ${singleBook.authors[0].name}` || ''}</p>
                            <p>{singleBook.subtitle && `Subtitle: ${singleBook.subtitle}` || ''}</p>
                            <p>{singleBook.publishers && `Publishers: ${singleBook.publishers.join(', ')}` || ''}</p>
                            <p>{singleBook.publish_date && `Publication Date: ${singleBook.publish_date}` || ''}</p>
                            <p>
                                {
                                    !singleBook.description
                                    ? 'There\'s no description for this book yet.'
                                    : singleBook.description.value
                                      ? `Description: ${singleBook.description.value}` 
                                      : 'There\'s no description for this book yet.'
                                }
                            </p>
                        </Card.Meta>
                    </Card.Content>
                </Card>
            </div>
        </div>
    )

}

export default SingleBook