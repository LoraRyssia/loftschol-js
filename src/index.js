/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isAllTrue(array, fn) {
	try {
    if(array.length == 0) throw "empty array";
    if(array.length === null) throw "empty array";
    if(array.length === undefined) throw "empty array";
    if(fn() === undefined) throw "fn is not a function";
    }
    catch(err) {
      console.log(err.message);
    }
  for (var i = 0; i < array.length; i++) {
		if (fn(array[i]) == false) {
			var x = 1;
		}
	}
  if (x) {return false} else {return true}
}

/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
	try {
    if(array.length == 0) throw "empty array";
    if(array.length === null) throw "empty array";
    if(array.length === undefined) throw "empty array";
    if(fn() === undefined) throw "fn is not a function";
    }
    catch(err) {
      console.log(err.message);
    }
	for (var i = 0; i < array.length; i++) {
		if (fn(array[i]) == true) {
			var x = 1;
		}
	}
    if (x) {return true} else {return false}
}

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
	var BadArguments = [];
	for (var i = 1; i < arguments.length; i++) {
		try {
			fn(arguments[i]);
		}
		catch(e) {
			BadArguments.push(arguments[i]);
		}
	}
	return BadArguments;
}

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number) {
	if(number === undefined) number = 0;
	var obj = {
		sum: function() {};
		dif: function() {};
		div: function() {};
		mul: function() {};
	}
	return obj;
}

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
