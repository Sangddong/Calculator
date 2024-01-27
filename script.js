let numFirst = '';
let numSecond = '';
let op_input = null;

const numFunc = (n) => {
    return () => {
        if (op_input === null){
            numFirst = numFirst+n;
            cp_input_num.value = numFirst;
        }
        else {
            numSecond = numSecond + n;
            cp_input_num.value = numSecond;
        }
    };
};

const cp_input_num = document.querySelector('#result');

document.querySelector('#n0').addEventListener('click', numFunc('0'));
document.querySelector('#n1').addEventListener('click', numFunc('1'));
document.querySelector('#n2').addEventListener('click', numFunc('2'));
document.querySelector('#n3').addEventListener('click', numFunc('3'));
document.querySelector('#n4').addEventListener('click', numFunc('4'));
document.querySelector('#n5').addEventListener('click', numFunc('5'));
document.querySelector('#n6').addEventListener('click', numFunc('6'));
document.querySelector('#n7').addEventListener('click', numFunc('7'));
document.querySelector('#n8').addEventListener('click', numFunc('8'));
document.querySelector('#n9').addEventListener('click', numFunc('9'));


const cp_input_op = document.querySelector('#operator');

const opFunc = (op) => () =>{
    switch (op) {
        case '+' : 
            op_input = op;
            cp_input_op.value = op_input;
            break;
        case '-' :
            op_input = op;
            cp_input_op.value = op_input;
            break;
        case '*' :
            op_input = op;
            cp_input_op.value = op_input;
            break;
        case '/' :
            op_input = op;
            cp_input_op.value = op_input;
            break;
        case '=' :
            switch (op_input){
                case '+' :
                    cp_input_num.value = parseInt(numFirst)+parseInt(numSecond);
                    numFirst ='';
                    numSecond = '';
                    break;
                case '-' :
                    cp_input_num.value = parseInt(numFirst)-parseInt(numSecond);
                    numFirst ='';
                    numSecond = '';
                    break;
                case '*' :
                    cp_input_num.value = parseInt(numFirst)*parseInt(numSecond);
                    numFirst ='';
                    numSecond = '';
                    break; 
                case '/' :
                    cp_input_num.value = parseInt(numFirst)/parseInt(numSecond);
                    numFirst ='';
                    numSecond = '';
                    op_input = '';
                    cp_input_op.value = op_input;
                    break;
            }
            break;
        case 'clear' : 
            numFirst ='';
            numSecond = '';
            op_input = null;
            cp_input_num.value='';
            cp_input_op.value='';
            break;
    }
};

document.querySelector('#op_plus').addEventListener('click', opFunc('+'));
document.querySelector('#op_sub').addEventListener('click', opFunc('-'));
document.querySelector('#op_mul').addEventListener('click', opFunc('*'));
document.querySelector('#op_div').addEventListener('click', opFunc('/'));
document.querySelector('#op_calc').addEventListener('click', opFunc('='));
document.querySelector('#op_clr').addEventListener('click', opFunc('clear'));