
function calcula() {
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let op = document.getElementById('op').value;
    
    switch (op) {
        case "+":
            soma(n1, n2, op);
            break;
            case "-":
            subtracao(n1, n2, op)
            break;
            case "*":
                multiplicacao(n1, n2, op)
                break;
                case "/":
            divisao(n1, n2, op)
            break;
        default:
            document.getElementById('resultado').innerHTML = "valor incorreto"
        }
    }
    
    function soma(n1, n2, op) {
        resultado = n1 + n2;
        document.getElementById('resultado').innerHTML = n1 + "" + op + "" + n2 + " = " + resultado;
    }
    function subtracao(n1, n2, op) {
        resultado = n1 - n2;
        document.getElementById('resultado').innerHTML = n1 + "" + op + "" + n2 + " = " + resultado;
    }
    function multiplicacao(n1, n2, op) {
        resultado = n1 * n2;
        document.getElementById('resultado').innerHTML = n1 + "" + op + "" + n2 + " = " + resultado;
    
    }
    function divisao(n1, n2, op) {
        resultado = n1 / n2;
        document.getElementById('resultado').innerHTML = n1 + "" + op + "" + n2 + " = " + resultado;
    
    }