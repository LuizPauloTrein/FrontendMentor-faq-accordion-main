const questions = document.querySelectorAll(".question")

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling
        const icon = question.querySelector("img")
        const isOpen = question.getAttribute("aria-expanded") === "true"

        questions.forEach((q) => {
            q.setAttribute("aria-expanded", "false")
            q.nextElementSibling.hidden = "true"
            q.querySelector("img").src = "assets/images/icon-plus.svg"
        })

        if(!isOpen){
            question.setAttribute("aria-expanded", "true")
            answer.hidden = false
            icon.src = "assets/images/icon-minus.svg"
        }
    })
})