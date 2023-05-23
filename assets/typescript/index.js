var SonAccount = /** @class */ (function () {
    function SonAccount(saldoIniziale) {
        this.saldo = saldoIniziale;
    }
    SonAccount.prototype.twoDeposit = function (ammontare) {
        this.saldo += ammontare;
    };
    SonAccount.prototype.twoWithDraw = function (ammontare) {
        if (ammontare <= this.saldo) {
            this.saldo -= ammontare;
        }
        else {
            console.log("Saldo insufficiente.");
        }
    };
    SonAccount.prototype.mostraSaldo = function () {
        console.log("Saldo attuale-figlio:", this.saldo);
    };
    return SonAccount;
}());
// Esempio di utilizzo delle classi
var deposito1 = new SonAccount(0);
deposito1.twoDeposit(500);
deposito1.twoWithDraw(200);
deposito1.mostraSaldo(); // 
//////////////////////|||||\\\\
var MotherAccount = /** @class */ (function () {
    function MotherAccount(saldoIniziale) {
        this.saldo2 = saldoIniziale;
    }
    MotherAccount.prototype.oneDeposit = function (ammontare) {
        this.saldo2 += ammontare;
    };
    MotherAccount.prototype.oneWithDraw = function (ammontare) {
        if (ammontare <= this.saldo2) {
            this.saldo2 -= ammontare;
        }
        else {
            console.log("Saldo insufficiente.");
        }
    };
    MotherAccount.prototype.addInterest = function (tassoInteresse) {
        var interesse = (this.saldo2 * tassoInteresse) / 100;
        this.saldo2 += interesse;
    };
    MotherAccount.prototype.mostraSaldo2 = function () {
        console.log("Saldo attuale-madre:", this.saldo2);
    };
    return MotherAccount;
}());
var deposito2 = new MotherAccount(0);
deposito2.oneDeposit(600);
deposito2.oneWithDraw(100);
deposito2.addInterest(10);
deposito2.mostraSaldo2();
