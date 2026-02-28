// Excersise 4: Search books

/* Write a function searchBooks which returns ALL the books written by a 
specific author and return the list of the book titles as a string, 
separated with comma if there are more than one titles. 
If these is no author in the library then return 'NOT FOUND'. 
Example dataset: library = [ { author: 'Bill Gates', title: 'The Road Ahead', 
libraryID: 1254} ]; Example authorName='Bill Gates'.
*/

function searchBooks(library, authorName) {
    const booksByAuthor = library.filter(book => book.author === authorName);
    if (booksByAuthor.length === 0) {
        return 'NOT FOUND';
    }
    return booksByAuthor.map(book => book.title).join(', ');
}

/* in repl:
library = [ { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254} ]
searchBooks(library, 'Bill Gates') // 'The Road Ahead'
searchBooks(library, 'Colleen Hoover') // 'NOT FOUND'
*/