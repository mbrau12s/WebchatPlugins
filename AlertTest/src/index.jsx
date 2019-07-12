import * as React from 'react';

const AlertTest = (props) => {
    const msgProps = JSON.stringify(props);
    alert("I am a plugin!");

    return (
        <span>
            {msgProps}
        </span>
    );
}

const alertTest = {
    match: 'red-text',
    component: RedText
}

if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = [];
}

window.cognigyWebchatMessagePlugins.push(alertTest);