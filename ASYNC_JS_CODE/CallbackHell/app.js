//setTimeout(() => {
//    document.body.style.backgroundColor = 'red';
//}, 1000);
//setTimeout(() => {
//    document.body.style.backgroundColor = 'orange';
//}, 2000);

//setTimeout(() => {
//    document.body.style.backgroundColor = 'red';
//    setTimeout(() => {
//        document.body.style.backgroundColor = 'orange';
//        setTimeout(() => {
//            document.body.style.backgroundColor = 'yellow';
//        }, 1000);    
//    }, 1000);
//}, 1000);
 

//const delayedColorChange = (newColor, delay) => {
//    setTimeout(() => {
//        document.body.style.backgroundColor = newColor;
//    }, delay);
//}
//
//delayedColorChange('Olive', 1000);
//delayedColorChange('teal', 2000);

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
            });          
        });
    });    
});
