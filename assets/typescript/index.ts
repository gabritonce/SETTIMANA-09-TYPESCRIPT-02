class SonAccount {
   saldo: number;
  
    constructor(saldoIniziale: number) {
      this.saldo = saldoIniziale;
    }
  
    twoDeposit(ammontare: number) {
      this.saldo += ammontare;
    }
  
    twoWithDraw(ammontare: number) {
      if (ammontare <= this.saldo) {
        this.saldo -= ammontare;
      } else {
        console.log("Saldo insufficiente.");
      }
    }
    
  
    
  
    mostraSaldo() {
      console.log("Saldo attuale-figlio:", this.saldo);
    }
  }
  

  
  // Esempio di utilizzo delle classi
  
  const deposito1 = new SonAccount(0);
  deposito1.twoDeposit(500);
  deposito1.twoWithDraw(200);
  deposito1.mostraSaldo(); // 
 
  



  //////////////////////|||||\\\\

  class MotherAccount {
    saldo2: number;
  
    constructor(saldoIniziale: number) {
      this.saldo2 = saldoIniziale;
    }
  
    oneDeposit(ammontare: number) {
      this.saldo2 += ammontare;
    }
  
    oneWithDraw(ammontare: number) {
      if (ammontare <= this.saldo2) {
        this.saldo2 -= ammontare;
      } else {
        console.log("Saldo insufficiente.");
      }
    }
  
    addInterest(tassoInteresse: number) {
      const interesse = (this.saldo2 * tassoInteresse) / 100;
      this.saldo2 += interesse;
    }
  
    mostraSaldo2() {
      console.log("Saldo attuale-madre:", this.saldo2);
    }
  }
  
  const deposito2 = new MotherAccount(0);
  deposito2.oneDeposit(600);
  deposito2.oneWithDraw(100);
  deposito2.addInterest(10); 
  deposito2.mostraSaldo2(); 
  
  
  