// Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    //make a request to counter the endpoint.
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            // take some action
        }
        // not done yet
    };
    //Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};