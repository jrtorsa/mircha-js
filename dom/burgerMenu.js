export const burgerMenu = (burger, modal, menuLink) => {
    document.addEventListener("click", (e) => {
        if (e.target.matches(burger) || e.target.matches(`${burger} *`)) {
            document.querySelector(modal).classList.toggle("is-active");
            document.querySelector(burger).classList.toggle("is-active");
        }

        if (e.target.matches(menuLink)) {
            document.querySelector(modal).classList.remove("is-active");
            document.querySelector(burger).classList.remove("is-active");
        }
    });
};