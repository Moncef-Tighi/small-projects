import db from '../app.js';

export const fetchAll = function(callback) {
    db.query(`
    SELECT  ID_EMP, NOM_EMP, PRENOM_EMP, SALAIRE, NOM_SERVICE FROM employe
    INNER JOIN salaire ON employe.ID_SALAIRE = salaire.ID_salaire
    INNER JOIN services ON employe.ID_SERVICE= services.ID_SERVICE `
    , (error, employes) => {
        if (error) return response.status(500).send(error);
        return callback(employes);
    }
);
}