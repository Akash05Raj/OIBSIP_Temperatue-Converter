const inputvalue = document.querySelector('.valueinput');
const selectget = document.querySelector('#valueget');
const selectset = document.querySelector('#valueset');
const result = document.querySelector('.resultvalue');
const actionbtn = document.querySelector('.main-btn');
actionbtn.addEventListener('click',()=>{
    let value = parseFloat(inputvalue.value);
    let optionget = selectget.value;
    let optionset = selectset.value;
    let data = 0
    // console.log(optionget);
    // console.log(optionset);
    if(optionget === optionset)
    {
        alert('select valid value');
    }
    else{
        if(optionget==1){
            if(optionset==2){
                data = (9/5)*value + 32.
                result.innerText = data.toFixed(2);
            }
            else if(optionset==3){
                data = value+273.15;
                result.innerText = data.toFixed(2);
            }     
        }
        else if(optionget==2){
            if(optionset==1){
                data = (value - 32)*5/9;
                result.innerText = data.toFixed(2);
            }
            else if(optionset==3){
                data = ((value-32)*(5/9))+273.15; 
                result.innerText = data.toFixed(2);
            }
        }
        else if(optionget==3){
            if(optionset==1){
                data = value - 273.15;
                result.innerText = data.toFixed(2);
            }
            else if(optionset==2){
                data = (value - 273.15)*9/5 +32;
                result.innerText = data.toFixed(2);
            }
        }
    }
});
const viceverse = document.getElementsByTagName('i');
viceverse[0].addEventListener('click',()=>{
    let selectreverse = selectget.value; 
    selectget.value = selectset.value;
    selectset.value = selectreverse;
});