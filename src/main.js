require('file-loader?name=[name].[ext]!./index.html');
import style from './css/main.scss';
import card from './css/card.scss';
import base from './css/_base.scss'

/* Favicons */
import faviconAp from './assets/favicon/apple-touch-icon.png';
import favicon32 from './assets/favicon/favicon-32x32.png';
import favicon16 from './assets/favicon/favicon-16x16.png';
import faviconMani from './assets/favicon/site.webmanifest';

import curvedBorder from './assets/graphics/curved-border-flip.svg';
import profilePic from './assets/img/aiyush-200.jpg';
import praveScreenshot from './assets/img/screenshot.png';

/* Logos */
import prave from './assets/graphics/prave.svg';
import fitster from './assets/graphics/fitster.svg';
import github from './assets/graphics/github.svg';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const fav1 = document.createElement('link');
fav1.rel = 'apple-touch-icon';
fav1.href = faviconAp;
document.head.appendChild(fav1);
const fav2 = document.createElement('link');
fav2.rel = 'icon';
fav2.type = 'image/png';
fav2.href = favicon16;
document.head.appendChild(fav2);
const fav3 = document.createElement('link');
fav3.rel = 'icon';
fav3.type = 'image/png';
fav3.href = favicon32;
document.head.appendChild(fav3);
const fav4 = document.createElement('link');
fav4.rel = 'manifest';
fav4.href = faviconMani;
document.head.appendChild(fav4);

const ele = document.getElementById('border');
const border = new Image();
border.src = curvedBorder;
border.alt = 'curved border design svg';
ele.appendChild(border);

const profile = document.getElementById('profileImg');
const pic = new Image();
pic.src = profilePic;
pic.alt = 'Profile Picture';
profile.appendChild(pic);

const praveTop = document.getElementById('prave-top');
const fitsterTop = document.getElementById('fitster-top');
const temp = new Image();
const temp2 = new Image();
temp.src = prave;
temp.alt = 'prave';
temp.width = 96;
praveTop.appendChild(temp);
temp2.src = fitster;
temp2.alt = 'fitster';
temp2.width = 96;
fitsterTop.appendChild(temp2);

const miniProjects = [
    [prave, 'prave', document.getElementById('prave-mini')],
    [fitster, 'fitster', document.getElementById('fitster-mini')],
    [github, 'github', document.getElementById('github-mini')]
];
for (let mini of miniProjects) {
    const miniPic = new Image();
    miniPic.src = mini[0];
    miniPic.alt = mini[1];
    miniPic.width = 32;
    mini[2].appendChild(miniPic);
}

const praveSdiv = document.getElementById('prave-screenshot');
const temp3 = new Image();
temp3.src = praveScreenshot;
temp3.alt = 'screenshot of Prave interface';
temp3.width = 192;
praveSdiv.appendChild(temp3);
