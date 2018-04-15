function main() {
    var socket = io.connect('https://betachat.herokuapp.com/');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var delButton = document.getElementById("delete");

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;


    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    /*function handleDelete(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("find message", val);
        }
    }
    delButton.onclick = handleDelete;

    function deleteMessage(msg) {
        var p = document.getElementById("message");
        p.innerText = msg;
        for(var i in messages){ 
            messages.splice(i,1);
        }
        chatDiv.removeChild(i);
        input.value = "";
        var p = document.getElementsByTagName("p")[1];
        var parent = p.parentNode;
        parent.removeChild(p);
    }*/
    socket.on('display message', handleMessage);
    //socket.on('delete message', deleteMessage);

} // main closing bracket

window.onload = main;





