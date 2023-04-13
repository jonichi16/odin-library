const odinLibrary = [];

function Book(title, author, numOfPages, status) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.status = status;
}

odinLibrary.push(new Book('The Alchemist', 'Paulo Coelho', '167', true));
odinLibrary.push(
  new Book('The Great Gatsby', 'F. Scott Fitzgerald', '184', false)
);

const bookForm = document.querySelector('#book-form');
const titleField = document.querySelector('#title');
const authorField = document.querySelector('#author');
const numOfPagesField = document.querySelector('#pages');
const statusField = document.querySelector('#status');
const addButton = document.querySelector('#add-button');
const booksList = document.querySelector('#books-list');
const addNewBookButton = document.querySelector('#add-new-book-button');

const createBookCard = (book) => {
  const card = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('h4');
  const bookPages = document.createElement('p');
  const bookStatus = document.createElement('p');
  const bookDeleteButton = document.createElement('button');

  card.id = `card-${odinLibrary.indexOf(book)}`;
  card.classList.add('card');
  bookTitle.classList.add('book-title');
  bookAuthor.classList.add('book-author');
  bookPages.classList.add('book-pages');
  bookStatus.classList.add('book-status');
  bookDeleteButton.classList.add('book-delete-btn');

  bookDeleteButton.setAttribute('data-index', odinLibrary.indexOf(book));

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = `Number of pages: ${book.numOfPages}`;
  bookStatus.textContent = book.status ? 'Status: Read' : 'Status: Not Read';
  bookDeleteButton.textContent = 'Delete';

  card.append(bookTitle, bookAuthor, bookPages, bookStatus, bookDeleteButton);

  bookDeleteButton.setAttribute('data-index', odinLibrary.indexOf(book));

  bookDeleteButton.addEventListener('click', (e) => {
    e.preventDefault();

    const index = bookDeleteButton.getAttribute('data-index');
    const cardToRemove = document.querySelector(`#card-${index}`);

    odinLibrary.splice(index, 1);
    cardToRemove.remove();
  });

  return card;
};

const clearField = () => {
  titleField.value = '';
  authorField.value = '';
  numOfPagesField.value = '';
  statusField.checked = false;
};

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const book = new Book(
    titleField.value,
    authorField.value,
    numOfPagesField.value,
    statusField.checked
  );

  if (titleField.value && authorField.value && numOfPagesField.value) {
    odinLibrary.push(book);
  } else {
    return;
  }

  clearField();

  booksList.appendChild(createBookCard(book));
  bookForm.classList.add('hide');
});

// * To show and hide bookForm
addNewBookButton.addEventListener('click', (e) => {
  e.preventDefault();

  bookForm.classList.toggle('hide');

  clearField();
});

// * To close bookForm when clicked outside form
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('show-form')) {
    if (!bookForm.contains(e.target)) {
      bookForm.classList.add('hide');
    }
  }
});

const displayBooks = () => {
  odinLibrary.forEach((book) => {
    booksList.appendChild(createBookCard(book));
  });
};

displayBooks();
