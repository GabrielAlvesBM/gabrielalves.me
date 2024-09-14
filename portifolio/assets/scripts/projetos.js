// Projetos-filter Functions

const filterItem = document.querySelectorAll(".filter-item");

filterItem.forEach((item) => {
    item.addEventListener("click", () => {
        filterItem.forEach((itemDelClass) => {
            itemDelClass.classList.remove("active");
        });
        item.classList.toggle("active");
    });
});

// Projetos Aside Functions

const closeAside = document.querySelector(".close-svg");
const backProject = document.querySelector(".back-project");
const backdrop = document.querySelector(".backdrop");
const sidebarModal = document.querySelector(".sidebar-modal");

const projetos = document.querySelectorAll(".projeto");


// Fechar o Modal
function closeModal() {
    sidebarModal.classList.remove("actived");
    body.classList.remove("none-overflow");
    backdrop.classList.remove("actived");
}

function openModal() {
    sidebarModal.classList.add("actived");
    body.classList.add("none-overflow");
    backdrop.classList.add("actived");
}

closeAside.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
backProject.addEventListener("click", (event) => {
    event.preventDefault();
    closeModal();
});

// Abrir o Modal

projetos.forEach((projeto) => {
    projeto.addEventListener("click", openModal);
});

