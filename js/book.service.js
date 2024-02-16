'use strict'

const BOOK_DB = 'bookDB'

var gBooks
var gFilterby


_createBooks()

function getBooks() {

    if (!gFilterby || gFilterby === '') return gBooks

    return gBooks.filter(book => book.title.toLowerCase() === gFilterby.toLowerCase())
}

function SetFilterBy(filterBy) {
    gFilterby = filterBy
}

function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)

    _saveBooks()
}

function updatePrice(bookPrice) {
    const newPrice = prompt('Enter a new price', bookPrice)
    const book = gBooks.find(book => book.price === bookPrice)
    book.price = newPrice

    _saveBooks()

}

function addBook(title, price) {

    const newBook = _createBook(title, price)

    gBooks.unshift(newBook)

    _saveBooks()


}

function detailsBook(bookId) {

    const book = gBooks.find(book => book.id === bookId)

    return book

}

function popUpMsg(bookId) {

    const book = gBooks.find(book => book.id === bookId)

    return book ? book.title : null

}

function cheapBooks() {
    return gBooks.filter(book => book.price < 80).length
}

function averageBooks() {
    return gBooks.filter(book => book.price > 80 && book.price < 200).length
}

function expensiveBooks() {
    return gBooks.filter(book => book.price > 200).length
}

function _createBooks() {

    gBooks = loadFromStorage(BOOK_DB)

    if (!gBooks) {

        gBooks = [
            {
                id: 'bg4J78',
                title: 'The Adventures Of Lori Ipsi',
                price: 120,
                imgUrl: 'lori-ipsi.jpg'
            },

            {
                id: 'Fd6J98',
                title: 'World Atlas',
                price: 300,
                imgUrl: 'lori-ipsi.jpg'
            },

            {
                id: 'az27L2',
                title: 'Zorba The Greek',
                price: 87,
                imgUrl: 'lori-ipsi.jpg'
            },
        ]
        _saveBooks()

    }

}

function _createBook(title, price) {

    return {
        id: '3214Fd',
        title,
        price,
        imgUrl: 'lori-ipsi.jpg'
    }

}

function _saveBooks() {
    saveToStorage(BOOK_DB, gBooks)
}