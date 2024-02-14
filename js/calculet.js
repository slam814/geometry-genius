document.getElementById('btn-triangle').addEventListener('click', function(){
   
    const basInputFildElement = document.getElementById('bas-fild');
    const basInputString = basInputFildElement.value;
    const basInputNumber = parseFloat(basInputString);

    const hightInputFildElement = document.getElementById('hight-fild');
    const hightInputString = hightInputFildElement.value;
    const hightInputNumber = parseFloat(hightInputString);
if(isNaN(basInputNumber) || isNaN(hightInputNumber)){
    alert('Please Input Valid number');
    return
}
    const tringleAria = 0.5 * basInputNumber * hightInputNumber;
    

    const calculateEntry = document.getElementById('triangle-aria');
    const p = document.createElement('p');
    p.classList.add('removed')

    p.innerHTML = `Aria: ${tringleAria} cm <sup>2</sup> `
    calculateEntry.appendChild(p);

    const items = document.getElementsByClassName('removed');
    for(const item of items){
        item.addEventListener('click', function(event){
            event.target.parentNode.removeChild(event.target);
        })
    }

})