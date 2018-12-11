function main() {
   var socket = io();
   var chatDiv = document.getElementById('chat');
   var input = document.getElementById('message');
   var button = document.getElementById('submit');
   var delButton = document.getElementById('delete');

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

socket.on('display message', handleMessage);

function handleDelete(evt){
      var p = document.getElementsByTagName('p');
      var text = p.innerText;
      chatDiv.removeChild(p);
      socket.emit("delete message" , text );
   }

delButton.onclick = handleDelete;

} // main closing bracket

window.onload = main;

