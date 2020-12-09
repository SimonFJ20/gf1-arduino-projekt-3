//kode der kører når webpagen først er loadet
    //code that runs once the webpage has loaded

window.onload = function() {
    var display = ["index","request"]
    var toolbar = document.getElementById("toolbar")

    for (var i = 0; i < display.length; i++) {
        var button = document.createElement("button")
        button.className = "toolbar"
        button.style.width = 100/display.length*0.75+"vw"
        const temp = display[i]
        button.onclick = function() {
            window.location = temp + ".html"
        }
        button.innerHTML = display[i].toUpperCase()
        toolbar.appendChild(button)
    }
    toolbar.style.height = 0
    window.camper_tween(toolbar, "toolbarLoad", 
    [
        {
            property: "height",
            start: 0,
            end: 6,
            unit: "vh",
            time: 0.5,
        },
    ])
}