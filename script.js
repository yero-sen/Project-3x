function makeGroups() {
    // Get the list of names and the number of groups from the input fields
    let names = document.getElementById("names").value;
    let numGroups = document.getElementById("numGroups").value;

    // Split the names into an array
    names = names.split(",");

    // Shuffle the array of names
    shuffle(names);

    // Divide the names into the desired number of groups
    let groups = [];
    for (let i = 0; i < numGroups; i++) {
        groups.push([]);
    }
    for (let i = 0; i < names.length; i++) {
        groups[i % numGroups].push(names[i]);
    }

    // Display the resulting groups
    let resultHTML = "";
    for (let i = 0; i < groups.length; i++) {
        resultHTML += "<p>Group " + (i + 1) + ": " + groups[i].join(", ") + "</p>";
    }
    document.getElementById("result").innerHTML = resultHTML;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
