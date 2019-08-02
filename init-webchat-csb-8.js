initWebchat('https://endpoint-demo.cognigy.ai/5cbe75a9701bc44dc658184755cfd131de02cd8aac81d4ad488163d333e8f72c')
    .then(cognigyWebchat => {
        window.cognigyWebchat = cognigyWebchat;
    });

setTimeout(() => {
    window.cognigyWebchat.open();
    document.getElementById('keywordsearch-q').value = "Hallo";
}, 5000);

document.getElementById('keywordsearch').onsubmit = (event) => {
    event.preventDefault();
    window.cognigyWebchat.open();
    alert("Click!");
}
