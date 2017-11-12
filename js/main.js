const calculator = new BMICalculator();

HTMLView.init(calculator);

calculator.addObserver(HTMLView);
calculator.addObserver(ConsoleView);

calculator.notifyObservers();
