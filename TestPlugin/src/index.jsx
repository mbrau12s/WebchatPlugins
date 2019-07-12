import * as React from 'react';

const RedText = (props) => {
    const msgProps = JSON.stringify(props);

    return (
        <span>
            {msgProps}
        </span>
    );
}

const redTextPlugin = {
    match: 'red-text',
    component: RedText
}

if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = [];
}

window.cognigyWebchatMessagePlugins.push(redTextPlugin);