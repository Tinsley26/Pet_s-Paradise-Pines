// var scene = document.getElementById("scene");
// var parallaxInstance = new Parallax(scene);


const text1 = document.querySelectorAll('.texticon2');
const text2 = document.querySelectorAll('.photo-text2');

text1.forEach((box, index) => {
    box.addEventListener('click', () => {
        // 對應的 text2[index] 切換 .translateY
        if (text2[index]) {
            text2[index].classList.toggle('translateY');
        }
    });
});

const icon2 = document.querySelectorAll('.texticon2');
const icon1 = document.querySelectorAll('.texticon1');

icon2.forEach((box, index) => {
    box.addEventListener('click', () => {
        // 對應的 text2[index] 切換 .translateY
        if (icon1[index]) {
            icon1[index].classList.toggle('opacity');
        }
    });
});

const texticon2 = document.querySelectorAll('.texticon2');

texticon2.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('opacity'); // 切換自身的 translateY 類別
    });
});

