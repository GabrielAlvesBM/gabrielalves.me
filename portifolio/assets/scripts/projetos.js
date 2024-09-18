// Projetos-filter Functions

const filterButton = document.querySelectorAll(".filter");
const projetos = document.querySelectorAll(".tab-content__projeto");

function filterItems(category) {
    projetos.forEach((item) => {
        let projetoCategory = item.getAttribute("data-category").split(' ');

        if (category === 'all' || projetoCategory.includes(category)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
};

filterButton.forEach((item) => {
    item.addEventListener("click", () => {
        filterButton.forEach((itemDelClass) => {
            itemDelClass.classList.remove("active");
        });
        item.classList.add("active");

        let category = item.getAttribute("data-filter");
        filterItems(category);
    });
});

// Projetos Aside Functions

const closeAside = document.querySelector(".close-svg");
const backProject = document.querySelector(".back-project");
const backdrop = document.querySelector(".backdrop");
const sidebarModal = document.querySelector(".sidebar-modal");

const sidebar = {
    title:               document.querySelector("#sidebar__title"),
    shortDescription:    document.querySelector("#sidebar__short-description"),
    image:               document.querySelector("#sidebar__image"),
    longDescription:     document.querySelector("#sidebar__long-description"),
    tecList:             document.querySelector("#sidebar__tec-list"),
    site:                document.querySelector("#sidebar__site"),
    github:              document.querySelector("#sidebar__github"),
    openProject:         document.querySelector("#open-project"),
};

function closeModal() {
    sidebarModal.classList.remove("actived");
    body.classList.remove("none-overflow");
    backdrop.classList.remove("actived");

    const selectedProjeto = document.querySelector(".projeto.selected");
    selectedProjeto.classList.remove("selected");
};

function openModal() {
    sidebarModal.classList.add("actived");
    body.classList.add("none-overflow");
    backdrop.classList.add("actived");
};

function updateSidebar(projeto) {
    const dataAttributes = {
        title:               projeto.getAttribute("data-title"),
        shortDescription:    projeto.getAttribute("data-short-description"),
        image:               projeto.getAttribute("data-image"),
        longDescription:     projeto.getAttribute("data-long-description"),
        tecList:             projeto.getAttribute("data-tec-list").split(','),
        site:                projeto.getAttribute("data-site"),
        github:              projeto.getAttribute("data-github"),
    };

    sidebar.title.textContent = dataAttributes.title;
    sidebar.shortDescription.textContent = dataAttributes.shortDescription;
    sidebar.image.src = dataAttributes.image;
    sidebar.longDescription.textContent = dataAttributes.longDescription;
    sidebar.tecList.textContent = dataAttributes.tecList;
    sidebar.site.href = dataAttributes.site;
    sidebar.site.textContent = dataAttributes.site;
    sidebar.github.href = dataAttributes.github;
    sidebar.github.textContent = dataAttributes.github;
    sidebar.openProject.href = dataAttributes.site;

    sidebar.tecList.innerHTML = '';
    for (let item of dataAttributes.tecList) {
        let li = document.createElement("li");
        li.textContent = item;
        sidebar.tecList.appendChild(li);
    }
};

closeAside.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
backProject.addEventListener("click", (event) => {
    event.preventDefault();
    closeModal();
});

// Abrir o Modal

projetos.forEach((projeto) => {
    projeto.addEventListener("click", () => {
        projeto.classList.add("selected");

        updateSidebar(projeto);
        openModal();
    });
});

