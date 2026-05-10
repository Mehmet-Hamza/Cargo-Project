// Chapter One - personal information 
const input = document.querySelectorAll('.input-info');
let cargo_title = ['Kargo İsim','Kargo İçeriği','Kargo Kilogram',]; 

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
        label = document.createElement('label');
        label.className = "cargo-label";
        label.textContent = `${cargo_counts} / ${cargo_title[i]}`
        div.append(label);
        
        // create İnput
        inputs = document.createElement('input');
        inputs.className = "cargo-input";
        div.append(inputs);
    };
};







// Create tags and append
    let cargo_each;

    // Create Element
    const card = document.createElement('div');
    const card_header = document.createElement('h2'); 
    
    // Tag Choose
    const buton = document.querySelector('#save-btn');
    const h1 = document.querySelector('#welcome-project')
    const article_tag = document.querySelector('article');

    // Create Text Node
    card_header.appendChild(document.createTextNode('Personal İnformation'));  
    
//  İD
    card.id = 'card';
    card_header.id = 'card-header';
    
let info = ["Name","Surname","Telephone No.","Cargo Each"];

buton.addEventListener('click',function(){
let person_info = [];

// Personal info 
    let input = document.querySelectorAll('.input-info');
    let div = document.querySelector('#card');

    card.innerHTML = "";
    card.appendChild(card_header);
   
    for(let i=0; i<input.length; i++){
            
            person_info.push(input[i].value);
            const card_element = document.createElement('h4');
            card_element.appendChild(document.createTextNode(`${info[i]} : ${person_info[i]}`));
            card.appendChild(card_element);     
            };
        
    cargo_each = input[3];
    

    // Validation
    if((person_info[0] === "") || (person_info[1] === "") || (person_info[2] === "") || person_info[3] === ""){
    alert("Bilgiler Eksiksiz Girilmemelidir");
    clean(input);
    
    }
    else if((!isNaN(person_info[0])) || (!isNaN(person_info[1]))){
        alert("hatali Sayı Girişi , Tekrar Deneyin");
        clean(input);    
    }
    
    // Append 
    else if(div === null){
    article_tag.appendChild(card);
    article_tag.append(next_buton);
    h1.remove();
    
    for(let i=0; i<person_info.length; i++){
        document.querySelector('#name-info').value = ""; 
        document.querySelector('#surname-info').value = "";
        document.querySelector('#tel-info').value = ""; 
    } 
    
}

    else{
    alert('Merhaba Bilgiler 1 kez Kaydedilebilir');  
    clean(input);
    
}
  
});

// Delete Button
const buton2 = document.querySelector('#delete-btn');

buton2.addEventListener('click' ,function(){
    let state;
    const input = document.querySelectorAll('h4');
  
    for(let i=0 ; i<input.length; i++){
        state = (input[i].value != "") ? true : false
    }
    
    if(state === true){
        alert('Girilen Bilgiler Siliniyor...');
        clean(input);
    }
    else{
        alert('Mevcut Bir Bilgi yok kontrol edin');
    }
     
});

// Chapter Two - Cargo info & Cargo Calc.button
const next_buton = document.createElement('button');
const cargo_calc = document.createElement('button');
const cargo_count = document.createElement('h5');

 // For Tags modifie 
next_buton.id = "next-button";
next_buton.style.width = '150px';
next_buton.style.height = '30px';
next_buton.innerHTML = "DEVAM ET";

// For count
let cargo_counts = 1; 
let cargo_total;

next_buton.addEventListener('click' ,function(){
alert('Tebrikler Personel İşlemleri Tamamlandı Şimdi Kargo İşlemleri');

let label;
let inputs;

const main = document.querySelector('main');

let div = document.createElement('div');
div.className = 'person-info';
main.appendChild(div);

cargo_total = cargo_each.value;

cargo_count.className = 'cargo-e';
cargo_count.textContent = `Kargo Adeti : ${cargo_each.value}`;

// Create Label and input - Cargo Packet 
div.append(cargo_count);
createLbandİP(div)

// Save Button
cargo_calc.className = "cargo-calc";
cargo_calc.innerHTML = "Bilgileri Gir Ve Hesapla"; 
div.appendChild(cargo_calc);

// Display 
document.querySelector('#person-info').style.display = 'none';
});

let cargs = [];
// Cargo Calculation And Object 
cargo_calc.addEventListener('click', function(){

// For Object
let cargo_name;
let cargo_type;
let cargo_kg;

let label = document.querySelectorAll('.cargo-label');
let inputs = document.querySelectorAll('.cargo-input');
let div = document.querySelector('.person-info');   

inputs[0].className = "cargo-name";
inputs[1].className = "cargo-type";
inputs[2].className = "cargo-kg";

cargo_name = document.querySelector('.cargo-name').value;
cargo_type = document.querySelector('.cargo-type').value;
cargo_kg = document.querySelector('.cargo-kg').value;

// Push in object
cargs.push({
    cargo_id: `${cargo_counts}. Cargo`,
    cargo_name : `${cargo_name}`,
    cargo_type : `${cargo_type}`,
    cargo_kg : `${cargo_kg}`,
});

cargo_counts++;
div.innerHTML = "";

if(cargo_counts <= cargo_total){

div.append(cargo_count);  
createLbandİP(div)
div.appendChild(cargo_calc);
  
}

else{
    alert('Kargo Bilgi Girme İşlemi Başarılı');
}

});

console.log(cargs);



