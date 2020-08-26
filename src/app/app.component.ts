import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryCatalog';

  newTitle :string;
  newAuthor :string;
  newPages :number;
  newID :number;

  getTitle :string;
  getAuthor :string;
  getItem :string;
  itemType :string;

  showTable :boolean = false;

  nextIDnumber : number=10;
  returnValues = new Array<any>();

  fakeBookDatabase :Array<any> = [
    {"id":1,"title":"Chrome Yellow","author":"Aldous Huxley","pages":307},
    {"id":2,"title":"Brave New World","author":"Aldous Huxley","pages":288},
    {"id":3,"title":"The Call of the Wild","author":"Jack London","pages":160},
    {"id":4,"title":"Moby Dick","author":"Herman Melville","pages":720},
    {"id":5,"title":"Frankenstein","author":"Mary Shelley","pages":290},
    {"id":6,"title":"Doors of Perception","author":"Aldous Huxley","pages":208},
    {"id":7,"title":"Along the Road","author":"Aldous Huxley","pages":266},
    {"id":8,"title":"Great Expectations","author":"Charles Dickens","pages":284},
    {"id":9,"title":"Great Expectations","author":"Kathy Acker","pages":352},];

    setTitle() {
      
    }

    deleteBook(b) {
      this.fakeBookDatabase.splice(this.fakeBookDatabase.indexOf(b),1);
    }

    addBook() {
      let newBook =  {
        id: this.getNextID(),
        title: this.newTitle,
        author: this.newAuthor,
        pages: this.newPages
      };
    
      this.fakeBookDatabase.push(newBook);

    }

    getNextID() {
      this.nextIDnumber=this.nextIDnumber+1;
      return this.nextIDnumber;
    };

    updateBook() {
      let newBook =  {
        id: this.newID,
        title: this.newTitle,
        author: this.newAuthor,
        pages: this.newPages
      };

      for(let b of this.fakeBookDatabase) {
        if (b.id == this.newID) {
          let location = this.fakeBookDatabase.indexOf(b);
          this.fakeBookDatabase[location].title = this.newTitle;
          this.fakeBookDatabase[location].author = this.newAuthor;
          this.fakeBookDatabase[location].pages = this.newPages;

        }
      }
    }

    getByTitle(title) {

      this.showTable = true;
      this.itemType="Title";
      this.returnValues = null;
      this.returnValues = new Array<any>();

      for(let b of this.fakeBookDatabase) {
        if (b.title == this.getItem)
        this.returnValues.push(b);
      }
      return this.returnValues;

    }

    getByAuthor(author) {

      this.showTable = true;
      this.itemType="Author";
      this.returnValues = null;
      this.returnValues = new Array<any>();
      
      for(let b of this.fakeBookDatabase) {
        if (b.author == this.getItem)
        this.returnValues.push(b);
      }
      return this.sortByPages(this.returnValues);

    }

    sortByPages(booksToSort :Array<any>) {
      var sortedBooks = booksToSort.sort((a,b) => {
        if (a.pages > b.pages)
          return 1;

        if (a.pages < b.pages)
          return -1;

        return 0;
      })

      return sortedBooks;

    }
}
