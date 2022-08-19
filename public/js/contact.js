let contact = document.querySelector(".contact__us--link");
let form = document.querySelector(".form__container");
let img = document.querySelector(".img__container");
let sectionsToReveal = document.querySelectorAll(".section-1");

contact.addEventListener("click", function (e) {
  e.preventDefault();
  form.scrollIntoView({ behavior: "smooth" });
});

// event propagation
let sectionToObserve = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");

  observer.unobserve(entry.target);
};

let sectionOptions = {
  root: null,
  threshold: 0.15,
  //rootMargin: '200px'
};

const sectionObserver = new IntersectionObserver(
  sectionToObserve,
  sectionOptions
);

sectionsToReveal.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});
