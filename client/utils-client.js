export const checkBookId = (book) => {
    const typeId = ['ISBN', 'OCLC', 'LCCN', 'OLID']
    const keys = Object.keys(book)
    for (let i = 0; i < keys.length; i++) {
        for(let j = 0; j < typeId.length; j++) {
            if(keys[i].includes(typeId[j])) {
                return `${keys[i]}:${book[keys[i]][0]}`
            }
        }
    }
    return false
}

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