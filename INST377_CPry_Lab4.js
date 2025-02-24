document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("alertButton").addEventListener("click", () => {
        let name = document.getElementById("name").value;
        if(name.trim() !== ""){
            alert(`Hi ${name}!`);
        } 

        else{
            alert("Please enter a name.");
        }
        
    });


    const colorButton = document.getElementById("colorButton");
    const currentColor = localStorage.getItem("bgColor") || "white";
    document.body.style.backgroundColor = currentColor;

    colorButton.addEventListener("click", () => {
        let newColor = document.body.style.backgroundColor === "cyan" ? "maroon" : "cyan";
        document.body.style.backgroundColor = newColor;
        localStorage.setItem("bgColor", newColor);

    });











    document.getElementById("validateButton").addEventListener("click", () => {
        let text = document.getElementById("textInput").value;
        let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(validation.test(text)){
            alert("Text contains special characters!");
        } 
        
        else{
            alert("Text is valid.");
        }

    });

    




    document.getElementById("addTextButton").addEventListener("click", () => {
        let heading = document.getElementById("main-heading");
        let textToAdd = document.getElementById("textInput").value.trim();

        if(textToAdd !== ""){
            heading.textContent += " " + textToAdd;
        } 
        
        else{
            alert("Please enter text in the Text Tester box before adding.");
        }

    });
});
