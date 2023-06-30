const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    // document.body.classList.toggle("dark");
    const isDark = document.body.classList.toggle("dark");
    // Persist this locally //
    localStorage.setItem("dark", isDark);
})
window.addEventListener("load", () => {
    const isDark = localStorage.getItem("dark");
    if (isDark === "true") {
        document.body.classList.add("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    // if(document.body.classList.contains("dark"))
    // {
    //     dayNight.querySelector("i").classList.add("fa-sun");
    // }
    // else
    // {
    //     dayNight.querySelector("i").classList.add("fa-moon");
    // }
})