// Initializa book shelf array with some books
let books = ["The Great Gatsby", "Sons and Lovers", "To kill a Mockingbird", "Pride and Prejudice"];

// Add book to the front using unshift()
function addToFront()
{
    let bookInput = document.getElementById('bookInput');
    const newBook = bookInput.value.trim();
    console.log(newBook);
    if(newBook)
    {
        books.unshift(newBook);
        bookInput.value='';
        displayBooks();
    }
}

// Add book to the end using push()
function addToEnd()
{
    let bookInput = document.getElementById('bookInput');
    const newBook = bookInput.value.trim();
    console.log(newBook);
    if(newBook)
    {
        books.push(newBook);
        bookInput.value='';
        displayBooks();
    }
}

// Remove book from front using shift()
function removeFromFront()
{
    if(books.length > 0)
    {
        const removeBook = books.shift();
        console.log(removeBook);
        displayBooks();
    }
}

//Remove book from end using pop()
function removeFromEnd()
{
    if(books.length > 0)
    {
        const removeBook = books.pop();
        console.log(removeBook);
        displayBooks();
    }
}

function displayBooks()
{
    let bookList = document.getElementById('bookList');
    if(books.length === 0)
    {
        bookList.innerHTML = `<p>No books on the shelf.</p>`
        return;
    }

    let html= '<strong>Front of shelf</strong><br>';

        books.forEach((i, index)=>
        {
            html += `${index + 1}. ${i} <br>`;
        });

        html += `<strong>End of Shelf</strong>`;
    bookList.innerHTML = html;
}

displayBooks();
console.log(books);