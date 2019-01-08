import { expect } from 'chai'
import { 
    setRequestBooksPending, 
    setRequestBooksSuccess,
    setSortedBooks,
    setFilteredBooks, 
    clearFilteredBooks
} from './books'

const fakeBooks = [
    {
        'title': 'Roetxg Hexgte',
        'author': 'J.M.Aitxse',
        'published year': 2009,
        'editions': 5
    }
]

describe('Action Creators', () => {
    describe('setRequestBooksPending', () => {
        it('returns properly formatted `setRequestBooksPending` action', () => {
            expect(setRequestBooksPending()).to.be.deep.equal({
                type: 'REQUEST_BOOKS_PENDING'
            })
        })
    })

    describe('setRequestBooksSuccess', () => {
        it('returns properly formatted `setRequestBooksSuccess` action', () => {
            expect(setRequestBooksSuccess(fakeBooks)).to.be.deep.equal({
                type: 'REQUEST_BOOKS_SUCCESS',
                books: fakeBooks
            })
        })
    })

    describe('setSortedBooks', () => {
        it('returns properly formatted `setSortedBooks` action', () => {
            expect(setSortedBooks(fakeBooks)).to.be.deep.equal({
                type: 'BOOKS_SORT',
                books: fakeBooks
            })
        })
    })

    describe('setFilteredBooks', () => {
        it('returns properly formatted `setFilteredBooks` action', () => {
            expect(setFilteredBooks(fakeBooks)).to.be.deep.equal({
                type: 'BOOKS_FILTER',
                books: fakeBooks
            })
        })
    })

    describe('clearFilteredBooks', () => {
        it('returns properly formatted `clearFilteredBooks` action', () => {
            expect(clearFilteredBooks()).to.be.deep.equal({
                type: 'CLEAR_FILTEREDBOOKS'
            })
        })
    })
})
