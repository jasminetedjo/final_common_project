document.querySelector("#time-button").addEventListener('click', function() {
    const timeOutput = document.querySelector("#time-output");
    timeOutput.textContent = new Date().toLocaleTimeString();
    setInterval(() => {
        timeOutput.textContent = new Date().toLocaleTimeString();
    }, 1000);
});