function calcBMI() {
    var weight = document.bmiform.pounds.value*(2.2);
    var height = document.bmiform.inches.value;
    document.bmiform.bmi.value = parseInt((weight * 703) / (height * height));
  } 