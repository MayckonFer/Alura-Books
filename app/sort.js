const btnSortByPrice = document.getElementById("btnOrdenarPorPreco");

btnSortByPrice.addEventListener("click", sortByPrice);

function sortByPrice() {
  let booksSort = books.sort((a, b) => a.preco - b.preco);
  displayBooksOnScreen(booksSort);
}
