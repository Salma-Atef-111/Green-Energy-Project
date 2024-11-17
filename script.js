const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

/********************************* */
document.querySelectorAll(".toggle-contant-title").forEach((title) => {
  title.addEventListener("click", () => {
    document
      .querySelectorAll(".toggle-contant-title")
      .forEach((otherTitles) => {
        if (otherTitles !== title) {
          otherTitles.classList.remove("active");
          otherTitles.nextElementSibling.style.display = "none";
          otherTitles.nextElementSibling.nextElementSibling.style.display =
            "none";
        }
      });
    title.classList.toggle("active");
    const caption = title.nextElementSibling;
    const span = caption.nextElementSibling;

    if (title.classList.contains("active")) {
      caption.style.display = "block";
      span.style.display = "block";
    } else {
      caption.style.display = "none";
      span.style.display = "none";
    }
  });
});
/***************************/

window.onload = function () {
  window.scrollTo(0, 0);
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.target.classList.contains("about-us-numbers-title") &&
          !entry.target.classList.contains("counting")
        ) {
          entry.target.classList.add("counting"); // إضافة كلاس "counting" لمنع التكرار

          const target = +entry.target.getAttribute("data-target");
          const text = entry.target.getAttribute("data-text");
          let count = 0;
          const increment = target / 100;

          const updateNum = () => {
            if (count < target) {
              count += increment;
              entry.target.textContent = Math.ceil(count) + text;
              setTimeout(updateNum, 30);
            } else {
              entry.target.textContent = target + text;
            }
          };
          updateNum();
        }
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  document
    .querySelectorAll("section, .about-us-numbers-title")
    .forEach((element) => {
      observer.observe(element);
    });
};

/**************************** */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
