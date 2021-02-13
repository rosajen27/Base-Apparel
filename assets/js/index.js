document.querySelector("#submit").addEventListener("click", function(event) {
    if (!document.querySelector("#inputEmail").value) {
        event.preventDefault();
        document.querySelector(".error-message").classList.remove("hidden");
    }
});