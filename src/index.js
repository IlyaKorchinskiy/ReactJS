import React from 'react';
import ReactDom from 'react-dom';

const element = <h1 className="react-hello">
    Hello! React JSX works!
</h1>;


ReactDom.render(
    element,
    document.getElementById('root')
);



