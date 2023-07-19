abstract class WorkerTax {

    constructor(public codredd: number, public redditoAnnuoLordo: number, public tasseInps: number, public tasseIrpef: number) {
        console.log(`Reddito netto ${this.getRedditoAnnuoNetto}, a fronte di ${this.getTasseInps}€ di Inps e ${this.getTasseIrpef}€ di Irpef`)
    }

    get getUtileTasse(): number {
        return (this.codredd * this.redditoAnnuoLordo) / 100
    }

    get getTasseInps(): number {
        return (this.getUtileTasse * this.tasseInps) / 100
    }

    get getTasseIrpef(): number {
        return (this.getUtileTasse * this.tasseIrpef) / 100
    }

    get getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - (this.getTasseInps + this.getTasseIrpef)
    }
}

class Type1 extends WorkerTax {
    constructor() {
        super(40, 13500, 25, 18)
    }
}

class Type2 extends WorkerTax {
    constructor() {
        super(54, 50000, 25, 25)
    }
}

class Type3 extends WorkerTax {
    constructor() {
        super(62, 150000, 27, 38)
    }
}

let lavoratore1: Type1 = new Type1()
let lavoratore2: Type2 = new Type2()
let lavoratore3: Type3 = new Type3()







