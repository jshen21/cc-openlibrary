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

export const checkBookCoverId = (book) => {
    const typeId = ['isbn', 'oclc', 'lccn', 'olid']
    const keys = Object.keys(book)
    for (let i = 0; i < keys.length; i++) {
        for(let j = 0; j < typeId.length; j++) {
            if(keys[i].includes(typeId[j])) {
                return `${keys[i].slice(0,4)}/${book[keys[i]][0]}`
            }
        }
    }
    if (book.cover) return `id/${book.cover[0]}`
    if (book.identifiers.goodreads) return `goodreads/${book.identifiers.goodreads[0]}`
    if (book.identifiers.librarything) return `librarything/${book.identifiers.librarything}`
    return false
}

export const getPublishYear = (books) => {
    const years = []
    books.length && books.forEach(book => book.first_publish_year && years.push(book.first_publish_year))
    return Array.from(new Set(years)).sort(((a,b) => b - a))
}