// Chapter One - personal information 

    // Create tags and append
    let cargo_each;
    const buton = document.querySelector('#save-btn');
    const h1 = document.querySelector('#welcome-project')
    const card = document.createElement('div');
    const card_header = document.createElement('h2'); 
    const article_tag = document.querySelector('article');
    card_header.appendChild(document.createTextNode('Personal İnformation'));  
    
    //  tags in id and class modifie
    card.id = 'card';
    card_header.id = 'card-header';
    
let info = ["Name","Surname","Telephone No.","Cargo Each"];

buton.addEventListener('click',function(){

    // Personal info get
    let person_info = [];        
    let input = document.querySelectorAll('.input-info');
    card.innerHTML = "";
    card.appendChild(card_header);
   
    // data append 
    for(let i=0; i<input.length; i++){
            
            person_info.push(input[i].value);
            const card_element = document.createElement('h4');
            card_element.appendChild(document.createTextNode(`${info[i]} : ${person_info[i]}`));
            card.appendChild(card_element);     
            };
        
    let div = document.querySelector('#card');
    cargo_each = input[3];
    

    // Validation
    if((person_info[0] === "") || (person_info[1] === "") || (person_info[2] === "") || person_info[3] === ""){
    alert("Bilgiler Eksiksiz Girilmemelidir");
    div.remove();
    article_tag.append(h1);
    next_buton.remove();
    
    }
    else if((!isNaN(person_info[0])) || (!isNaN(person_info[1]))){
        alert("hatali Sayı Girişi");
        for(let i=0; i<person_info.length; i++){document.querySelectorAll('.input-info')[i].value = "";}
        article_tag.append(h1);
        next_buton.remove();
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
    div.remove();
    next_buton.remove();
    article_tag.append(h1);
    
    for(let i=0; i<person_info.length; i++){document.querySelectorAll('.input-info')[i].value = "";
      
    }
        
}

      
});


// Delete Button
const buton2 = document.querySelector('#delete-btn');

buton2.addEventListener('click' ,function(){
    const input = document.querySelectorAll('h4');
    let state;
    
    for(let i=0 ; i<input.length; i++){
        state = (input[i].value != "") ? true : false
    }
    
    if(state === true){
        alert('Girilen Bilgiler Siliniyor...');
        document.querySelector('#card').remove();
        article_tag.append(h1);
        next_buton.remove();
    }
    else{
        alert('Mevcut Bir Bilgi yok kontrol edin');
    }
     
});

// Chapter Two - Cargo info & Cargo Calc.

const cargo_card = document.querySelector('#card');
const next_buton = document.createElement('button');
const cargo_calc = document.createElement('button');


// Tags modifie 
next_buton.id = "next-button";
next_buton.style.width = '150px';
next_buton.style.height = '30px';
next_buton.innerHTML = "DEVAM ET";

let cargs = [];
// Cargo Data Enter
next_buton.addEventListener('click' ,function(){
    alert('Tebrikler Personel İşlemleri Tamamlandı Şimdi Kargo İşlemleri')
    // STEP 1 
    document.querySelector('#person-info').style.display = 'none';

    const name = ['Kargo İsim','Kargo İçeriği','Kargo Kilogram',];
    const main = document.querySelector('main');

    let div = document.createElement('div');
    div.className = 'person-info';
    main.appendChild(div);
 
    // cargo count header
    let cargo_count = document.createElement('h5');
    cargo_count.className = 'cargo-e';
    cargo_count.textContent = `Kargo Adeti : ${cargo_each.value}`; 
    div.append(cargo_count);    


let label;
let inputs;
let cargo_id;
let cargo_name;
let cargo_type;
let cargo_kg;
   
// Create Label and input - Cargo Packet 
    
for(let j = 0; j<cargo_each.value; j++){
  
    
    for(let i=0 ; i<name.length; i++){
        // Create Label
            
        label = document.createElement('label');
        label.className = "cargo-label";
        
        label.textContent = `${j + 1} .${name[i]}`
        div.append(label);

        // create İnput
        inputs = document.createElement('input');
        inputs.className = "cargo-input";
        div.append(inputs); 

        

    }
    
    
    
}
    
    

    

cargo_calc.className = "cargo-calc";
cargo_calc.innerHTML = "Bilgileri Gir Ve Hesapla";
div.appendChild(cargo_calc);
        
    
    
});




// Cargo Calculation

cargo_calc.addEventListener('click', function(){



    let cargo_label = document.querySelectorAll('.cargo-label');
    let cargo_input = document.querySelectorAll('.cargo-input');

// Cargo Object
for(let i = 0; i<cargo_each.value; i++){
  cargs.push({
        cargo_id : `${i + 1}. Cargo`,
        cargo_name : `${cargo_input[0].value}`,
        cargo_type : `${cargo_input[1].value}`,
        cargo_kg : `${cargo_input[2].value}`,
    });
}
    console.log(cargs);
   







   


})








