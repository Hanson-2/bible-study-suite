function showPanel(panelId) {
  document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
  document.getElementById(panelId).classList.remove('hidden');
  loadContent(panelId);
}

async function loadContent(panelId) {
  const panel = document.getElementById(panelId);
  if (['symbols', 'numbers', 'doctrines', 'prophecies'].includes(panelId)) {
    try {
      const res = await fetch(panelId + ".json");
      const data = await res.json();
      let html = "";
      for (const key in data) {
        html += `<h3>${key}</h3><pre>${JSON.stringify(data[key], null, 2)}</pre>`;
      }
      panel.innerHTML = "<h2>" + panelId.charAt(0).toUpperCase() + panelId.slice(1) + "</h2>" + html;
    } catch (err) {
      panel.innerHTML = "<p>Error loading data.</p>";
    }
  }
}