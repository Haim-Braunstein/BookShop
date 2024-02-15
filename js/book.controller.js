

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
        <button>read</button>
        <button onclick="onUpdateBook(${book.price})"> update</button>
        <button onclick="onRemoveBook('${book.id}')">delete</button>
    </td>
    </tr>

    `)

    const elTable = document.querySelector('.board')
    elTable.innerHTML = strHTMLs.join('')
}

function onRemoveBook(bookId) {

    removeBook(bookId)
    renderBooks()

}

function onUpdateBook(bookPrice) { 

updatePrice(bookPrice)
renderBooks()

}

function onAddBook(ev){
    ev.preventDefault()


    const formBtn = document.querySelector('form button')

    const title = prompt('Enter a title book')
    const price = prompt('Enter the price')

    addBook(title, price)

    renderBooks()


}
