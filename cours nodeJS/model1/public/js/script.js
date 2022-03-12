'use strict';
const somme = function(...numbers) {
    return numbers.reduce( (total, number) => total+=number);
};

const result = somme(1,2,3,4,5,6,7,8,9,10);
//console.debug(result);

class test {
    constructor(nom,prenom, numero = undefined) {
        this.nom = nom,
        this.prenom = prenom,
        this.numero = numero
    }

    get hello() {
        return `hello ${this.nom} ${this.prenom}, ${this.appel}`;
    }
    
    get appel() {
        if (!this.numero) return `Aucun numéro de téléphone n'a été défini`
        return `Numéro de téléphone : ${this.numero}`
    }

}

// console.log(new test("nom", "prenom").hello );
// console.log(new test("nom2", "prenom2", 95068487).hello);

const titre = document.querySelector('.article');
const titre2 = document.getElementById('h2');
titre2.innerHTML = '<i>TesT</i>'
titre2.style.color='lightgreen';


const articles = Array(...document.querySelectorAll('.article'));
const colors = ["lightred", 'blue', 'green', 'lightgreen', 'pink', 'yellow', 'lightblue', 'gray'];
articles.map( article=> article.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]);

articles.forEach(article => article.addEventListener('click', (event) => {
    let originalColor=event.target.style.backgroundColor
    event.target.style.backgroundColor="red";
    setTimeout( ()=> event.target.style.backgroundColor=originalColor, 300)
    })
)
