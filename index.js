function generateIdea(event) {
    event.preventDefault();

    new Typewriter('#book-idea', {
        strings: "We are the ants",
        autoStart: true,
    });
}


let bookGeneratorForm = document.querySelector("#book-idea-form");
bookGeneratorForm.addEventListener("submit", generateIdea);