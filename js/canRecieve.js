const canMessagesDiv = document.getElementById("canMessages");
const socket = new WebSocket("ws://raspberry-pi-ip-address:8765"); //TODO replace "raspberry-pi-ip-address" with rpi ip

socket.onmessage = (event) => {
    const message = event.data;
    canMessagesDiv.innerHTML += `<p>Received: ${message}</p>`;
};

socket.onclose = (event) => {
    if (event.code === 1000) {
        canMessagesDiv.innerHTML += "<p>Connection closed gracefully.</p>";
    } else {
        canMessagesDiv.innerHTML += "<p>Connection closed with an error.</p>";
    }
};