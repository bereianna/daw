var greet = "Hello ";
console.log(greet);

console.log(document);

var colors = [ 'red', 'blue', 'yellow', 'green', 'violet' ]

function greetMe() {
    var inputElement = document.getElementById('username-id');
    console.log(inputElement);
    console.log(inputElement.nodeValue, inputElement.nodeType, inputElement.nodeName);
    var inputElements = document.getElementsByName('username');
    console.log(inputElements);
    inputElements.forEach(function(element, number, parent) {
        console.log(element, number, parent);
    });
    var outputElements = document.getElementsByTagName('h1');
    console.log(outputElements);
    //forEach does not work
    for(var i = 0; i < outputElements.length; i++) {
        console.log(outputElements[i], i);
        outputElements[i].style.color = colors[i];
        outputElements[i].innerHTML = greet + inputElement.value;
        console.log(outputElements[i].nodeValue);
        if(i == 3) {
            var textNode = document.createTextNode("This is a new paragraph.");
            outputElements[i].appendChild(textNode);
        }
    }
    setTimeout(function() {
        console.log('here');
        var parentNode = outputElements[0].parentNode;
        var aux = outputElements[0];
        parentNode.removeChild(outputElements[0])
        console.log(outputElements);
        parentNode.insertBefore(aux, outputElements[2]);
    }, 4000);
    
}