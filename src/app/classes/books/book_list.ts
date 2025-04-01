import { Book } from './book';

export class BookList {
  books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  splitBooksByDueDate(currentDate: Date) {
    const overdue: Book[] = [];
    const onTime: Book[] = [];

    this.books.forEach((book) => {
      if (book.isOverdue(currentDate)) {
        overdue.push(book);
      } else {
        onTime.push(book);
      }
    });

    return { overdue, onTime };
  }
}
