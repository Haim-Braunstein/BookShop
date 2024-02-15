'use strict'

var gBooks = _createBooks()

function getBooks() {

    return gBooks
}


function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
}

function updatePrice(bookPrice) {
    const newPrice = prompt('Enter a new price', bookPrice)
    const book = gBooks.find(book => book.price === bookPrice)
    book.price = newPrice

}

function addBook(title, price) {

    const newBook = _createBook(title, price)

    gBooks.unshift(newBook)

}

function detailsBook(bookId) {

    const book = gBooks.find(book =>book.id === bookId)

    return book

}

function _createBooks() {

    return [
        {
            id: 'bg4J78',
            title: 'The adventures of Lori Ipsi',
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
            title: 'Zorba the Greek',
            price: 87,
            imgUrl: 'lori-ipsi.jpg'
        },
    ]

}

function _createBook(title, price) {

    return {
        id: '3214Fd',
        title,
        price,
        imgUrl: 'lori-ipsi.jpg'

    }

}
