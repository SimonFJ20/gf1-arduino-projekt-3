//kode der kører når webpagen først er loadet
    //code that runs once the webpage has loaded

window.onload = function() {
    var display = ["index","request"]
    var toolbar = document.getElementById("toolbar")
    var container = document.getElementById("main-container")

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

    window.camper_tween(container, "containerTween", 
    [
      {
          property: "top",
          start: 100,
          end: 0,
          unit: "vh",
          time: 2,
      },
    ])

    //bg slideshow
    var slideshowImages = ["backdrop.png","backdrop2.png"]
    var currentImage = 0
    var headerImage = document.getElementsByClassName("header image")[0]
    function swap() {
        if (currentImage < slideshowImages.length - 1) {currentImage++} else {currentImage = 0}
        window.camper_tween(headerImage, "slideshow", [
            {
                property: "opacity",
                start: 1,
                end: 0,
                unit: "",
                time: .1
            }
        ])
        setTimeout(function (){
            headerImage.style.backgroundImage = "url('../static/" + slideshowImages[currentImage] + "')"
            window.camper_tween(headerImage, "slideshow", [
            {
                property: "opacity",
                start: 0,
                end: 1,
                unit: "",
                time: .1
            }
        ]
        )}, 150)
    }
    setInterval(swap, 5000)
}