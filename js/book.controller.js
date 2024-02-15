

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
        <button> update</button>
        <button>delete</button>
    </td>
    </tr>

    `)

    const elTable = document.querySelector('.board')
    elTable.innerHTML = strHTMLs.join('')


}