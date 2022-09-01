class Modal {
    static openModal(){
        let forgetPassword = document.querySelector("#modal")
        let modal = document.querySelector(".modal")

        forgetPassword.addEventListener("click", () => {
            modal.classList.toggle("hidden")
        })
    }

    static closeModal(){
        let modalBtn = document.getElementById("modalBtn")
        let modal = document.querySelector(".modal")
        modalBtn.addEventListener("click", event => {
            event.preventDefault()
            modal.classList.toggle("hidden")
    })
    }
}
Modal.openModal()
Modal.closeModal()