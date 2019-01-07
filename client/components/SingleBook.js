import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { checkBookId, convertBookcoverId } from '../utils-client'



const SingleBook = ({ singleBook, clearBook }) => {
    console.log('SingleBook', singleBook)
    console.log('ID-----',checkBookId(singleBook))
    const bookId = convertBookcoverId(checkBookId(singleBook))
    console.log("BOOKID", bookId)
    return (
        <div>
            <nav>
                <span onClick={event => clearBook(event)}>Back</span>
            </nav>
            <Card>
                <Image alt='Book cover is not available' src={`http://covers.openlibrary.org/b/${bookId}-L.jpg`} />
                <Card.Content>
                    <Card.Header>{singleBook.title}</Card.Header>
                    <Card.Meta>
                        <p className='data'>{singleBook.authors ? `by ${singleBook.authors[0].name}` : `There is no author information`}</p>
                        <p className='data'>first published in {singleBook.publish_date}</p>
                    </Card.Meta>
                    <Card.Description>{singleBook.description || 'There\'s no description for this book yet.'}</Card.Description>
                </Card.Content>
            </Card>
        </div>
    )

}

export default SingleBook