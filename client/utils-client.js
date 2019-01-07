export const checkBookId = (book) => {
    const typeId = ['isbn', 'oclc', 'lccn', 'olid']
    const keys = Object.keys(book)
    for (let i = 0; i < keys.length; i++) {
        for(let j = 0; j < typeId.length; j++) {
            if(keys[i].includes(typeId[j])) {
                return `${keys[i].toUpperCase()}:${book[keys[i]][0]}`
            }
        }
    }
    return false

    // if (book.isbn && book.isbn.length) {
    //     return `ISBN:${book.isbn[0]}`
    // } else if (book.oclc && book.oclc.length) {
    //     return `OCLC:${book.oclc[0]}`
    // } else if (book.lccn && book.lccn.length) {
    //     return `LCCN:${book.lccn[0]}`
    // } else if (book.olid && book.olid.length) {
    //     return `OLID:${book.olid[0]}`
    // } else {
    //     return false
    // }
}

export const convertBookcoverId = (bookId) => {  
    const typeId = bookId.toLowerCase().slice(0, 4)
    const number = bookId.split(':')[1]
    return bookId? `${typeId}/${number}` : false
}


//isbn_10, 