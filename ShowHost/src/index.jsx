import * as React from 'react';

const ShowHost = () => {
    host = window.location.host;

    return (
        <span>
            {host}
        </span>    
    )
}

const showHost = {
    match: 'show-host',
    component: ShowHost
}

if (!window.cognigyWebchatMessagePlugins) {
    window.cognigyWebchatMessagePlugins = [];
}

window.cognigyWebchatMessagePlugins.push(showHost);