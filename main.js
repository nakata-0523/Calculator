//足し算
function btn_puls() {
    var input1 = document.getElementById("value1");
    var input2 = document.getElementById("value2");
    var result = document.getElementById("result-value");
    total = parseFloat(input1.value) + parseFloat(input2.value);

    if (isNaN(total) == true) {
        result.value = "※計算に失敗しました";
    } else {
        result.value = total;
    }
}

//引き算
function btn_minus() {
    var input1 = document.getElementById("value1");
    var input2 = document.getElementById("value2");
    var result = document.getElementById("result-value");
    var total = parseFloat(input1.value) - parseFloat(input2.value);
    result.value = total;

    if (isNaN(total) == true) {
        result.value = "※計算に失敗しました";
    } else {
        result.value = total;
    }
}

//掛け算
function btn_multiply() {
    var input1 = document.getElementById("value1");
    var input2 = document.getElementById("value2");
    var result = document.getElementById("result-value");
    result.value = null;
    var total = parseFloat(input1.value) * parseFloat(input2.value);
    result.value = total;

    if (isNaN(total) == true) {
        result.value = "※計算に失敗しました";
    } else {
        result.value = total;
    }
}

//割り算
function btn_division() {
    var input1 = document.getElementById("value1");
    var input2 = document.getElementById("value2");
    var result = document.getElementById("result-value");
    var total = parseFloat(input1.value) / parseFloat(input2.value);
    result.value = total;

    if (isNaN(total) == true) {
        result.value = "※計算に失敗しました";
    } else {
        result.value = total;
    }
}