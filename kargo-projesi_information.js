

let cargo_title = ['Kargo İsim','Kargo İçeriği','Kargo Kilogram',]; 
let cargo_each;

// Functions
    function clean(input){
        for(let i=0; i<input.length; i++){document.querySelectorAll('.input-info')[i].value = "";}
        next_buton.remove();
        document.querySelector('#card').remove(); 
        article_tag.append(h1);
    };

    function createLbandİP(div){
        for(let i=0; i<cargo_title.length; i++){
         // Create Label
        const label = document.createElement('label');
        label.className = "cargo-label";
        label.textContent = `${cargo_counts} / ${cargo_title[i]}`
        div.append(label);
        
        // create İnput
        const inputs = document.createElement('input');
        inputs.className = "cargo-input";
        div.append(inputs);
    };
};

// For Delete Button
function deleteBtn(){
    let state;
    const input = document.querySelectorAll('h4');

    for(let i=0 ; i<input.length; i++){
        state = (input[i].textContent != "") ? true : false
    }
    
    if(state === true){
        alert('Girilen Bilgiler Siliniyor...');
        clean(input);
    }
    else{
        alert('Mevcut Bir Bilgi yok kontrol edin');
    };       
};
 
    
// Global
    const rightCard = document.createElement('div'); 
    const buton = document.querySelector('#save-btn');
    const article_tag = document.querySelector('article');
    const h1 = document.querySelector('#welcome-project');
    

// PERSONAL İNFORMATİON --     
buton.addEventListener('click',function(){

let info_header = ["Name","Surname","Telephone No.","Cargo Each"];    

// CREATE ELEMENT                              
    const card = document.createElement('div');    
    const leftCard = document.createElement('div');
    const card_header = document.createElement('h2');

// İD AND CLASSNAME
    leftCard.id = 'leftCard';
    card.id = 'card';
    card_header.className = 'card-header';
    rightCard.id = 'rightCard';

// QUERY SELECTOR
    let input = document.querySelectorAll('.input-info');
    cargo_each = input[3];
    let div = document.querySelector('#card');


// Append
    card_header.innerHTML = `Personal İnformation`;      
    leftCard.appendChild(card_header);
    card.append(leftCard);
    card.append(rightCard);

// Validation
    if((input[0].value === "") || (input[1].value === "") || (input[2].value === "") || (input[3].value === "")){
        alert("Bilgiler Eksiksiz Girilmemelidir");
        clean(input);
    
    }
    else if((!isNaN(input[0].value)) || (!isNaN(input[1].value))){
        alert("hatali Sayı Girişi , Tekrar Deneyin");
        clean(input);    
    }
    
    // Append 
    else if(div === null){
        article_tag.appendChild(card);
        article_tag.append(next_buton);
        h1.remove();
    }

    else{
        alert('Merhaba Bilgiler 1 kez Kaydedilebilir');  
        clean(input);
    };

// Person Value 
    info_header.forEach((item , i) =>{
        let card_text = document.createElement('h4');
        card_text.textContent = `${item} : ${input[i].value}`;
        leftCard.appendChild(card_text);
    
        document.querySelectorAll('.input')[i].value = "";
    });

});


// DELETE BUTTON
    const buton2 = document.querySelector('#delete-btn');
    buton2.addEventListener('click' ,deleteBtn);



// CARGO İNFORMATİON 
    const next_buton = document.createElement('button');
    const cargo_calc = document.createElement('button');
    const cargo_count = document.createElement('h5');

 // İD AND STYLE
    next_buton.id = "next-button";
    next_buton.style.width = '150px';
    next_buton.style.height = '30px';
    next_buton.innerHTML = "Continue";


// CARGO İNFORMATİON BUTTON
next_buton.addEventListener('click' ,function(){

    alert('Tebrikler Personel İşlemleri Tamamlandı Şimdi Kargo İşlemleri');

// Query Selector And Create Element
    const main = document.querySelector('main');
    let div = document.createElement('div');
    div.className = 'person-info';

// CARGO COUNT 
    cargo_count.className = 'cargo-count';
    cargo_count.textContent = `Kargo Adeti : ${cargo_each.value}`;

// CARGO İNFORMATİON LOGİC  
    main.appendChild(div);
    div.append(cargo_count);
    createLbandİP(div);

// CARGO CALCULATİON SAVE BUTTON 
    cargo_calc.className = "cargo-calc-Btn";
    cargo_calc.innerHTML = "Enter"; 
    div.appendChild(cargo_calc);

// Display
    document.querySelector('#person-info').style.display = 'none';
    next_buton.style.display = 'none';
});


// CARGO OBJECT  (burda kaldık burdan devam et 22.05.2026)
let cargs = [];
let cargo_counts = 1; 
let cargs_kg = [];


// Calculation Button
const CalculationBtn = document.createElement('button');
CalculationBtn.className = "cargo-calc-Btn";
CalculationBtn.innerHTML = "Sonraki Adim";


// Cargo Object and append
cargo_calc.addEventListener('click', function(){

// For Object
let cargo_name;
let cargo_type;
let cargo_kg;
let cargo_total_kg = 0;


// Tag Choose
let label = document.querySelectorAll('.cargo-label');
let inputs = document.querySelectorAll('.cargo-input');
let div = document.querySelector('.person-info');   
let main = document.querySelector('main');

// İnputs Class
inputs[0].className = "cargo-name";
inputs[1].className = "cargo-type";
inputs[2].className = "cargo-kg";

// For Total Cargo Weight
cargo_total_kg += Number(document.querySelector('.cargo-kg').value);

// Cargo Object values
cargo_name = document.querySelector('.cargo-name').value;
cargo_type = document.querySelector('.cargo-type').value;
cargo_kg = Number(document.querySelector('.cargo-kg').value);

// Push Each Cargo Weight in array
cargs_kg.push(cargo_kg);


// Push in object
cargs.push({
    cargo_id: `${cargo_counts}. Cargo`,
    cargo_name : `${cargo_name}`,
    cargo_type : `${cargo_type}`,
    cargo_kg : `${cargo_kg}`,
});

// CARGO SAVED MESSAGE
let div_succes_card = document.createElement('div');
div_succes_card.className = "div_succes_card";

let h3 = document.createElement('h4');
h3.textContent = "Kargo Giriş İşlemleri Başarılı";

let img = document.createElement('img');
img.className = "check_İmg";
img.setAttribute('src','check-green.gif');
img.setAttribute('alt','Check Gif');

div_succes_card.append(img);
div_succes_card.append(h3);


cargo_counts++;
div.innerHTML = "";



if(cargo_counts <= cargo_each.value){

div.append(cargo_count);  
createLbandİP(div)
div.appendChild(cargo_calc);
  
}


else{  
    alert('Kargo Bilgi Girme İşlemi Başarılı');
    div.append(div_succes_card);
    div.append(CalculationBtn);
}

});


let total_pay = 0;

// Cargo Calculation
CalculationBtn.addEventListener('click', function(){

const rightCargoCard = document.createElement('div');
rightCargoCard.id = "rightCargoCard";

let Cargo_info_head = document.createElement('h2');

// Calculation
for(let i=0 ; i<cargs_kg.length; i++){
        
    total_pay +=    (cargs_kg[i] < 1 )? 80: 
                    ((cargs_kg[i] >= 1) && (cargs_kg[i] <=3))? 120 :
                    ((cargs_kg[i] > 3) && (cargs_kg[i] <=5))? 160 :
                    ((cargs_kg[i] > 5) && (cargs_kg[i] <= 10))? 220 : 300;
};


// Cargo İnformation Header 
Cargo_info_head.textContent = "Cargo İnformation";
Cargo_info_head.style.textAlign = 'right';
Cargo_info_head.className = "card-header";


rightCard.append(Cargo_info_head);
rightCard.append(rightCargoCard);

// Cargo Header Div
let cargo = ['Cargo Name','Cargo Type','Cargo Weight(kg)'];
let cargo_head = document.createElement('div');
cargo_head.className = 'cargo_head_div';


// Cargo Header Append
for(let r=0; r<cargo.length; r++){
    const h3 = document.createElement('h4');
     h3.innerHTML = ` | ${cargo[r]} `
    cargo_head.append(h3);
}

rightCargoCard.append(cargo_head);
    
// Cargo Append 
    for(let m=0 ; m<cargs.length; m++){
    let cargoVal = [cargs[m].cargo_name , cargs[m].cargo_type, cargs[m].cargo_kg,];

    let cargoDiv = document.createElement('div');
    cargoDiv.className = "cargo-div";
        
        
        for(let h=0; h<cargo.length; h++){        
        const h4 = document.createElement('h4');
        h4.className = "cargo-object";
        h4.innerHTML =` | ${cargoVal[h]}`;
           
        cargoDiv.append(h4);
        
    }
    rightCargoCard.append(m + 1 , cargoDiv);
    }

console.log(total_pay);

});




