import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Search';
  bookForm: FormGroup;
  bookName: string = "";
  booksArray = [];
  index: number = 0;

  bookTitle: string = "";
  bookAuthors: string[] = [];
  bookPreview: string = "";


  searchBook(input) {
    this.bookName = input.value;

    const booksUrl = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyDKKb0AjOM-UpM45JXEucq3StNYSGeLom4&q=${this.bookName}&startIndex=${++this.index}`;
    console.log(this.index);
    fetch(booksUrl)
      .then(responce => responce.json())
      .then(data => this.createBooksArray(data))
  }

  createBooksArray(data) {

    for (let i = 0; i < 10; i++) {
      this.createBookObject(data, i);

      this.booksArray.push(
        { "title": this.bookTitle, "authors": this.bookAuthors, "preview": this.bookPreview }
      );
    }
    // console.log(this.booksArray);
  }

  createBookObject(bookData, i: number) {
    this.bookTitle = bookData.items[i].volumeInfo.title;
    this.bookAuthors = bookData.items[i].volumeInfo.authors;
    this.bookPreview = bookData.items[i].volumeInfo.previewLink;
  }
}
