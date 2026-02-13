const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('browserApi', {
  normalizeUrl: (rawUrl) => ipcRenderer.invoke('browser:normalize-url', rawUrl)
});
