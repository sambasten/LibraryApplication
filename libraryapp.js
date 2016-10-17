'use strict'


/** 
 * class Book
 * 
 * A simple Book class that instantiates with
 * two parameters {string | string} bookTitle, author 
 * 
 */
class Book {

    /**
     * @constructor
     * 
     * @param {string} bookTitle
     * @param {string} author
     * 
     */
    constructor(bookTitle, author) {

        if(typeof(bookTitle) === 'undefined' || typeof(author) === 'undefined') {
            throw new Error('Book title and Author name must be declared');
        }

        this.bookTitle = bookTitle.toString();
        this.author = author.toString();
        
        console.log('New Book created');
    }
}

/** 
 * class Library
 * 
 * A Library class that instantiates with
 * a single parameter {array} shelf that stores
 * instances from the Book class
 * 
 */
class Library {

    /**
     * @constructor
     * 
     */
    constructor(){
        this.shelf = [];
    }

    /**
     * this method takes a book object and adds it
     * to library.shelf
     * 
     * @param {obj} book
     * 
     */
    addBook(book) {
        if (book instanceof Book && !(book in this.shelf)) {
        	
        	this.shelf.push(book);
        	console.log('Book successfully added');
	        
        } else {
        	console.log('Book already in Library');
        }
    }

    /**
     * this method takes a book object and removes it
     * from library.shelf
     * 
     * @param {obj} book
     * 
     */
    removeBook(book) {
    	if (this.shelf.length > 0 && book instanceof Book) {
    		for(var i = 0; i < this.shelf.length; i++) {
    			if (this.shelf[i].bookTitle === book.bookTitle) {
    				this.shelf.splice(i, 1);
    			}
    		} 
    	} else {
    		console.log('library empty');
    	}
    }

    /**
     * this method prints out the list of books
     * in library.shelf with their corresponding authors 
     * 
     */
    getBooks() {
    	if (this.shelf.length > 0) {
            for (var i = 0; i < this.shelf.length; i++) {
                console.log(this.shelf[i].bookTitle);
                console.log('by - ' + this.shelf[i].author + '\n');
            }
        } else {
            console.log('Library empty');
        }
    }
}

//Instantiate two books -> firstBook, secondBook
var firstBook = new Book("Angels and Demons", "Dan Brown");
var secondBook = new Book("DaVinci Code", "Wale Slimmer");
console.log();

//Instantiate library
var library = new Library();

//Add books to library
library.addBook(firstBook);
library.addBook(secondBook);
console.log();

//List out current books in library
library.getBooks();

console.log('--------------------------------')

//Remove firstbook from library
library.removeBook(firstBook);

//List remaining books in library
library.getBooks();