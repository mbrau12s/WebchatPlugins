// initWebchat('https://endpoint-demo.cognigy.ai/5cbe75a9701bc44dc658184755cfd131de02cd8aac81d4ad488163d333e8f72c')
//     .then(cognigyWebchat => {
//         window.cognigyWebchat = cognigyWebchat;
//     });

const cognigyWebchat = initWebchat('https://endpoint-demo.cognigy.ai/5cbe75a9701bc44dc658184755cfd131de02cd8aac81d4ad488163d333e8f72c');
const keywordInput = document.getElementById('keywordsearch-q');
const locationInput = document.getElementById('keywordsearch-locationsearch');

keywordInput.addEventListener('click', () => { 
    console.log("Hi!"); 
});