require('file-loader?name=[name].[ext]!./index.html');
import style from './css/main.css';
const appName = 'Webpack Demo App';
setTimeout(
    () => alert(`Thanks for using ${appName}`)
    , 500
);
