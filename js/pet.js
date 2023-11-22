document.querySelector("#calculate-age-button").addEventListener('click', function() {
    const petAge = document.querySelector("#pet-age-input").value;
    const isDog = document.querySelector("#dog").checked;
    const isCat = document.querySelector("#cat").checked;

    let humanAge;
    if (isDog) {
        humanAge = petAge * 7;
    } else if (isCat) {
        humanAge = petAge * 15;
    }

    const outputText = `Your pet is ${humanAge} human years old.`;
    document.querySelector("#human-age-output").textContent = outputText;
});

