const calculadora ={
    numero1: 10,
    numero2: 5,
    multiplicar(){
        return this.numero1 *this.numero2
    },
    divisao(){
        return this.numero1 / this.numero2
    },
    soma(){
        return this.numero1 + this.numero2
    },
    subtracao(){
        return this.numero1 - this.numero2
    }   
}
        console.log(calculadora.multiplicar())
        console.log(calculadora.divisao())
        console.log(calculadora.soma())
        console.log(calculadora.subtracao())