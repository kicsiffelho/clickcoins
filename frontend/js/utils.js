export function preventDoubleClick(element) {
     let lastClickTime = 0;
     element.addEventListener('click', (event) => {
         const currentTime = new Date().getTime();
         if (currentTime - lastClickTime < 300) {
             event.stopImmediatePropagation();
             event.preventDefault();
         }
         lastClickTime = currentTime;
     });
 }