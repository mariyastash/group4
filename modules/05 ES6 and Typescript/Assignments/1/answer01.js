let books = [
    { title: `The Hobbit`, author: `J.R.R. Tolkien`, alreadyRead: true },
    { title: `Harry Potter`, author: `J.K Rolling`, alreadyRead: false },
    { title: `The Lord Of The Rings`, author: `Yakir Solomon`, alreadyRead: true },
]

//ES5
// for (var i = 0; i < books.length; i++) {
//     console.log(books[i].title + " by " + books[i].author);
// }

//ES6
books.forEach((element) => {
    let title = element.title;
    let author = element.author;
    console.log(`${title} by ${author}`);
});


//ES6


const diconstructingBooks = () => {
    let [book1, book2, book3] = books;

    let {title, author, alreadyRead} = book1;
    
    printIfAlredyRead();
}

for (var i = 0; i < books.length; i++) {
    if (books[i].alreadyRead)
        console.log("You already read " + "''" + books[i].title + "'' by " + books[i].author);
    else
        console.log("You still need to read " + "''" + books[i].title + "'' by " + books[i].author);
}
