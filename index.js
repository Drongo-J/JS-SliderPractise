// var myimage = document.getElementById("myimg");
// let l = document.getElementById("left");
// let r = document.getElementById("right");

// let index = 1;
// let min = 1;
// let max = 4;
// function left() {
//     if (index > min) {
//         index--;
//     }

//     if (index > max) {
//         r.style.display = "inline-block";
//     }
//     if (index == min) {
//         l.style.display = "none";
//     }
//     else {
//         l.style.display = "inline-block";
//     }

//     myimage.src = `images/${index}.jpg`;
// }

// function right() {
//     if (index < max) {
//         index++;
//     }

//     if (index == max) {
//         r.style.display = "none";
//     }
//     else {
//         r.style.display = "inline-block";
//     }

//     if (index == min) {
//         l.style.display = "none";
//     }
//     else {
//         l.style.display = "inline-block";
//     }

//     if (index > min) {
//         l.style.display = "inline-block";
//     }
//     myimage.src = `images/${index}.jpg`;
// }
// left();

// var changed = false;
// setInterval(() => {
//     if (!changed) {
//         r.style.color = "white";
//         l.style.color = "white";
//     }
//     else {
//         r.style.color = "black";
//         l.style.color = "black";
//     }
//     changed = !changed;
// }, 1000);


// function slider() {
//     right();
//     if (index == max) {
//         index = 0;
//     }
// }

// setInterval(() => {
//     slider();
// }, 1000);
// Get the container and images

// const container = document.getElementById("preview");
// let startX, startY, currentX, currentY;
// let isDragging = false;

// container.addEventListener("touchstart", (e) => {
//   startX = e.touches[0].clientX;
//   startY = e.touches[0].clientY;
//   isDragging = true;
// });

// container.addEventListener("touchmove", (e) => {
//   if (isDragging) {
//     currentX = e.touches[0].clientX;
//     currentY = e.touches[0].clientY;
//     e.preventDefault();
//   }
// });

// container.addEventListener("touchend", (e) => {
//   if (isDragging) {
//     const deltaX = currentX - startX;
//     const deltaY = currentY - startY;
//     if (Math.abs(deltaX) > Math.abs(deltaY)) {
//       // Swipe horizontally
//       if (deltaX > 0) {
//         // Swipe right
//         // Code to move to the previous image
//       } else {
//         // Swipe left
//         // Code to move to the next image
//       }
//     }
//     isDragging = false;
//   }
//   console.log("x");
// });


const elements = document.querySelectorAll('.mypreimg');

elements.forEach(element => {
  element.addEventListener('click', event => {
     index = element.id -1;
  });
});

var myimage = document.getElementById("myimg");
myimage.style.transitionProperty = "margin-left";
myimage.style.transitionDuration = "3s"

// myimage.style.left="-650px";

var index = 1;
var max = 8;
setInterval(() => {
    myimage.style.marginLeft = `-${index * 650}px`;
    index++;
    if (index == max){
        index = 0;
    }
}, 2000);

