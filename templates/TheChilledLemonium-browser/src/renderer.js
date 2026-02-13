const urlInput = document.getElementById('urlInput');
const goBtn = document.getElementById('goBtn');
const browserFrame = document.getElementById('browserFrame');

async function navigate() {
  const normalized = await window.browserApi.normalizeUrl(urlInput.value);
  urlInput.value = normalized;
  browserFrame.src = normalized;
}

goBtn.addEventListener('click', navigate);
urlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    navigate();
  }
});
