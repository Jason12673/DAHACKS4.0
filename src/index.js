const btn = document.createElement('button');
btn.textContent = 'Go to Page';
btn.onclick = function() {
  //按钮变成已完成状态
  btn.textContent = 'Mission Completed! +50XP';
  btn.disabled = true;
  //xp 动画
  const xp = document.createElement('div');
  xp.textContent = '+50XP';
  xp.style.position = 'fixed';
  xp.style.top = '50%';
  xp.style.left = '50%';
  xp.style.transform = 'translate(-50%, -50%)';
  xp.style.fontSize = '2em';
  xp.style.color = 'gold';
  xp.style.background = 'rgba(0,0,0,0.7)';
  xp.style.padding = '20px';
  xp.style.borderRadius = '10px';
  xp.style.zIndex = '9999';
  document.body.appendChild(xp);

  setTimeout(() => xp.remove(), 1500);

    // 可选：播放音效
    // new Audio('fire.mp3').play();
    setTimeout(() => {
      window.location.href = 'target-page.html';
    }, 1500);
};
document.body.appendChild(btn);