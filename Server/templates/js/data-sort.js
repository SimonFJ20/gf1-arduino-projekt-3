/* 
Dictionary setup/example:
    var dict = {"user1":["one","two"],"user2":["three","four","five"]}
    sort(dict, "two")
*/
var dict = {"test":["one","two"],"yeet":["three","four"]}
//just for testing ^^^^^^^^^^
function sort(data, input, type) {
    var collection = []
    for (var a = 0; a < Object.keys(data).length; a++) {
        var user = Object.keys(data)[a]
        for (var b = 0; b < data[user].length; b++) {
            collection.push(data[user][b] + " -@" + user)
        }
    }
    if (input) {
        if (type) 
        {
            if (type == "user") {
                input = input.slice(5)
                collection.sort(function (x, y)
                {
                    xIndex = String(x.match(/-@(.+)/)).match(input) == null ? 
                        256 : String(x.match(/-@(.+)/)).match(input).index
                    yIndex = String(y.match(/-@(.+)/)).match(input) == null ? 
                        256 : String(y.match(/-@(.+)/)).match(input).index
                    return xIndex < yIndex ? -1 : 1
                })
                for (var i = 0; i < collection.length; i++) {
                    if (String(collection[i].match(/-@(.+)/)).match(input) == null) {
                        collection.splice(i)
                    }
                }
            }
        } 
        else 
        {
            input = input.replace(/[-@:]/g,"")

            collection.sort(function (x, y)
            {
                xIndex = String(x.match(/(.+)?-@/)).match(input) == null ? 
                    256 : String(x.match(/(.+)?-@/)).match(input).index
                yIndex = String(y.match(/(.+)?-@/)).match(input) == null ? 
                    256 : String(y.match(/(.+)?-@/)).match(input).index
                return xIndex < yIndex ? -1 : 1
            })
            for (var i = 0; i < collection.length; i++) {
                if (String(collection[i].match(/(.+)?-@/)).match(input) == null) {
                    collection.splice(i)
                }
            }
        }
    }
        
    return collection
}

window.addEventListener("load", function() 
{
    var searchbox = document.getElementById("search")
    var list = document.getElementById("list")

    searchbox.onchange = function() 
    {
        while (list.firstChild && !list.firstChild.remove());
        var filter = searchbox.value;
        var textArray;
        if (filter != "") {
            if (filter.slice(0, 5) == "user:") 
            {
                textArray = sort(dict, filter, "user")
            } 
            else 
            {
                textArray = sort(dict, filter)
            }
        } 
        else 
        {
            textArray = sort(dict, null)
        }
        if (textArray.length > 0) 
        {
            for (var i = 0; i < textArray.length; i++) 
            {
                var obj = document.createElement("dt")
                obj.innerHTML = textArray[i]
                obj.style = "font-family: inherit;"
                list.appendChild(obj)
            }
        }
    }
    searchbox.onchange()
})