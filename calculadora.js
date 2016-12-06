'use strict'

var args = process.argv.slice(2);

var operation = args[1];
var num1 = parseFloat(args[0]);
var num2 = parseFloat(args[2]);
var result = '\n Introduce bien los parametros \n'

if(args.length == 3){
	switch(operation){
		case "mas":
			result = 'Suma: '+ parseFloat(num1 + num2);
			break;

		case "menos":
			result = 'Resta: '+ parseFloat(num1 - num2);
			break;

		case "por":
			result = 'Multiplicación: '+ parseFloat(num1 * num2);
			break;

		case "dividido":
			result = 'División: '+ parseFloat(num1 / num2);
			break;
	}
}

console.log(result);