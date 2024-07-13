function countBmi() {
	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	var male = document.getElementById("m");
	var female = document.getElementById("f");

	if (height === '' || weight === '') {
		alert("Nhập chiều cao và cân nặng!");
		return;
	}

	var bmi = Number(weight) / (Number(height) / 100 * Number(height) / 100);
	console.log(bmi);
	var result = 0;
	if (bmi < 18.5) {
		result = 1;
	} else if (18.5 <= bmi && bmi <= 24.9) {
		result = 2;
	} else if (25 <= bmi && bmi <= 29.9) {
		result = 3;
	} else if (30 <= bmi) {
		result = 4;
	}


	var pTag = document.createElement("p");
	var h2 = document.createElement("h2");
	var imgTag = document.createElement("img")
	if(male.checked == true) imgTag.src = 'boy.jpg'
	else if((female.checked == true)) imgTag.src = 'girl.jpg'
	imgTag.width = 200

	var textResult = BMIResultText(result);

	var resultTextP = document.createTextNode(textResult);
	var b = document.createTextNode('BMI: ');
	var r = document.createTextNode(parseFloat(bmi).toFixed(2));

	pTag.appendChild(resultTextP);
	h2.appendChild(b);
	h2.appendChild(r);

	var result_left = document.getElementById("result-left");
	var result_right = document.getElementById("result-right");
	// remove old result content
	while (result_left.firstChild) {
		result_left.removeChild(result_left.firstChild);
	}
	while (result_right.firstChild) {
		result_right.removeChild(result_right.firstChild);
	}

	result_left.appendChild(imgTag);
	result_right.appendChild(h2);
	result_right.appendChild(pTag);
	document.getElementById("result").style.display = "block"
}

function BMIResultText(type) {
	if(type === 1) {
		return 'Chỉ số BMI của bạn dưới 18,5: Bạn đang gặp phải tình trạng thiếu cân, vì thế nên áp dụng các phương pháp ăn uống và luyện tập để tăng trọng lượng cơ thể.'
	} else if(type === 2) {
		return 'Chỉ số BMI của bạn là 18,5 đến 24,9: Bạn đang sở hữu cân nặng khỏe mạnh, cần duy trì quá trình ăn uống và sinh hoạt như thường ngày.'
	} else if(type === 3) {
		return 'Chỉ số BMI của bạn là 25 đến 29,9: Bạn đang trong tình trạng thừa cân, cần áp dụng thực đơn ăn kiêng hợp lý cùng việc luyện tập khoa học để lấy lại vóc dáng chuẩn nhất.'
	} else if(type === 4) {
		return 'Chỉ số BMI của bạn là 25 đến 29,9: Bạn đang trong tình trạng thừa cân, cần áp dụng thực đơn ăn kiêng hợp lý cùng việc luyện tập khoa học để lấy lại vóc dáng chuẩn nhất.'
	}
}

function reset() {
	document.getElementById("height").value = '';
	document.getElementById("weight").value = '';
}


window.addEventListener('load', function () {
	document.getElementById("submit").addEventListener("click", countBmi);
	document.getElementById("reset").addEventListener("click", reset);
});