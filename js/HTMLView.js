const HTMLView = {
    model: null,

    e: {
        displayContainer: document.getElementById('bmi-display-container'),
        value: document.getElementById('bmi-value'),
        rangeText: document.getElementById('bmi-range-text'),
        inpHeight: document.getElementById('inp-height'),
        inpWeight: document.getElementById('inp-weight')
    },

    init(model) {
        this.model = model;

        this.e.inpHeight.addEventListener('input', () => {
            this.model.setHeight(this.e.inpHeight.value);
        });

        this.e.inpWeight.addEventListener('input', () => {
            this.model.setWeight(this.e.inpWeight.value);
        });
    },

    setDisplayValue(v) {
        /* Find correct range to represent BMI. */
        let bmiRange = '';
        if (v < 18.5) {
            bmiRange = 'underweight';
        } else if (v >= 18.5 && v < 25) {
            bmiRange = 'normal';
        } else if (v >= 25 && v < 30) {
            bmiRange = 'overweight';
        } else {
            bmiRange = 'obese';
        }

        this.e.value.innerHTML = v;
        this.e.rangeText.innerHTML = bmiRange;
        this.e.displayContainer.className = bmiRange;
    },

    update() {
        this.setDisplayValue(this.model.result);
    }
};
