class BMICalculator {
    constructor() {
        this.observers = [];

        this.weight = 0;
        this.height = 0;
    }

    addObserver(o) {
        this.observers.push(o);
    }

    notifyObservers() {
        for (let o of this.observers) {
            o.update(this);
        }
    }

    setHeight(h) {
        this.height = parseFloat(h);
        this.notifyObservers();
    }

    setWeight(w) {
        this.weight = parseFloat(w);
        this.notifyObservers();
    }

    get result() {
        const heightInMetres = this.height / 100;

        if (!this.weight || !this.height) {
            return 0;
        }

        return parseFloat(((this.weight / heightInMetres) / heightInMetres).toFixed(1));
    }
}
