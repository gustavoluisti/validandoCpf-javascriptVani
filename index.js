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
    return true;
}

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.cpfLimpo)
console.log(cpf.valida());