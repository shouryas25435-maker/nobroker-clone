function searchProperties() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".property-card");

  cards.forEach(card => {
    const title = card.querySelector("h4").textContent.toLowerCase();
    if (title.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
