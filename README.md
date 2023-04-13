# Odin Library

A simple project for [TheOdinProject](https://www.theodinproject.com/lessons/javascript-library) for the topic of Objects And Object Constructors.

[Live Preview](https://jonichi16.github.io/odin-library/)

When user click the add book button, it will display the book form to fill the title, author, number of pages, and the read status. I create the button so it will not create a book when there's a missing field.

There is also a button to delete a book, this will remove the book in the array of books. I use splice in the array to remove the specific book.

A button to change the read status of the book which is a function on the Book prototype:

```javascript
Book.prototype.changeStatus = function () {
  this.status = !this.status;
};
```
