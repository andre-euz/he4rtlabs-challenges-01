const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('.tab-content')
const header = document.querySelector('.header')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContent.forEach(tabContent => {
            tabContent.classList.remove("active")
            tabContent.classList.add("hidden")
        })
        header.style.height = "18em"
        target.classList.add("active")
        target.classList.remove("hidden")
    })
})


