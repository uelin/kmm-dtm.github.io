// スクロール時にヘッダーを表示・非表示にするコード
let lastScrollTop = 0;
const header = document.querySelector('header');

// ページが読み込まれた直後は必ずヘッダーを表示
header.classList.remove('hide');
header.style.top = '0';

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // ページのトップにいる場合、常にヘッダーを表示
  if (scrollTop === 0) {
    header.classList.remove('hide');
    header.style.top = '0';
  } 
  // 下にスクロールしている場合、ヘッダーを隠す
  else if (scrollTop > lastScrollTop) {
    header.classList.add('hide');
    header.style.top = '-100px'; // ヘッダーを隠す位置
  } 
  // 上にスクロールしている場合、ヘッダーを表示
  else {
    header.classList.remove('hide');
    header.style.top = '0'; // ヘッダーを表示する位置
  }
  
  lastScrollTop = scrollTop;
});

// ランディングページのフェードアウト処理
window.onload = function() {
  const landing = document.querySelector('.landing');
  setTimeout(function() {
    document.querySelector('.landing').classList.add('fade-out');
  }, 1500);

  landing.addEventListener('animationend', function() {
    if (landing.classList.contains('fade-out')) {
      landing.style.display = 'none';  // 完全に非表示にする
    }
  });
};

function toggleMenu() {
    const menubar = document.querySelector('.menu-dropdown');
    if (menubar.style.display === 'block' || menubar.style.display === 'flex') {
      menubar.style.display = 'none';
    } else {
      menubar.style.display = 'flex';
    }
  }