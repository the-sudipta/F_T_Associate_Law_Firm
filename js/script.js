// Function to load text from a given file and insert it into a given element
function loadText(filePath, elementId, errorMessage) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            let element = document.getElementById(elementId);
            if (element) {
                element.innerText = data;
            } else {
                console.error(`Element with ID '${elementId}' not found.`);
            }
        })
        .catch(error => console.error(errorMessage, error));
}

// Ensure that functions are available globally
window.loadText = loadText;

// Function to load employee names and positions from a file and insert them into HTML elements
function loadEmployees(filePath, nameElementId, positionElementId, employeeIndex, errorMessage) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            let nameElement = document.getElementById(nameElementId);
            let positionElement = document.getElementById(positionElementId);

            if (!nameElement || !positionElement) {
                console.error(`Element with ID '${nameElementId}' or '${positionElementId}' not found.`);
                return;
            }

            // Split employees by ", " and create an array of objects
            let employees = data.split(", ").map(item => {
                let [name, position] = item.split("-");
                return { name: name.trim(), position: position.trim() };
            });

            // Assign the correct employee based on the provided index
            if (employeeIndex >= 0 && employeeIndex < employees.length) {
                nameElement.innerText = employees[employeeIndex].name;
                positionElement.innerText = employees[employeeIndex].position;
            } else {
                console.error(`Invalid employee index ${employeeIndex}.`);
            }
        })
        .catch(error => console.error(errorMessage, error));
}

// Ensure function is globally available
window.loadEmployees = loadEmployees;

// Function to load core values from a text file and update the given HTML elements
function loadCoreValues(filePath, titleElementId, descriptionElementId, index, errorMessage) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            let titleElement = document.getElementById(titleElementId);
            let descriptionElement = document.getElementById(descriptionElementId);

            if (!titleElement || !descriptionElement) {
                console.error(`Element with ID '${titleElementId}' or '${descriptionElementId}' not found.`);
                return;
            }

            // Normalize line breaks and remove excess whitespace
            let values = data.trim().replace(/\r\n/g, "\n").split("\n\n");

            if (index >= 0 && index < values.length) {
                let parts = values[index].split("\n").map(line => line.trim()).filter(line => line !== "");
                if (parts.length >= 2) {
                    titleElement.innerText = parts[0]; // Title
                    descriptionElement.innerText = parts.slice(1).join(" "); // Description (joining remaining lines)
                } else {
                    console.error(`Invalid format at index ${index}.`);
                }
            } else {
                console.error(`Index '${index}' is out of range.`);
            }
        })
        .catch(error => console.error(errorMessage, error));
}

// Ensure function is globally available
window.loadCoreValues = loadCoreValues;


// Function to load Practice Areas from a text file and update the given HTML elements
function loadPracticeAreas(filePath, titleElementId, descriptionElementId, index, errorMessage) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            let titleElement = document.getElementById(titleElementId);
            let descriptionElement = document.getElementById(descriptionElementId);

            if (!titleElement || !descriptionElement) {
                console.error(`Element with ID '${titleElementId}' or '${descriptionElementId}' not found.`);
                return;
            }

            // Normalize line breaks and remove excess whitespace
            let values = data.trim().replace(/\r\n/g, "\n").split("\n\n");

            if (index >= 0 && index < values.length) {
                let parts = values[index].split("\n").map(line => line.trim()).filter(line => line !== "");
                if (parts.length >= 2) {
                    titleElement.innerText = parts[0]; // Title
                    descriptionElement.innerText = parts.slice(1).join(" "); // Description (joining remaining lines)
                } else {
                    console.error(`Invalid format at index ${index}.`);
                }
            } else {
                console.error(`Index '${index}' is out of range.`);
            }
        })
        .catch(error => console.error(errorMessage, error));
}

// Ensure function is globally available
window.loadPracticeAreas = loadPracticeAreas;
