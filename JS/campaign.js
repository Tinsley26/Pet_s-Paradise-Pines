   // 小圆圈的旋转变换
   let circleList = document.querySelectorAll('.little-circle');
   let len = circleList.length;
   let rotateStep = 360/len;
   let halfOfRotateStep = rotateStep/2;
   circleList.forEach(function(item,index){
       let deg = rotateStep*index+halfOfRotateStep;
       item.style.transform="rotate("+deg+"deg)";
       item.style.transformOrigin="5px 295px";
   });
   // 每一个奖品的变换
   let prizeList = document.querySelectorAll('.prize');
   let pLen = prizeList.length;
   let pRotateStep = 360/pLen;
   let halfOfPRotateStep = pRotateStep/2;
   prizeList.forEach(function(item,index){
       item.style.transform="rotate("+(pRotateStep*index)+"deg"+") skewY("+pRotateStep+"deg)";
       item.style.transformOrigin="right bottom";
   });
   // 奖品的内容变换
   let contentList = document.querySelectorAll('.content');
   contentList.forEach(function(item){
       // 反向变换，用于抵消div.prize的变形 这里的translate值，其实可以用三角函数算出来，但是太复杂，我就用肉眼观测取了7px 100px这么个值
       item.style.transform = "skewY(-"+pRotateStep+"deg) rotate(-"+halfOfPRotateStep+"deg) translate(7px, 100px)";
       item.style.transformOrigin = "center center";
   });
   let retry = false;
   // 抽奖按钮的点击事件
   document.querySelector('#btn').onclick=function(){
       if(retry){
           retry=false;
           clear();
           document.querySelector('#btn').innerText="Start";
           return;
       }
       // 计算一个随机的度数，转起来，先转上十圈然后再转一圈内的随机度数
       document.querySelector('#btn').style.cursor="wait";
       let deg1=360*10;
       let deg2 = (Math.floor(Math.random()*8)+1)*45+22.5;
       let deg=deg1+deg2;
       console.log(deg);
       let truntable = document.querySelector('.prize-zone');
       truntable.style.transition="all 10s ease";
       truntable.style.transform="rotate("+deg+"deg)";
   };
   // 监听动画完成事件
   document.querySelector('.prize-zone').addEventListener('transitionend',function(){
       document.querySelector('#btn').style.cursor="pointer";
       retry=true;
       document.querySelector('#btn').innerText="Reset";
   });
   function clear(){
       let truntable = document.querySelector('.prize-zone');
       truntable.style.transition="none";
       truntable.style.transform="none";
   }


//    const ticket1 = document.querySelectorAll('.ticket1');
//    const ticket2 = document.querySelectorAll('.ticket2');

//    ticket1.forEach((box, index) => {
//        box.addEventListener('click', () => {
//         ticket2 [index].classList.toggle('translateY'); 
//         切換對應的 .box2 的 hover 類別
//        });
//    });

const ticket2 = document.querySelectorAll('.ticket2');

ticket2.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('translateY'); // 切換自身的 translateY 類別
    });
});