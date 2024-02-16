

function onInit() {
    renderBooks()
}

function renderBooks() {

    const books = getBooks()

    const strHTMLs = books.map(book => `
    <tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td>
        <button onclick="onDetailsBook('${book.id}')">Details</button>
        <button onclick="onUpdateBook(${book.price})"> Update</button>
        <button onclick="onRemoveBook('${book.id}')">Delete</button>
    </td>
    </tr>

    `)

    const elTable = document.querySelector('.board')
    elTable.innerHTML = strHTMLs.join('')
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
    removeBook(bookId)
    renderBooks()

}

function onUpdateBook(bookPrice) {
    updatePrice(bookPrice)
    renderBooks()

}

function onAddBook(ev) {
    ev.preventDefault()

    const title = prompt('Enter a title book')
    const price = +prompt('Enter the price')

    addBook(title, price)
    renderBooks()

}

function onDetailsBook(bookId) {

    const book = detailsBook(bookId)

    const elBookDetails = document.querySelector('.book-details ')
    const elSpanH2 = document.querySelector('h2 span')
    const elPre = document.querySelector('pre')

    elPre.innerText = JSON.stringify(book, null, 2)
    elSpanH2.innerText = book.title

    elBookDetails.showModal()

}
