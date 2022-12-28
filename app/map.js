function promotion(books) {
  const discount = 0.3;

  booksPromotion = books.map((book) => {
    return {...book, preco: book.preco - (book.preco * discount)};
  });

  return booksPromotion;
}