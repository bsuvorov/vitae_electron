const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;


function createBrowserWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadURL(`file://${ __dirname}/auth.html`);
}

let button = document.getElementById('authPageBtn');
button.addEventListener('click', () => {
    createBrowserWindow();
});