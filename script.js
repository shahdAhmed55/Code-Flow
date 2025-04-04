let btnValues = document.querySelectorAll(".btn-value");
btnValues.forEach((btnValue, index) => {
  btnValue.addEventListener("click", () => {
    console.log(`${btnValue} ${index}`);
    let itemHeader = document.querySelectorAll(".courses-details .itemTitle");
    if (btnValue.getAttribute("name") == itemHeader[index].innerHTML) {
      btnValues.forEach((btnValue) => {
        btnValue.classList.remove("active");
      });
      btnValues[index].classList.add("active");
    }
  });
});


btnValues[0].classList.add("active");

let moreBtns = document.querySelectorAll(".leadMore");
console.log(moreBtns);
moreBtns.forEach((moreBtn, index) => {
  moreBtn.onclick = function () {
    //   console.log(`morebtn ${moreBtn}  ${index}`)
    let moreDEtailsSections = document.querySelectorAll(".course-detail-down");
    if (moreBtn.innerText === "Lead More") {
      moreDEtailsSections[index].style.display = "inline-block";
      moreBtn.innerText = "hide";
      //   console.log(`${moreDEtailsSections[index]} ${index}`);
    } else if (moreBtn.innerText === "hide") {
      moreDEtailsSections[index].style.display = "none";
      moreBtn.innerText = "Lead More";
    }
  };
});

// close item
let items = document.querySelectorAll(".item");
let closeItems = document.querySelectorAll(".item .close-item");
console.log(closeItems);
closeItems.forEach((closeItem, index) => {
  closeItem.onclick = function () {
    items[index].style.display = "none";
    btnValues[index].classList.remove("active");
  };
});

// show track when click in its btn in top courses
// hide all onload
// items.forEach((item, index) => {
//   item.style.display = "none";
// });
let FrontBtn = document.querySelector(".Front-btn");
FrontBtn.onclick = function () {
  items.forEach((item, index) => {
    item.style.display = "none";
  });
  let itemFront = document.querySelector(".courses-details .items .front ");
  itemFront.style.display = "inline-block";
};
let backBtn = document.querySelector(".Back-btn");
backBtn.onclick = function () {
  items.forEach((item, index) => {
    item.style.display = "none";
  });

  let itemBack = document.querySelector(".courses-details .items .back ");
  itemBack.style.display = "inline-block";
};

let uiBtn = document.querySelector(".ui");
uiBtn.onclick = function () {
  items.forEach((item, index) => {
    item.style.display = "none";
  });
  let itemUi = document.querySelector(".courses-details .items .ui ");
  itemUi.style.display = "inline-block";
};

let fullStack = document.querySelector(".full-stack");
fullStack.onclick = function () {
  items.forEach((item, index) => {
    item.style.display = "none";
  });
  let itemFull = document.querySelector(".courses-details .items .full ");
  itemFull.style.display = "inline-block";
};

let programmingItems = {
  data: [
    {
      itemName: "Code Like a Pro: Mastering C++",
      category: "Language",
      price: "Free",
      img: "./CourseThumbnail/cpp-course-thumbnail.jpg",
    },

    {
      itemName: "Full-Stack Web Development with MERN",
      category: "Frameworks",
      price: "Free",
      img: "./CourseThumbnail/mern-course-thumbnail.jpg",
    },

    {
      itemName: "Parallel Programming with C++",
      category: "Language",
      price: "Free",
      img: "./CourseThumbnail/cpp-parallel-course-thumbnail.jpg",
    },

    {
      itemName: "Object-Oriented Programming in Java",
      category: "Language",
      price: "Paid",
      img: "./CourseThumbnail/java-course-thumbnail.jpg",
    },

    {
      itemName: "The complete Angular Guide",
      category: "Frameworks",
      price: "Paid",
      img: "./CourseThumbnail/angular-course-thumbnail.jpg",
    },

    {
      itemName: "JavaScript Mastery",
      category: "Language",
      price: "Free",
      img: "./CourseThumbnail/javascript-mastery-course-thumbnail.jpg",
    },

    {
      itemName: "HTML & CSS Basics",
      category: "Language",
      price: "Free",
      img: "./courseThumbnail/html-css-course-thumbnail.jpg",
    },
    {
      itemName: "Python for Data Science",
      category: "Language",
      price: "Paid",
      img: "./CourseThumbnail/python-course-thumbnail.jpg",
    },

    {
      itemName: "Learn C# from scratch",
      category: "Language",
      price: "Paid",
      img: "./CourseThumbnail/csharp-course-thumbnail.jpg",
    },

    {
      itemName: "C for Beginners: Foundations of Programming",
      category: "Language",
      price: "Free",
      img: "./CourseThumbnail/c-course-thumbnail.jpg",
    },

    {
      itemName: "React & Node.js Full-Stack Masterclass",
      category: "Frameworks",
      price: "Free",
      img: "./CourseThumbnail/react-node-course-thumbnail.jpg",
    },

    {
      itemName: "Modern JavaScript: ES6+ and Beyond",
      category: "Language",
      price: "free",
      img: "./CourseThumbnail/modern-javascript-course-thumbnail.jpg",
    },
    {
      itemName: "Web Application Security: SQL Injection & XSS",
      category: "Database",
      price: "Paid",
      img: "./CourseThumbnail/web-security-course-thumbnail.jpg",
    },

    {
      itemName: "Data Science with Python & Pandas",
      category: "Database",
      price: "Paid",
      img: "./CourseThumbnail/python-pandas-course-thumbnail.jpg",
    },
    {
      itemName: "Advanced CSS Animations and Effects",
      category: "Language",
      price: "Paid",
      img: "./CourseThumbnail/css-animations-course-thumbnail.png",
    },
    {
      itemName: "Node.js API Development",
      category: "Frameworks",
      price: "Paid",
      img: "./CourseThumbnail/nodejs-api-course-thumbnail.png",
    },

    {
      itemName: "UI/UX Design Fundamentals",
      category: "UI/UX",
      price: "Free",
      img: "./CourseThumbnail/uiux-fundamentals-course-thumbnail.jpg",
    },
    {
      itemName: "Advanced User Experience Research",
      category: "UI/UX",
      price: "Paid",
      img: "./CourseThumbnail/ux-research-course-thumbnail.png",
    },
    {
      itemName: "Figma for UI Designers",
      category: "UI/UX",
      price: "Free",
      img: "./CourseThumbnail/figma-course-thumbnail.png",
    },
    {
      itemName: "MEAN Stack Development",
      category: "Frameworks",
      price: "Paid",
      img: "./CourseThumbnail/mean-stack-course-thumbnail.png",
    },
  ],
};
let coursePage = document.querySelector(".courses-page");
console.log(programmingItems.data);
for (i of programmingItems.data) {
  // console.log(i)
  let card = document.createElement("div");
  card.classList.add("card", i.category, i.price);
  let imgcontainer = document.createElement("div");
  imgcontainer.classList.add("img-container");
  // Make image container fill the card
  imgcontainer.style.width = "100%";
  imgcontainer.style.height = "100%";
  let img = document.createElement("img");
  img.setAttribute("src", i.img);
  imgcontainer.appendChild(img);
  card.appendChild(imgcontainer);
  let itemContent = document.createElement("div");
  itemContent.classList.add("item-content");
  let itemTitle = document.createElement("h6");
  itemTitle.classList.add("item-title");
  itemTitle.textContent = i.itemName;
  let price = document.createElement("h6");
  price.classList.add("price");
  price.textContent = i.price;
  itemContent.appendChild(itemTitle);
  itemContent.appendChild(price);
  card.appendChild(itemContent);
  let btn = document.createElement("button");
  btn.classList.add("go-to-course-btn");
  btn.innerText = "Go to course";
  card.appendChild(btn);
  // Add hover effect
  card.addEventListener("mouseenter", function () {
    itemContent.style.transform = "translateY(100%)";
    btn.style.opacity = "1";
  });
  card.addEventListener("mouseleave", function () {
    itemContent.style.transform = "translateY(0%)";
    btn.style.opacity = "0";
  });
  document.querySelector(".down-section .container").appendChild(card);
}
let container = document.createElement("div");
container.className = "container";
let downSection = document.querySelector(".down-section");
// Create filter container
let filterContainer = document.createElement("div");
filterContainer.classList.add("filter-container");
let filterSection = document.createElement("div");
filterSection.className = "filter-section";
// Create price filter section
let priceFilterSection = document.createElement("div");
priceFilterSection.classList.add("price-filter");
let priceHeading = document.createElement("h4");
priceHeading.textContent = "Price";
priceHeading.style.marginBottom = "10px";
priceFilterSection.appendChild(priceHeading);
// Create price filter options
let priceOptions = ["Free", "Paid"];
priceOptions.forEach((price) => {
  let priceOption = document.createElement("div");
  priceOption.style.marginBottom = "5px";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `price-${price.toLowerCase()}`;
  checkbox.value = price;
  checkbox.classList.add("price-filter");
  checkbox.style.marginRight = "8px";
  let label = document.createElement("label");
  label.htmlFor = `price-${price.toLowerCase()}`;
  label.textContent = price;
  priceOption.appendChild(checkbox);
  priceOption.appendChild(label);
  priceFilterSection.appendChild(priceOption);
});
filterSection.appendChild(priceFilterSection);
// Create category filter section
let categoryFilterSection = document.createElement("div");
categoryFilterSection.classList.add("category-filter");
let categoryHeading = document.createElement("h4");
categoryHeading.textContent = "Category";
categoryHeading.style.marginBottom = "10px";
categoryFilterSection.appendChild(categoryHeading);

// Get unique categories from programmingItems
let categories = [
  ...new Set(programmingItems.data.map((item) => item.category)),
];
categories.forEach((category) => {
  let categoryOption = document.createElement("div");
  categoryOption.style.marginBottom = "5px";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `category-${category.toLowerCase()}`;
  checkbox.value = category;
  checkbox.classList.add("category-filter");
  checkbox.style.marginRight = "8px";
  let label = document.createElement("label");
  label.htmlFor = `category-${category.toLowerCase()}`;
  label.textContent = category;
  categoryOption.appendChild(checkbox);
  categoryOption.appendChild(label);
  categoryFilterSection.appendChild(categoryOption);
});
filterSection.appendChild(categoryFilterSection);
let applyFilterBtn = document.createElement("button");
applyFilterBtn.className = "filter-btns";
applyFilterBtn.setAttribute("id", "apply-filter-btn");
applyFilterBtn.textContent = "Apply Filters";
// Add clear filter button
let clearFilterBtn = document.createElement("button");
clearFilterBtn.className = "filter-btns";
clearFilterBtn.setAttribute("id", "clear-filter-btn");
clearFilterBtn.textContent = "Clear Filters";
// Insert filter container directly before the downSection in its parent
downSection.parentNode.insertBefore(filterContainer, downSection);
// Add filter functionality
applyFilterBtn.addEventListener("click", function () {
  let selectedPrices = Array.from(
    document.querySelectorAll(".price-filter:checked")
  ).map((checkbox) => checkbox.value);
  let selectedCategories = Array.from(
    document.querySelectorAll(".category-filter:checked")
  ).map((checkbox) => checkbox.value);
  let allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    let showCard = true;
    // Filter by price if any price filters are selected
    if (selectedPrices.length > 0) {
      let cardPrice = "";
      for (let cls of card.classList) {
        if (cls === "Free" || cls === "Paid" || cls === "free") {
          cardPrice = cls;
          break;
        }
      }
      if (
        !selectedPrices.includes(cardPrice) &&
        !selectedPrices.includes(
          cardPrice.charAt(0).toUpperCase() + cardPrice.slice(1)
        )
      ) {
        showCard = false;
      }
    }
    // Filter by category if any category filters are selected
    if (selectedCategories.length > 0 && showCard) {
      let cardCategory = "";
      for (let cls of card.classList) {
        if (categories.includes(cls)) {
          cardCategory = cls;
          break;
        }
      }
      if (!selectedCategories.includes(cardCategory)) {
        showCard = false;
      }
    }
    // Show or hide card based on filters
    if (showCard) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
clearFilterBtn.addEventListener("click", function () {
  let checkboxes = document.querySelectorAll(".price-filter, .category-filter");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  let allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.style.display = "block";
  });
});

filterContainer.appendChild(container);
container.appendChild(filterSection);
container.appendChild(applyFilterBtn);
container.appendChild(clearFilterBtn);
