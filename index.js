const chiffreBtn = document.querySelectorAll('.btn');
const affiche = document.querySelector('.affiche');
const result = document.querySelector('.result');
const rand = document.getElementById('rand');

chiffreBtn.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        const valeur = e.target.id;
        if (valeur) {
            affiche.innerHTML += valeur;
        }else{
            affiche.textContent += valeur;
        }
    })
})

clear.addEventListener('click', () => {
    const donner = Array.from(affiche.textContent);
    donner.pop()
    if (donner) {
        let list = donner.join('');
        affiche.textContent = list;
    }
})

Clear.addEventListener("click", ()=>{
    affiche.textContent = '';
    result.textContent = '';
})

sup.addEventListener("click", () => {
    if (affiche.innerHTML == '' && result.innerHTML == 0) {
        affiche.innerHTML = '';
    }else{
       affiche.innerHTML += result.innerHTML; 
    }
    
})

equal.addEventListener('click', () => {
    result.textContent = eval(affiche.textContent);
})






