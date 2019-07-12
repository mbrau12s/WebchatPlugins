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
    match: 'alert-test',
    component: AlertTest
}

if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = [];
}

window.cognigyWebchatMessagePlugins.push(alertTest);