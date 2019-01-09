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
}

//The argument bookId in this function is coming from the above function checkBookId, 
//and it's only called when the checkBookId function returns truthy value
export const convertBookcoverId = (bookId) => {  
    const typeId = bookId.toLowerCase().slice(0, 4)
    const number = bookId.split(':')[1]
    return bookId? `${typeId}/${number}` : false
}

export const getPublishYear = (books) => {
    const years = []
    books.length && books.forEach(book => book.first_publish_year && years.push(book.first_publish_year))
    return Array.from(new Set(years)).sort(((a,b) => b - a))
}