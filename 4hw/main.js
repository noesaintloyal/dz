document.addEventListener("mousemove", function(event) {
    let coord = document.getElementById("coord");
    coord.textContent = `Координаты: X: ${event.clientX}, Y: ${event.clientY}`;
});
