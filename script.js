function submitForm() {
            // Get the input value
            var userInput = document.getElementById("userInput").value;

            // Create a new Blob object containing the form data
            var formData = new Blob([userInput], { type: "text/plain" });

            // Create a new FormData object
            var formDataObject = new FormData();
            formDataObject.append("userInput", formData);

            // Send the form data to a local file
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "data.txt", true);
            xhr.send(formDataObject);
}
