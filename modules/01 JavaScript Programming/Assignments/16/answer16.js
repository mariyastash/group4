var book1 = {
    title : ' "The picture of Dorian Grey" ',
    author :' "Oscar Wilde" ',
    alreadyRead : true
}


var book2 = {
    title : ' "IT" ',
    author : "Stephen King",
    alreadyRead : true
}


var book3 = {
    title : ' "Dark Tower" ',
    author : "Stephen King",
    alreadyRead : false
}

var booksArray = [book1, book2, book3];

booksArray.forEach(function(element) {
    console.log(element.title , "by", element.author);
    if(element.alreadyRead){
        console.log("Alredy read", element.title, "by", element.author);
    }
    else{
        console.log("Still need to read", element.title, "by", element.author);
    }
});

//'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

