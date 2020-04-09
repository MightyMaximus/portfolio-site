require('file-loader?name=[name].[ext]!./index.html');
import style from './css/main.scss';

import faviconAp from './assets/favicon/apple-touch-icon.png';
import favicon32 from './assets/favicon/favicon-32x32.png';
import favicon16 from './assets/favicon/favicon-16x16.png';
import faviconMani from './assets/favicon/site.webmanifest';

import curvedBorder from './assets/graphics/curved-border-flip.svg';
import profilePic from './assets/img/aiyush.jpg';

const ele = document.getElementById('border');
const border = new Image();
border.src = curvedBorder;
ele.appendChild(border);

const profile = document.getElementById('profileImg');
const pic = new Image();
pic.src = profilePic;
pic.alt = 'Profile Picture';
profile.appendChild(pic);
