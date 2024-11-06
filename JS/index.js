const backToTopButton = document.querySelector('.back-to-top');

// 監聽滾動事件，當滾動超過一定距離時顯示按鈕
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// 點擊按鈕平滑回頂部，設定自訂的滾動時間
// backToTopButton.addEventListener('click', (e) => {
//     e.preventDefault(); // 防止預設跳轉行為
//     smoothScrollToTop(500); // 使用自定義的滾動函數，500 毫秒回頂部
// });

// function smoothScrollToTop(duration) {
//     const startPosition = window.scrollY;
//     const startTime = performance.now();

//     function scrollAnimation(currentTime) {
//         const elapsedTime = currentTime - startTime;
//         const progress = Math.min(elapsedTime / duration, 1); // 計算進度，最大值為 1
//         const ease = progress * (2 - progress); // 使用 ease-in-out 緩動效果

//         window.scrollTo(0, startPosition * (1 - ease)); // 計算新的滾動位置

//         if (elapsedTime < duration) {
//             requestAnimationFrame(scrollAnimation); // 繼續執行動畫
//         }
//     }

//     requestAnimationFrame(scrollAnimation);
// }