const formEl = document.getElementById('best-books-form');
const books_API = 'MzLSqkQGr1AXd5AqVsu3zs9bUngM5FDg'
BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/`
formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const year = document.getElementById('year').value;
  const month = document.getElementById('month').value;
  const date = document.getElementById('date').value;
  
  const books_date = `${year}-${ month}-${date}`
  // Fetch bestselling books for date and add top 5 to page
  fetch(`${BASE_URL}${books_date}/hardcover-fiction.json?api-key=${books_API}`)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    const top5books = responseJson.results.books.slice(0,5);
    console.log(top5books)
    top5books.forEach(book =>{
        const display = document.getElementById("books-container")
        // extra credit
        const imgbook = document.createElement("img")
        imgbook.setAttribute("src",book.book_image)
        display.appendChild(imgbook)
        const bookone = `Title: ${book.title}, Author: ${book.author}, Description: ${book.description}`
        console.log(bookone)
        
        const pele = document.createElement("p")
        pele.innerHTML = bookone
        display.appendChild(pele)
    })
  })
  .catch(function (responseJson){
     console.log("Api didn't work for", responseJson)
  })

});
