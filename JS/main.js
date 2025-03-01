document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".right-content span:nth-child(5)");
    const loginContainer = document.querySelector(".login-container");
    const closeBtn = document.querySelector(".login-container i"); 

    loginBtn.addEventListener("click", function () {
        loginContainer.classList.add("active");
        document.body.style.overflow = "hidden"; 
    });

    closeBtn.addEventListener("click", function () {
        loginContainer.classList.remove("active");
        document.body.style.overflow = "auto"; 
    });
});
