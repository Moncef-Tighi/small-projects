import db from '../app.js';

export const fetchAll = function(callback) {
    db.query("SELECT * FROM employes", callback);
}