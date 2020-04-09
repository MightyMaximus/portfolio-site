require('file-loader?name=[name].[ext]!./index.html');
import style from './css/main.scss';

import faviconAp from './assets/favicon/apple-touch-icon.png';
import favicon32 from './assets/favicon/favicon-32x32.png';
import favicon16 from './assets/favicon/favicon-16x16.png';
import faviconMani from './assets/favicon/site.webmanifest';

import curvedBorder from './assets/graphics/curved-border-flip.svg';

const ele = document.getElementById('border');
console.log(document.getElementById('border'));
const border = new Image();
border.src = curvedBorder;
ele.appendChild(border);

/*const appName = 'Webpack Demo App';
setTimeout(
    () => alert(`Thanks for using ${appName}`)
    , 500
);*/
