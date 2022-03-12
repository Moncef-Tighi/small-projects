//console.info("here");

const somme = function(...numbers) {
    return numbers.reduce( (total, number) => total+=number);
};

const result = somme(1,2,3,4,5,6,7,8,9,10);
console.debug(result);

class test {
    constructor(nom,prenom, numero = undefined) {
        this.nom = nom
        this.prenom = prenom
        this.numero = numero
    }

    hello() {
        return `hello ${this.nom} ${this.prenom}, ${this.appel()}`;
    }
    appel() {
        if (!this.numero) return `Aucun numéro de téléphone n'a été défini`
        return `Numéro de téléphone : ${this.numero}`
    }

}

console.log(new test("nom", "prenom").hello() );
console.log(new test("nom2", "prenom2", 06667546).hello() );