'use strict'

var gBooks = _createBooks()

function getBooks() {

    return gBooks
}


function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
    console.log(gBooks);
    console.log(bookIdx);
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
