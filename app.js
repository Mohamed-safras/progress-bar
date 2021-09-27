import people from "./data.js";
const lists = document.querySelector(".lists");

const header = document.querySelector(".header");
window.addEventListener("DOMContentLoaded", () => {
  listItems(people);
  menuBtn();
});

const listItems = (menu) => {
  lists.innerHTML = menu
    .map((item, index) => {
      const { img, name, job, text } = item;
      return `<article class="details" id=${index}>
        <div>
          <img
            class="profile"
            src=${img}
            alt=${name}
          />
          <h4 class="title">${name}</h4>
          <h4 class="job">${job}</h4>
        </div>
        <p class="desc">
          ${text}
        </p>
      </article>`;
    })
    .join("");
};
/*
function btn() {
  let value = ["all"];
  for (let i = 0; i < people.length; i++) {
    if (!value.includes(people[i].job)) {
      value.push(people[i].job);
    }
  }
  return value;
}

console.log(btn());*/

const menuBtn = () => {
  const peoples = people.reduce(
    (value, item) => {
      if (!value.includes(item.job)) {
        value.push(item.job);
      }
      return value;
    },
    ["all"]
  );

  header.innerHTML = peoples
    .sort()
    .map((item) => {
      return `
      <button data-id=${item} class="selectBtn">${item}</button>`;
    })
    .join("");

  const filterBtn = document.querySelectorAll("[data-id]");
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;

      const menuCategory = people.filter((item) => {
        if (item.job.match(category)) {
          return item;
        }
      });

      if (category === "all") {
        return listItems(people);
      } else {
        return listItems(menuCategory);
      }
    });
  });
};
/*
const appendEmoji = function (fixed) {
  return function (dynamic) {
    return fixed + " " + dynamic;
  };
};

console.log(appendEmoji("rain")("tommorrow"));
*/

const appendEmoji = (fixed) => (dynamic) => fixed + " " + dynamic;
const rain = appendEmoji("🌧😅");

console.log(rain("today"));

//console.log(appendEmoji("rain")("tommorrow"));

const questions = [
  {
    title: "do you accept all major credit cards",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sintmodi natus ut voluptate? Nulla deleniti porro illum, dolorem obcaecati fugit!",
  },
  {
    title: "do you support local farmers?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sintmodi natus ut voluptate? Nulla deleniti porro illum, dolorem obcaecati fugit!",
  },
];
const sec = document.querySelector(".questions");
sec.innerHTML = questions
  .map((item, index) => {
    const { title, text } = item;
    return `<article class="question" id=${index}>
    <div class="question-header" >
      <p>${title}</p>
      <button type="button" class="question-btn">
        <span class="plus-icon">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </span>
        <span class="minus-icon"
          ><i class="fa fa-minus" aria-hidden="true"></i
        ></span>
      </button>
    </div>
    <div class="question-text">
      <p>
        ${text}
      </p>
    </div>
  </article>`;
  })
  .join("");

const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget.parentElement.parentElement;
    target.classList.toggle("show-text");
  });
});

const loading = document.querySelector("#loading");

const progressbar = document.querySelector("#progressbar");

let barWidth = 0;

const animation = () => {
  barWidth++;
  progressbar.style.width = `${barWidth}%`;
  setTimeout(() => {
    loading.innerHTML = `${barWidth}% complete`;
  }, 100);
};

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    let interval = setInterval(() => {
      if (barWidth >= 80) {
        loading.style.color = "#fff";
      }
      if (barWidth === 100) {
        clearInterval(interval);
        progressbar.style.borderTopRightRadius = "20px";
        progressbar.style.borderBottomRightRadius = "20px";
      } else {
        animation();
      }
    }, 100);
  }, 1000);
});



