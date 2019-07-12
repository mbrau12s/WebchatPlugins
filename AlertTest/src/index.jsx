import * as React from 'react';

const AlertTest = () => {
    alert("I am a plugin!");
}

const alertTest = {
    match: 'alert-test',
    component: AlertTest
}

if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = [];
}

window.cognigyWebchatMessagePlugins.push(alertTest);