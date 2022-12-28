let books = [];
const endPoint = `https://guilhermeonrails.github.io/casadocodigo/livros.json
`;
const elementValueBooksAvailability = document.getElementById(
  "valor_total_livros_disponiveis"
);

searchBooksAPI();

async function searchBooksAPI() {
  const res = await fetch(endPoint);
  books = await res.json();

  books = promotion(books);
  displayBooksOnScreen(books);
}
