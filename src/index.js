const btn = document.createElement('button');
btn.textContent = 'Go to Page';
btn.onclick = function() {
  window.location.href = 'target-page.html';
};
document.body.appendChild(btn);