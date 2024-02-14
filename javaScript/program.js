// Bloge Function

function blogClick(){
    const invititonCode = document.getElementById('invation-code').value;
    if(invititonCode === ''){
        alert('Plese Enter Invitation Code')
    }else{
        alert('Please valid Invitation Code')
    }
}


//------------------------------------------------------------

function getInputValuId(elementId){
    const inputFildElement = document.getElementById(elementId);
    const inputFildString = inputFildElement.value;
    const inputFildNumber = parseFloat(inputFildString); 
    inputFildElement.value = '';

    return inputFildNumber;    
   
}

function setAreaIDaria(spanId, area){
    const areaSpanId = document.getElementById(spanId);
    areaSpanId.innerText = area; 
};


//------------------------------

function calculateTriangleArea(){
    // // get Tringle base value
    // const baseFild = document.getElementById('triangle-base');
    // const baseText = baseFild.value;
    // const base = parseFloat(baseText);


    // // get triangle hight value
    // const hightFild = document.getElementById('triangle-hight');
    // const hightText = hightFild.value;
    // const hight = parseFloat(hightText);

  
    //-------------------------------------


    const base = getInputValuId('triangle-base')
    const hight = getInputValuId('triangle-hight')
   
     if(isNaN(base) || isNaN(hight)){
        alert('Please enter Number')
       return;
    }
    // calculation Tringle area 

    const area = 0.5 * base * hight;
    
    // show Triangle area
    // const areaSpan = document.getElementById('triangle-area');
    // areaSpan.innerText = area; 
    setAreaIDaria('triangle-area', area)

    // add To Calculation Entry area

    addToCalculationEntry('Triangle', area);
}


// Rectingle function 

function calculateRectangleArea(){
    // get rectengle width
    const RectanglewidthField =  getInputValuId('width-rectangle-fild');
    const rectanglelengthField =  getInputValuId('length-rectangle-fild');

    if(isNaN(RectanglewidthField) || isNaN(rectanglelengthField)){
        alert('Please enter Number')
        return;
    }

    const rectangleArea = RectanglewidthField * rectanglelengthField;

    setAreaIDaria('rectangle-area', rectangleArea)

    addToCalculationEntry('Rectingle', rectangleArea);

}
//-----------------------------calculate Parallelogram Area--------------------

function calculateParallelogramArea(){
         // get rectengle width
    const parallelogramBaseField =  getInputValuId('base-parallelogram-fild');
    const parallelogramHightField =  getInputValuId('hight-parallelogram-fild');

    if(isNaN(parallelogramBaseField) || isNaN(parallelogramHightField)){
        alert('Please enter Number')
        return;
    }

    const parallelogramArea = parallelogramBaseField * parallelogramHightField;

    setAreaIDaria('parallelogram-area', parallelogramArea)

    addToCalculationEntry('Parallelogram', parallelogramArea);




    
}

//-----------------------------calculate Rhombus Area--------------------

function calculateRhombusArea(){
    // get rectengle width
const rhombusD1Field =  getInputValuId('rhombusD1-field');
const rhombusD2Field =  getInputValuId('rhombusD2-field');

if(isNaN(rhombusD1Field) || isNaN(rhombusD2Field)){
   alert('Please enter Number')
   return;
}

const rhombusArea = 0.5 * rhombusD1Field * rhombusD2Field;

setAreaIDaria('rhombus-area', rhombusArea)

addToCalculationEntry('Rhombus', rhombusArea);





}

//-----------------------------calculate Pentagon Area--------------------

function calculatePentagonArea(){
    // get rectengle width
const pentagonPField =  getInputValuId('pentagon-P-Field');
const pentagonDField =  getInputValuId('pentagon-D-Field');

if(isNaN(pentagonPField) || isNaN(pentagonDField)){
   alert('Please enter Number')
   return;
}

const pentagonArea = 0.5 * pentagonPField * pentagonDField;

setAreaIDaria('pentagon-area', pentagonArea)

addToCalculationEntry('Pentagon', pentagonArea);





}



//-----------------------------calculate Ellipse Area--------------------

function calculateEllipseArea(){
    // get rectengle width
const ellipseAField =  getInputValuId('ellipse-a-Field');
const ellipseBField =  getInputValuId('ellipse-B-Field');

if(isNaN(ellipseAField) || isNaN(ellipseBField)){
   alert('Please enter Number')
   return;
}

const ellipseArea = 3.1416 * ellipseAField * ellipseBField;

setAreaIDaria('ellipse-area', ellipseArea)

addToCalculationEntry('Ellipse', ellipseArea);





}



//  function add to Calculation Entry area 
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button  class="btn btn-sm btn-success conver-item-${count + 1}">Convert m<sup>2</sup></button>`;

    calculationEntry.appendChild(p);

    const convertItems = document.getElementsByClassName(`conver-item-${count + 1}`);
    for(const convertItem of convertItems){
        convertItem.addEventListener('click', function(event){
            const connvert = area / 10000;
            event.target.classList.add('text-style');



            if((area / 10000) >= 1){
                event.target.innerText = `${connvert.toFixed(2)} m²`;
            }else{
                event.target.innerText = `${connvert} m²`;
            }

            
           
        })  
    }
    
    
}
