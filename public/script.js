const odinLibrary = [];

function Book(title, author, numOfPages) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
}

odinLibrary.push(new Book('Title', 'Author', '32'));

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const numOfPages = document.querySelector('#pages');
const addButton = document.querySelector('#addButton');

addButton.addEventListener('click', (e) => {
  e.preventDefault();

  const book = new Book(title.value, author.value, numOfPages.value);

  odinLibrary.push(book);
});
