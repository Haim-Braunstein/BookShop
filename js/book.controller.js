'use strict'

function onInit() {
    renderBooks()
}

function renderBooks() {

    const books = getBooks()
    const elTable = document.querySelector('.board')

    if (books.length === 0) {

        elTable.innerHTML = `<tr class="match"><td colspan="3">
        No matching books were found</td></tr>`

    } else {
        const strHTMLs = books.map(book => `
    <tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td>
        <button onclick="onDetailsBook('${book.id}')">Details</button>
        <button onclick="onUpdateBook('${book.id}')"> Update</button>
        <button onclick="onRemoveBook('${book.id}')">Delete</button>
    </td>
    </tr>
    `
        )
        elTable.innerHTML = strHTMLs.join('')
    }

    renderStats()
    // renderRatingBook()
}

function renderStats() {
    const elExpensive = document.querySelector('.expensive-books')
    const elAverage = document.querySelector('.average-books')
    const elCheap = document.querySelector('.cheap-books')

    elExpensive.innerText = expensiveBooks()
    elAverage.innerText = averageBooks()
    elCheap.innerText = cheapBooks()

}

function onSetFilterBy(elInput) {
    const filterBy = elInput.value
    SetFilterBy(filterBy)
    renderBooks()
}

function onClearInput() {
    const elInput = document.querySelector('.filter input')
    elInput.value = ''
    onSetFilterBy('')
}

function onRemoveBook(bookId) {
    const book = detailsBook(bookId)
    removeBook(bookId)
    renderBooks()
    onPopUpMsg('Removed', book.title)
}

function onUpdateBook(bookId) {
    const newPrice = +prompt('Enter a new price')
    updatePrice(bookId, newPrice)
    const bookTitle = detailsBook(bookId).title

    renderBooks()
    onPopUpMsg('updated the price of', bookTitle)

}

function onAddBook() {
    const elTitle = document.querySelector('.title')
    const elPrice = document.querySelector('.price')
    const price = parseInt(elPrice.value)

    if (!elTitle.value || !price) return

    addBook(elTitle.value, price)
    renderBooks()
    onPopUpMsg('Added', elTitle.value)

}

function onOpenModalAddBook(ev) {
    ev.preventDefault()

    const elAddBook = document.querySelector('.add-book')
    elAddBook.showModal()
}

function onCloseModalAddBook() {
    const elAddBook = document.querySelector('.add-book')
    elAddBook.close()
}

function onDetailsBook(bookId) {

    const book = detailsBook(bookId)
    // renderRatingBook(book)

    const elBookDetails = document.querySelector('.book-details ')
    const elPre = document.querySelector('.book-details pre')
    elPre.innerText = JSON.stringify(book, null, 2)

    elBookDetails.showModal()

}

var countRating = 0

function renderRatingBook(book) {
    const elRating = document.querySelector('.rating')

    elRating.innerText = countRating++
    if (countRating === 6) countRating--
    ratingBook(countRating, book)
}

function onPopUpMsg(msg, title) {

    const elPopUp = document.querySelector('.pop-up')
    const elPre = document.querySelector('.pop-up pre')

    elPre.innerHTML = `You successfully ${msg} the book: ${title}`

    elPopUp.showModal()

    setTimeout(() => {
        elPopUp.close()
    }, 2000)

}
