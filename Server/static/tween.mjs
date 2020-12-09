var intervalIds = []
var animsFromId = []

function animate(start, end, alpha) {
    alpha = Math.sin(alpha*Math.PI*0.5)
    return (1-alpha)*start+alpha*end
}

function interpolate(obj, id, settings) {
    animsFromId[id] += 1/60

    var property = settings.property || "invalidproperty"
    var start = settings.start || 0
    var end = settings.end || 1
    var unit = settings.unit || ""
    var time = settings.time || 1
    if (animsFromId[id] < time) {
        obj.style[property] = animate(start, end, animsFromId[id]/time) + unit
    }
    else 
    {
        obj.style[property] = property + unit
        clearInterval(intervalIds[id])
        intervalIds[id] = null
        animsFromId[id] = null    
    }
}

tween = function(obj, originalId, settings) {
    if (typeof(originalId) == "array") {
        return error("Tween lacking identifier")
    }
    for (var i = 0; i < settings.length; i++) {
        var id = originalId + "_" + i
        if (animsFromId[id]) {
            id += new Date().getTime()
        } else {
            animsFromId[id] = 0
        }
        intervalIds[id] = setInterval(
            interpolate, 1000/60, 
            obj, id, settings[i]
        )
    }
}

window.camper_tween = tween