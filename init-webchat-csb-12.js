initWebchat('https://endpoint-demo.cognigy.ai/5cbe75a9701bc44dc658184755cfd131de02cd8aac81d4ad488163d333e8f72c')
    .then(cognigyWebchat => {
        window.cognigyWebchat = cognigyWebchat;
    });

const content = document.getElementById('content');
const form = document.createElement('form');
form.id = 'my-form';
const input = document.createElement('input');
input.id = 'my-form-input';
input.type = 'text';
form.appendChild(input);
content.appendChild(form);

input.onclick = (event) => {
    event.preventDefault();
    window.cognigyWebchat.open();
}