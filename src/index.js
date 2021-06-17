import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import svgText from './components/HeroSvgText.js';
import mainObserver from './components/Observer.js';
import checkTheme from './components/CheckTheme.js';


ReactDOM.render(<App />, document.getElementById('root'));

mainObserver();
svgText();
checkTheme();
