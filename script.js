// Dostępne kolory w rozwijanym menu (dropdown)
const availableColors = [
    { name: "Yellow", value: "#ffa500" },
    { name: "Gold", value: "#fbc02d" },
    { name: "Green", value: "#008000" },
    { name: "Blue", value: "#0000ff" },
    {name: "LightBlue", value: "#6CB4EE"},
    { name: "Purple", value: "#4b0082" },
    { name: "Pink", value: "#ee82ee" },
    { name: "Red", value: "#ff0000" },
    {name: "Silver", value: "#C0C0C0"},
    {name: "Black", value: "#000000"},
    { name: "Transparent", value: "transparent" },
    // Dodaj więcej kolorów, jeśli potrzebujesz
  ];
  
document.addEventListener("DOMContentLoaded", function () {
            const journalDiv = document.getElementById("journal");
            const mainDiv = document.getElementById("main");
            const addButton = document.createElement("button");
            addButton.innerHTML = "+";
            addButton.classList.add("adder");
            mainDiv.appendChild(addButton);
    

            addButton.addEventListener("click", function () {
                addButton.disabled = true; // Disable the button when clicked
                displayEntryForm();
            });


            function closeEntryForm() {
                const overlay = document.getElementById("overlay");
                overlay.remove();

                // Re-enable the "Add Entry" button
                addButton.disabled = false;
            }

            function displayEntryForm() {
                const overlay = document.createElement("div");
                overlay.setAttribute("id", "overlay");

                const form = document.createElement("form");
                form.setAttribute("id", "entry-form");
                

        // Create the Currency input
        const currencyLabel = document.createElement("label");
        currencyLabel.textContent = "Currency:";
        const currencyInput = document.createElement("input");
        currencyInput.setAttribute("type", "text");
        currencyLabel.appendChild(currencyInput);
        form.appendChild(currencyLabel);

        // Create the Win/Loss input (text input)
    const winLossLabel = document.createElement("label");
    winLossLabel.textContent = "Win/Loss:";
    const winLossInput = document.createElement("input");
    winLossInput.setAttribute("type", "text"); // Use a text input instead of a dropdown
    winLossInput.setAttribute("required", true); // Add the required attribute
    winLossLabel.appendChild(winLossInput);
    form.appendChild(winLossLabel);

        // Create the Long/Short input (text input)
    const longShortLabel = document.createElement("label");
    longShortLabel.textContent = "Long/Short:";
    const longShortInput = document.createElement("input");
    longShortInput.setAttribute("type", "text"); // Use a text input instead of a dropdown
    longShortInput.setAttribute("required", true); // Add the required attribute
    longShortLabel.appendChild(longShortInput);
    form.appendChild(longShortLabel);

        // Create the Setup input (text input)
    const setupLabel = document.createElement("label");
    setupLabel.textContent = "Setup:";
    const setupInput = document.createElement("input");
    setupInput.setAttribute("type", "text"); // Use a text input instead of a dropdown
    setupInput.setAttribute("required", true); // Add the required attribute
    setupLabel.appendChild(setupInput);
    form.appendChild(setupLabel);
    // Create the News input
    const newsLabel = document.createElement("label");
    newsLabel.textContent = "News:";
    const newsInput = document.createElement("input");
    newsInput.setAttribute("type", "text");
    newsLabel.appendChild(newsInput);
    form.appendChild(newsLabel);

    // Create the RR input
    const rrLabel = document.createElement("label");
    rrLabel.textContent = "Risk Reward:";
    const rrInput = document.createElement("input");
    rrInput.setAttribute("type", "text");
    rrLabel.appendChild(rrInput);
    form.appendChild(rrLabel);
   
        // Create the Date input
        const dateLabel = document.createElement("label");
        dateLabel.textContent = "Date:";
        const dateInput = document.createElement("input");
        dateInput.setAttribute("type", "date");
        dateLabel.appendChild(dateInput);
        form.appendChild(dateLabel);

         // Create the Time input
         const timeLabel = document.createElement("label");
         timeLabel.textContent = "Time:";
         const timeInput = document.createElement("input");
         timeInput.setAttribute("type", "time");
         timeLabel.appendChild(timeInput);
         form.appendChild(timeLabel);

        // Create the Entry Price input
        const entryPriceLabel = document.createElement("label");
        entryPriceLabel.textContent = "Entry Price:";
        const entryPriceInput = document.createElement("input");
        entryPriceInput.setAttribute("type", "text");
        entryPriceLabel.appendChild(entryPriceInput);
        form.appendChild(entryPriceLabel);

        // Create the Exit Price input
        const exitPriceLabel = document.createElement("label");
        exitPriceLabel.textContent = "Exit Price:";
        const exitPriceInput = document.createElement("input");
        exitPriceInput.setAttribute("type", "text");
        exitPriceLabel.appendChild(exitPriceInput);
        form.appendChild(exitPriceLabel);

        // Create the Description input
        const descriptionLabel = document.createElement("label");
        descriptionLabel.textContent = "Description:";
        const descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("type", "text");
        descriptionLabel.appendChild(descriptionInput);
        form.appendChild(descriptionLabel);

        // Create the Screenshot input
        const screenshotLabel = document.createElement("label");
        screenshotLabel.textContent = "Screenshot:";
        const screenshotInput = document.createElement("input");
        screenshotInput.setAttribute("type", "text");
        screenshotLabel.appendChild(screenshotInput);
        form.appendChild(screenshotLabel);

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Entry";
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        form.appendChild(saveButton);
        form.appendChild(cancelButton);

        saveButton.addEventListener("click", function () {
            closeEntryForm();
            saveEntry(form);
          
        });

        cancelButton.addEventListener("click", function () {
            closeEntryForm(); // Call this function to close the entry form
        });

        overlay.appendChild(form);
        mainDiv.appendChild(overlay);
    }

    function saveEntry(form) {
        const entry = {};
    const inputs = form.getElementsByTagName("input");
    const selects = form.getElementsByTagName("select");

        for (let i = 0; i < inputs.length; i++) {
            const label = inputs[i].parentNode.textContent.replace(":", "");
            const value = inputs[i].value;
            entry[label] = value;
            inputs[i].value = "";
        }

        for (let i = 0; i < selects.length; i++) {
            const label = selects[i].parentNode.textContent.replace(":", "");
            const value = selects[i].value;
            entry[label] = value;
            selects[i].value = selects[i].options[0].value; // Reset the dropdown to the first option
        }

        // Save the entry to the JSON file (pseudo-database)
        saveEntryToDatabase(entry);

        // Refresh the journal to display the new entry
        journalDiv.innerHTML = "";
    addButton = document.createElement("button");
    addButton.textContent = "Add Trade";
    journalDiv.appendChild(addButton);

    addButton.addEventListener("click", function () {
        addButton.disabled = true; // Disable the button when clicked
        displayEntryForm();
        closeEntryForm(); // Close the entry form overlay
    });

    }

    function saveEntryToDatabase(entry) {
        // In a real application, you would use a server and a real database
        // For this example, we'll use the browser's local storage as a pseudo-database
        let entries = JSON.parse(localStorage.getItem("entries")) || [];
        entries.push(entry);
        localStorage.setItem("entries", JSON.stringify(entries));
    }

    // ...

    function displayEntries() {
        const entries = JSON.parse(localStorage.getItem("entries")) || [];
      
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            const entryDiv = document.createElement("div");
            entryDiv.classList.add("entry");
    
            const entryDetails = document.createElement("div");
            entryDetails.classList.add("entry-details");
    
            for (const key in entry) {
                const labelDiv = document.createElement("div");
                labelDiv.classList.add("value");
      
            // Create a span to display the value
            const valueSpan = document.createElement("span");
            valueSpan.textContent = entry[key];
      
            // Retrieve and apply the background color from localStorage
            const storedColor = localStorage.getItem(`color-${i}-${key}`);
            if (storedColor) {
              valueSpan.style.backgroundColor = storedColor;
              entryDetails.appendChild(labelDiv)
            }
            
      
            labelDiv.appendChild(valueSpan);
      
            // Create a dropdown (select) to choose the text color background
            const colorDropdown = document.createElement("select");
            colorDropdown.classList.add("color")
            colorDropdown.innerHTML = availableColors
            .map((color) => `<option value="${color.value}" style="background-color: ${color.value};"></option>`)
            .join("");
      
            colorDropdown.addEventListener("change", function () {
              const selectedColor = colorDropdown.value;
              valueSpan.style.backgroundColor = selectedColor;
              // Store the background color in localStorage
              localStorage.setItem(`color-${i}-${key}`, selectedColor);
            });
      
            labelDiv.appendChild(colorDropdown);
            entryDetails.appendChild(labelDiv);
          }
      
          // Add a delete button for each trade entry
          const deleteButton = document.createElement("button");
          deleteButton.innerHTML = '<i class="gg-trash"></i>';
          deleteButton.classList.add("deleter");
          deleteButton.addEventListener("click", function () {
            deleteEntry(i);
          });
          entryDiv.appendChild(deleteButton);
      
          entryDiv.appendChild(entryDetails);
          journalDiv.appendChild(entryDiv);
        }
      }
    

function deleteEntry(index) {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.splice(index, 1);
    localStorage.setItem("entries", JSON.stringify(entries));

    // Refresh the journal to update the display
    journalDiv.innerHTML = "";
    displayEntries();
}

// ...


    // Display existing entries when the page loads
    displayEntries();
});