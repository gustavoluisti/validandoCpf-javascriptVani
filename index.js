//705.484.450-52 070.987.720-03
// Validando cpf

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo',  {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    let digito1 = this.criaDigito(cpfParcial);
    let digito2 = this.criaDigito(cpfParcial + digito1);
   
    const novoCpf = cpfParcial + digito1 + digito2;
    console.log(novoCpf);

    return true;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

const cpf = new ValidaCPF('070.987.720-03');
console.log(cpf.cpfLimpo)
console.log(cpf.valida());