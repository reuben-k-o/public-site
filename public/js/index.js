//reveal effect
const section = document.querySelectorAll(".wrapper__content");

const observeSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(observeSection, {
  root: null,
  threshold: 0.15,
});
section.forEach((section) => {
  sectionObserver.observe(section);
});

// DIV alternating effect
section.forEach(function (sec, i) {
  if (i % 2 == 1) {
    sec.querySelector(".content__img").classList.add("content__img-reverse");
    sec.querySelector(".content__text").classList.add("content__text-reverse");
  }
});

/* -------------------------------------------------- */
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 80) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 20);
