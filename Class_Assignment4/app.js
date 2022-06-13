

var text="my name is ghous, he is teach ghous";



for (var i = 0; i < text.length; i++) {
     if (text.slice(i, i + 5) === "ghous") {
     text = text.slice(0, i) + "fahad" + text.slice(i + 5);
    }
     }


     console.log(text);