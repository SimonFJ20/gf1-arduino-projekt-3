//kode der kører når webpagen først er loadet
    //code that runs once the webpage has loaded

window.addEventListener("load", function() 
{
    var display = ["index","request","data"]
    var toolbar = document.getElementById("toolbar")
    var container = document.getElementById("main-container")

    for (var i = 0; i < display.length; i++) {
        var button = document.createElement("button")
        button.className = "toolbar"
        button.style.width = 100/display.length*0.75+"vw"
        const page = display[i]
        button.onclick = function() {
            window.location = page;
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
    var slideshowImages = ["{{request.base_url[:-3] + url_for('static', filename='backdrop.png')}}", "{{request.base_url[:-3] + url_for('static', filename='backdrop2.png')}}"]
    var currentImage = 0
    var currentHeader = 0
    var headerImage0 = document.getElementsByClassName("header image 0")[0]
    var headerImage1 = document.getElementsByClassName("header image 1")[1]
    function swap() {
        if (currentImage < slideshowImages.length - 1) {currentImage++} else {currentImage = 0}
        
        currentHeader = currentHeader == 1 && 0 || 1
        if (currentHeader == 1) 
        {
            headerImage1.style.backgroundImage = 'url(' + slideshowImages[currentImage] + ')';
        }
        else {
            headerImage0.style.backgroundImage = 'url(' + slideshowImages[currentImage] + ')';
        }
        window.camper_tween(headerImage0, "slideshow", 
        [
            {
                property: "opacity",
                start: currentHeader == 1 && 0 || 1,
                end: currentHeader == 0 && 1 || 0,
                unit: "",
                time: .1
            }
        ])
        window.camper_tween(headerImage1, "slideshow", 
        [
            {
                property: "opacity",
                start: currentHeader == 0 && 1 || 0,
                end: currentHeader == 1 && 0 || 1,
                unit: "",
                time: .1
            }
        ]
        )
    }
    setInterval(swap, 20000)
})