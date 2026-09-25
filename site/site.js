document.addEventListener('DOMContentLoaded', () => {
  const selected = document.getElementById('show-selected');
  const all = document.getElementById('show-all');
  const extras = document.querySelectorAll('.paper[data-selected="false"]');
  if (!selected || !all) return;
  function setFilter(showAll) {
    selected.setAttribute('aria-pressed', String(!showAll));
    all.setAttribute('aria-pressed', String(showAll));
    extras.forEach(paper => { paper.hidden = !showAll; });
  }
  selected.addEventListener('click', () => setFilter(false));
  all.addEventListener('click', () => setFilter(true));
  setFilter(location.hash === '#all-publications');
});
