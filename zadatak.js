var _ = require("lodash");

var dobro = "1234567890";
var lose = "1123456";
var jedinstveniZnakovi = function (password) {
    var mojNiz = [];
    for (let i = 0; i < password.length; i++) {
        var numToCheck = (password.charAt(i));
        //console.log(numToCheck + " is integer = " + isBroj(numToCheck));
        if (!isBroj(numToCheck)) {
            console.log(numToCheck + " nije broj!");
            return false;
        }
        if (mojNiz.includes(numToCheck)) {
            console.log(numToCheck + " vec postoji u nasem nizu!");
            return false;
        }
        else {
            console.log(numToCheck + "Ne postoji u nasem nizu!");
            mojNiz.push(numToCheck);
        }
    }
    return true;
};


function isBroj(broj) {
    return !isNaN(broj);
}

function isMoreThan10(password) {
    if (password.length > 10) {
        return true;
    }
    return false;
}

function skratiNa10(password){
    var tmpPassword = "";
    for (let i = 0; i < 10; i++) {
        var charAtIndex = (password.charAt(i));
        tmpPassword +=charAtIndex;
    }
    return password;
}

console.log("Password je ispravan: " + jedinstveniZnakovi(dobro));
console.log("Password je ispravan: " + jedinstveniZnakovi(lose));
jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);