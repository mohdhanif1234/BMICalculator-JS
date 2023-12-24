const calculateBMI = (e) => {
    e.preventDefault();
    const height = Number(document.getElementById('height').value)
    const weight = Number(document.getElementById('weight').value)
    const results = document.getElementById('results');
    if (height <= 0) {
        results.innerHTML = 'Please enter a valid height'
        return;
    }
    if (weight <= 0) {
        results.innerHTML = 'Please enter a valid weight'
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is: ${bmi}</span><br/>`
    if (bmi < 18.6) {
        results.innerHTML += `<span>You are under weight</span>`
    }
    else if (bmi >= 18.8 && bmi < 24.9) {
        results.innerHTML += `<span>You are in a normal range</span>`
    }
    else {
        results.innerHTML += `<span>You are overweight</span>`
    }
}


