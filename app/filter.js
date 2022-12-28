const buttonsFilter = document.querySelectorAll(".btn");

buttonsFilter.forEach((btn) => btn.addEventListener("click", filterBooks));

function filterBooks() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;

  const filterCategory = books.filter((book) => book.categoria === category);
  const filterAvailability = books.filter((book) => book.quantidade > 0);

  let booksfiltereds =
    category === "disponivel" ? filterAvailability : filterCategory;

  displayBooksOnScreen(booksfiltereds);

  if (category === "disponivel") {
    const valueTotal = calculatValueTotalBooksAvailability(booksfiltereds);

    displayValueBooksAvailabilityScreen(valueTotal);
  } else {
    elementValueBooksAvailability.innerHTML = "";
  }
}

function filteredAvailability() {}

function displayValueBooksAvailabilityScreen(valueTotal) {
  elementValueBooksAvailability.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valueTotal}</span></p>
    </div>
  `;
}
