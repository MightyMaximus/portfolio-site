require('file-loader?name=[name].[ext]!./index.html');
import style from './css/main.scss';
import card from './css/card.scss';
import base from './css/_base.scss'

import faviconAp from './assets/favicon/apple-touch-icon.png';
import favicon32 from './assets/favicon/favicon-32x32.png';
import favicon16 from './assets/favicon/favicon-16x16.png';
import faviconMani from './assets/favicon/site.webmanifest';

import curvedBorder from './assets/graphics/curved-border-flip.svg';
import profilePic from './assets/img/aiyush.jpg';

/* Logos */
import prave from './assets/graphics/prave.svg';
import fitster from './assets/graphics/fitster.svg';
import github from './assets/graphics/github.svg';

const ele = document.getElementById('border');
const border = new Image();
border.src = curvedBorder;
ele.appendChild(border);

const profile = document.getElementById('profileImg');
const pic = new Image();
pic.src = profilePic;
pic.alt = 'Profile Picture';
profile.appendChild(pic);

const praveTop = document.getElementById('prave-top');
const temp = new Image();
temp.src = prave;
temp.alt = 'prave';
temp.width = 96;
praveTop.appendChild(temp);

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
