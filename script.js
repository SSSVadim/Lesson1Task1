function doTransfer(){
	let firstValue = prompt('Введите первое число'); 
	if (isNaN(firstValue) || !firstValue || !firstValue.trim()){
		errorMsg();
		return		
	}

	let secondValue = prompt('В какую систему его перевести?', 10);
	if (secondValue < 2 || secondValue > 36 || isNaN(secondValue)){
		errorMsg();
		return	
	}

	console.log(parseInt(firstValue).toString(secondValue));	
}

doTransfer();

function errorMsg(){
	console.log("Некорректный ввод!");
}

