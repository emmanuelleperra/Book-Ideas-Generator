function displayIdea(response) {
    console.log("idea generated"); 
    new Typewriter('#book-idea', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,


    });
}

function generateIdea(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "o4b40fb476b490e54b62bb36tf4a3375";
    let prompt = `User instructions: Give me the name of a book I should like if I liked ${instructionsInput.value}.`;
    let context = "You are a book expert who loves giving advice on what people should read, and you like to share books that are not very known. Make sure to use the requester's instructions. Only answer in the following format: Name of the book by author";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    console.log("Generating idea");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayIdea);


}


let bookGeneratorForm = document.querySelector("#book-idea-form");
bookGeneratorForm.addEventListener("submit", generateIdea);