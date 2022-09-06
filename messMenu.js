let brkfstMenuItems = document.querySelectorAll("ul.brkfst-items");
let lunchMenuItems = document.querySelectorAll("ul.lunch-items");
for(let i = 0;i<brkfstMenuItems.length; i++) {
    let setBrkfstItem1 = document.createElement('li');
    let setBrkfstItem2 = document.createElement('li');
    let setBrkfstItem3 = document.createElement('li');
    let setBrkfstItem4 = document.createElement('li');
    setBrkfstItem1.innerText = "Milk";
    setBrkfstItem2.innerText = "Chai";
    setBrkfstItem3.innerText = "Eggs";
    setBrkfstItem4.innerText = "Banana";
    brkfstMenuItems[i].appendChild(setBrkfstItem1);
    brkfstMenuItems[i].appendChild(setBrkfstItem2);
    brkfstMenuItems[i].appendChild(setBrkfstItem3);
    brkfstMenuItems[i].appendChild(setBrkfstItem4);

    let setLunchItem1 = document.createElement('li');
    setLunchItem1.innerText = "Rice";
    lunchMenuItems[i].appendChild(setLunchItem1);
}

// Adding selected items to top and removing it from options dropdown -> Dinner
let dinnertemp = document.querySelectorAll("#dinner");
let dinnerItems = document.querySelectorAll(".dinner-items");
for(let i=0 ; i<7 ; i++){
    function onChange(){
        let text = dinnertemp[i].options[dinnertemp[i].selectedIndex].text;
        if(dinnerItems[i].children.length<1){
            let dinnerItemAdd = document.createElement('li');
            dinnerItemAdd.innerHTML = `<button type="button" class="btn" onclick="resetDinner(this)">${text}</button> `;
            dinnerItemAdd.setAttribute('class','dinner-buttons');
            dinnerItems[i].appendChild(dinnerItemAdd);
            for(let j=0 ; j<i ;j++){
                dinnertemp[j].remove(dinnertemp[i].selectedIndex);
            }    
            for(let j=i+1 ; j<7 ; j++){
                dinnertemp[j].remove(dinnertemp[i].selectedIndex);
            }
            dinnertemp[i].remove(dinnertemp[i].selectedIndex);
        }  
        else{
            alert("Already added.Kindly edit");
        }  
    }   
    dinnertemp[i].onchange = onChange; 
}

// Adding selected items to top and removing it from options dropdown -> Breakfast
let brkfsttemp = document.querySelectorAll("#brkfst");
let brkfstItems = document.querySelectorAll(".brkfst-items");
for(let i=0 ; i<7 ; i++){
    function onChange(){
        let text = brkfsttemp[i].options[brkfsttemp[i].selectedIndex].text;
        if(brkfstItems[i].children.length<5){
            let brkfstItemAdd = document.createElement('li');
            brkfstItemAdd.innerHTML = `<button type="button" class="btn" onclick="resetBrkfst(this)">${text}</button> `;
            brkfstItemAdd.setAttribute('class','brkfst-buttons');
            brkfstItems[i].appendChild(brkfstItemAdd);
            for(let j=0 ; j<i ;j++){
                brkfsttemp[j].remove(brkfsttemp[i].selectedIndex);
            }    
            for(let j=i+1 ; j<7 ; j++){
                brkfsttemp[j].remove(brkfsttemp[i].selectedIndex);
            }
            brkfsttemp[i].remove(brkfsttemp[i].selectedIndex);
        }  
        else{
            alert("Already added.Kindly edit");
        } 
    }   
    brkfsttemp[i].onchange = onChange; 
}

// Adding selected items to top and removing it from options dropdown -> Lunch
let lunchtemp = document.querySelectorAll("#lunch");
let lunchItems = document.querySelectorAll(".lunch-items");
for(let i=0 ; i<7 ; i++){
    function onChange(){
        let text = lunchtemp[i].options[lunchtemp[i].selectedIndex].text;
        if(lunchItems[i].children.length<2){
            let lunchItemAdd = document.createElement('li');
            lunchItemAdd.innerHTML = `<button type="button" class="btn" onclick="resetLunch(this)">${text}</button> `;
            lunchItemAdd.setAttribute('class','lunch-buttons');
            lunchItems[i].appendChild(lunchItemAdd);
            for(let j=0 ; j<i ;j++){
                lunchtemp[j].remove(lunchtemp[i].selectedIndex);
            }    
            for(let j=i+1 ; j<7 ; j++){
                lunchtemp[j].remove(lunchtemp[i].selectedIndex);
            }
            lunchtemp[i].remove(lunchtemp[i].selectedIndex);
        }  
        else{
            alert("Already added.Kindly edit");
        }  
    }   
    lunchtemp[i].onchange = onChange; 
}

// Adding selected items to top and removing it from options dropdown -> Supper
let suppertemp = document.querySelectorAll("#supper");
let supperItems = document.querySelectorAll(".supper-items");
for(let i=0 ; i<5 ; i++){
    function onChange(){
        let text = suppertemp[i].options[suppertemp[i].selectedIndex].text;
        if(supperItems[i].children.length<1){
            let supperItemAdd = document.createElement('li');
            supperItemAdd.innerHTML = `<button type="button" class="btn" onclick="resetSupper(this)">${text}</button> `;
            supperItemAdd.setAttribute('class','supper-buttons');
            supperItems[i].appendChild(supperItemAdd);
            for(let j=0 ; j<i ;j++){
                suppertemp[j].remove(suppertemp[i].selectedIndex);
            }    
            for(let j=i+1 ; j<5 ; j++){
                suppertemp[j].remove(suppertemp[i].selectedIndex);
            }
            suppertemp[i].remove(suppertemp[i].selectedIndex);
        }  
        else{
            alert("Already added.Kindly edit");
        }  
    }   
    suppertemp[i].onchange = onChange; 
}


// Edit button of breakfast
let allBrkfstedits = document.querySelectorAll(".btn-brkfst");
for(let i=0;i<7;i++){
    function editbrkfst(){
        if(allBrkfstedits[i].previousElementSibling.children[4].id == "line-through"){
            allBrkfstedits[i].previousElementSibling.children[4].removeAttribute('id','line-through');
            allBrkfstedits[i].innerText = "Edit";
            allBrkfstedits[i].style.backgroundColor = "#3C415C";
        }
        else{
            allBrkfstedits[i].previousElementSibling.children[4].setAttribute('id','line-through');
            allBrkfstedits[i].innerText = "Save";
            allBrkfstedits[i].style.backgroundColor = "rgb(204, 217, 255)";
        }    
    }
    allBrkfstedits[i].addEventListener('click',editbrkfst)
}

// Edit button of Lunch
let allLunchedits = document.querySelectorAll(".btn-lunch");
for(let i=0;i<7;i++){
    function editLunch(){
        if(allLunchedits[i].previousElementSibling.children[1].id == "line-through"){
            allLunchedits[i].previousElementSibling.children[1].removeAttribute('id','line-through');
            allLunchedits[i].innerText = "Edit";
            allLunchedits[i].style.backgroundColor = "#3C415C";
        }
        else{
            allLunchedits[i].previousElementSibling.children[1].setAttribute('id','line-through');
            allLunchedits[i].innerText = "Save";
            allLunchedits[i].style.backgroundColor = "rgb(204, 217, 255)";
        }    
    }
    allLunchedits[i].addEventListener('click',editLunch)
}

// Edit button of Supper
let allSupperedits = document.querySelectorAll(".btn-supper");
for(let i=0;i<5;i++){
    function editSupper(){
        if(allSupperedits[i].previousElementSibling.children[0].id == "line-through"){
            allSupperedits[i].previousElementSibling.children[0].removeAttribute('id','line-through');
            allSupperedits[i].innerText = "Edit";
            allSupperedits[i].style.backgroundColor = "#3C415C";
        }
        else{
            allSupperedits[i].previousElementSibling.children[0].setAttribute('id','line-through');
            allSupperedits[i].innerText = "Save";
            allSupperedits[i].style.backgroundColor = "rgb(204, 217, 255)";
        }    
    }
    allSupperedits[i].addEventListener('click',editSupper)
}

// Edit button of Dinner
let allDinneredits = document.querySelectorAll(".btn-dinner");
for(let i=0;i<7;i++){
    function editDinner(){
        if(allDinneredits[i].previousElementSibling.children[0].id == "line-through"){
            allDinneredits[i].previousElementSibling.children[0].removeAttribute('id','line-through');
            allDinneredits[i].innerText = "Edit";
            allDinneredits[i].style.backgroundColor = "#3C415C";
        }  
        else{
            allDinneredits[i].previousElementSibling.children[0].setAttribute('id','line-through');
            allDinneredits[i].innerText = "Save";
            allDinneredits[i].style.backgroundColor = "rgb(204, 217, 255)";
        }  
    }
    allDinneredits[i].addEventListener('click',editDinner)
}


// Reset Breakfast
let tempBrkfstItems = document.querySelectorAll("#brkfst");
function resetBrkfst(e){
    if(e.parentElement.id == 'line-through'){
        for(let i=0;i<7;i++){
            let itemName = e.innerHTML;
            let newOption = document.createElement('option');
            newOption.innerHTML = `<option value="${itemName}">${itemName}</option>`;
            tempBrkfstItems[i].appendChild(newOption);
        }
        e.parentElement.parentElement.nextElementSibling.innerText = "Edit";
        e.parentElement.parentElement.nextElementSibling.style.backgroundColor = "#3C415C";
        e.parentElement.remove();
    }    
}

// Reset Lunch
let tempLunchItems = document.querySelectorAll("#lunch");
function resetLunch(e){
    if(e.parentElement.id == 'line-through'){
        for(let i=0;i<7;i++){
            let itemName = e.innerHTML;
            let newOption = document.createElement('option');
            newOption.innerHTML = `<option value="${itemName}">${itemName}</option>`;
            tempLunchItems[i].appendChild(newOption);
        }
        e.parentElement.parentElement.nextElementSibling.innerText = "Edit";
        e.parentElement.parentElement.nextElementSibling.style.backgroundColor = "#3C415C";
        e.parentElement.remove();
    }    
}

// Reset Dinner
let tempSupperItems = document.querySelectorAll("#supper");
function resetSupper(e){
    if(e.parentElement.id == 'line-through'){
        for(let i=0;i<5;i++){
            let itemName = e.innerHTML;
            let newOption = document.createElement('option');
            newOption.innerHTML = `<option value="${itemName}">${itemName}</option>`;
            tempSupperItems[i].appendChild(newOption);
        }
        e.parentElement.parentElement.nextElementSibling.innerText = "Edit";
        e.parentElement.parentElement.nextElementSibling.style.backgroundColor = "#3C415C";
        e.parentElement.remove();
    }    
}

// Reset Dinner
let tempDinnerItems = document.querySelectorAll("#dinner");
function resetDinner(e){
    if(e.parentElement.id == 'line-through'){
        for(let k=0 ; k<7 ; k++){
            let itemName = e.innerHTML;
            let newOption = document.createElement('option');
            newOption.innerHTML = `<option value="${itemName}">${itemName}</option>`;
            tempDinnerItems[k].appendChild(newOption);
        }
        e.parentElement.parentElement.nextElementSibling.innerText = "Edit";
        e.parentElement.parentElement.nextElementSibling.style.backgroundColor = "#3C415C";
        e.parentElement.remove();
    }    
}


// let temp2 = document.querySelectorAll("#lunch");
// let temp3 = document.querySelectorAll(".lunch-items");
// console.log(temp3[0].children.length);
// console.log(temp2[0]);
// function onChange(){
    // let value = temp2[0].value;
    // console.log(temp2[0].selectedIndex)
    // let text = temp2[0].options[temp2[0].selectedIndex].text;
    // let text = temp2.options[temp2.selectedIndex].text;
//     if(temp3[0].children.length<2){
//         let tempbrk = document.createElement('li');
//         tempbrk.innerText = text;
//         tempbrk.setAttribute('class','lunch-items')
//         console.log(tempbrk.className);
//         temp3[0].appendChild(tempbrk);
//         console.log(text);
//     }    
//     else{
//         alert("Already added.Kindly edit")
//     }
// }


// Submit button clearing the form and refreshing page to clear whole table selected items!
function submitted(){
    let form = document.getElementById("form");
    form.reset();
    window.location.reload();
    alert("Thank you for submitting Menu");
}

// *** Add items to options using JS ***
// let tempBrkfstItems = document.querySelectorAll("#brkfst");
// for(let i=0 ; i<tempBrkfstItems.length ; i++){
//     let newOption = document.createElement('option');
//     let optionText = document.createTextNode('Pyaz Parantha');
//     newOption.appendChild(optionText);
//     newOption.setAttribute("pyaz-Parantha",'pyaz-Parantha');
//     tempBrkfstItems[i].appendChild(newOption);
// }   

// let temp = document.getElementById("brkfst");
// console.log(tempBrkfstItems[0].children[0]);
// function submitted(){
//     alert("Thankyou for sumbitting Menu");
// }