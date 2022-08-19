//reveal effect
const container = document.getElementById("card-container");
const cards = document.querySelectorAll(".card");
const observeCard = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("card--hidden");
  observer.unobserve(entry.target);
};
const cardObserver = new IntersectionObserver(observeCard, {
  root: null,
  threshold: 0.2,
});
cards.forEach((card) => {
  cardObserver.observe(card);
});

// DIV alternating effect
cards.forEach(function (card, i) {
  if (i % 2 == 1) {
    card.querySelector(".card__intro").classList.add("card__intro-reverse");
    card.querySelector(".card__content").classList.add("card__content-reverse");
  }
});
