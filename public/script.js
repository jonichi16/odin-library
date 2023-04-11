const odinLibrary = [];

function Book(title, author, numOfPages) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
}

odinLibrary.push(new Book('The Alchemist', 'Paulo Coelho', '167'));
odinLibrary.push(new Book('The Great Gatsby', 'F. Scott Fitzgerald', '184'));

const titleField = document.querySelector('#title');
const authorField = document.querySelector('#author');
const numOfPagesField = document.querySelector('#pages');
const addButton = document.querySelector('#add-button');
const booksList = document.querySelector('#books-list');
const addNewBookButton = document.querySelector('#add-new-book-button');
const bookForm = document.querySelector('#book-form');

const createBookCard = (book) => {
  const card = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('h4');
  const bookPages = document.createElement('p');

  card.classList.add('card');
  bookTitle.classList.add('bookTitle');
  bookAuthor.classList.add('bookAuthor');
  bookPages.classList.add('bookPages');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = `Number of pages: ${book.numOfPages}`;

  card.append(bookTitle, bookAuthor, bookPages);

  booksList.appendChild(card);
};

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const book = new Book(
    titleField.value,
    authorField.value,
    numOfPagesField.value
  );

  if (titleField.value && authorField.value && numOfPagesField.value) {
    odinLibrary.push(book);
  } else {
    return;
  }

  titleField.value = '';
  authorField.value = '';
  numOfPagesField.value = '';

  createBookCard(book);
  bookForm.classList.add('hide');
});

addNewBookButton.addEventListener('click', (e) => {
  e.preventDefault();

  bookForm.classList.remove('hide');
});

odinLibrary.forEach((book) => {
  createBookCard(book);
});
