initWebchat('https://endpoint-demo.cognigy.ai/5cbe75a9701bc44dc658184755cfd131de02cd8aac81d4ad488163d333e8f72c')
    .then(cognigyWebchat => {
        window.cognigyWebchat = cognigyWebchat;
    });

document.getElementById('keywordsearch-q').onclick = (event) => {
    event.preventDefault();
    window.cognigyWebchat.open();
    console.log("Click!");
}


const locationInput = document.getElementById('keywordsearch-locationsearch');
