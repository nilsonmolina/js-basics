const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  // CREATE THE BROWSER WINDOW
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // LOAD THE INDEX.HTML OF THE APP
  win.loadFile('index.html');

  // // OPEN THE DEVTOOLS
  // win.webContents.openDevTools();

  // DEREFERENCE WINDOW OBJECT WHEN WINDOW IS CLOSED
  win.on('closed', () => { win = null; });
}

// EVENT LISTENERS
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (win === null) createWindow();
});
