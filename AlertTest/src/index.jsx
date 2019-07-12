import * as React from 'react';

const AlertTest = (props) => {
    const msgProps = JSON.stringify(props);

    return (
        <span>
            {msgProps}
            {props}
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