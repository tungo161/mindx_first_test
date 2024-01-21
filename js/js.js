function checkPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }    
    return true;
}
function resultFunction() {
    var a = document.getElementById("a_id").value;
    var b = document.getElementById("b_id").value;
    var listPrimeNumber = [];
    var sum = 0;
    if (!Number.isInteger(parseInt(a)) || !Number.isInteger(parseInt(b))) {
        alert('a và b phải là số');
        return;
    }
    else if(parseInt(a) > parseInt(b)){
        alert('a phải nhỏ hơn b');
    }
    else{
        document.getElementById("number_a").textContent = a;
        document.getElementById("number_b").textContent = b;
        for (let num = a; num <= b; num++) {
        if (checkPrimeNumber(num)) {
            listPrimeNumber.push(num);
            sum += parseInt(num);
        }
        document.getElementById("result_list").textContent = listPrimeNumber.join(", ");
        document.getElementById("result_sum").textContent = sum;
    }
    }

}
function numberOneTriangle(){
    var size = document.getElementById("size_triangle").value;
    if (!Number.isInteger(parseInt(size))){
        alert("Vui lòng nhập giá trị số");
    }
    else if(parseInt(size) < 1 || parseInt(size) >10){
        alert("Vui lòng nhập số từ khoảng 1 đến 10");
    }
    else{
        var result = document.getElementById('result_triangle');
        for (var i = 0; i < parseInt(size); i++) {
        for (var j = (parseInt(size) - i); j <= parseInt(size); j++){
            result.innerHTML += '<span>*</span>';
        }
        result.innerHTML += '<br>';
        }
    }
}
var items = document.querySelectorAll('.menu_list_item');
items.forEach(function(item) {
    item.addEventListener('click', function() {
    items.forEach(function(innerItem) {
        innerItem.classList.remove('active');
    });
    item.classList.add('active');
    });
});