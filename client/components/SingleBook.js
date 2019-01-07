import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const SingleBook = ({ singleBook, clearBook }) => {
    console.log('++++', singleBook)
    return (
        <div>
            <nav>
                <span onClick={event => clearBook(event)}>Back</span>
            </nav>
            <Card>
                {/* <Image src={singleBook.} /> */}
                <Card.Content>
                    <Card.Header>{singleBook.title}</Card.Header>
                    <Card.Meta>
                        <p className='data'>by {singleBook.authors[0].name}</p>
                        <p className='data'>first published in {singleBook.publish_date}</p>
                    </Card.Meta>
                    <Card.Description>{singleBook.description || 'There\'s no description for this book yet.'}</Card.Description>
                </Card.Content>
            </Card>
        </div>
    )

}

export default SingleBook