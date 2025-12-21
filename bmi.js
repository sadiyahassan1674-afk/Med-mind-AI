// ===============================
// BMI CALCULATION PAGE
// ===============================
const bmiButton = document.getElementById("bmical");

if (bmiButton) {
    bmiButton.addEventListener("click", function () {
        const height = document.getElementById("height")?.value;
        const weight = document.getElementById("weight")?.value;

        if (!height || !weight || height <= 0 || weight <= 0) {
            alert("Please enter valid height and weight");
            return;
        }

        // BMI Formula
        const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        // Store data for result page
        localStorage.setItem("bmiValue", bmi);
        localStorage.setItem("bmiCategory", category);

        // Redirect to result page
        window.location.href = "bmi_result.html";
    });
}


// ===============================
// BMI RESULT PAGE
// ===============================
const bmiValueDiv = document.getElementById("bmiValue");
const bmiCategoryDiv = document.getElementById("bmiCategory");

if (bmiValueDiv && bmiCategoryDiv) {
    const bmiValue = localStorage.getItem("bmiValue");
    const bmiCategory = localStorage.getItem("bmiCategory");

    bmiValueDiv.textContent = bmiValue ? bmiValue : "--";
    bmiCategoryDiv.textContent = bmiCategory ? bmiCategory : "--";
}
