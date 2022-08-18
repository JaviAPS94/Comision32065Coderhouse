const socket = io.connect();

function render(data) {
    const html = data.map(elem => {
        return (`<div><strong>${elem.author}</strong>:<em>${elem.text}</em></div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
    const mensaje = {
        author: document.getElementById('author').value,
        text: document.getElementById('text').value
    };

    socket.emit('new-message', mensaje);
    return false;
}

socket.on('messages', data => {
    render(data);
});