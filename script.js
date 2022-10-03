/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.read = function () {
    this.a = +prompt("Įveskite pirmą skaičių", 0);
    this.b = +prompt("Įveskite antrą skaičių", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };
  this.subract = function () {
    return this.a - this.b;
  };
  this.multiply = function () {
    return this.a * this.b;
  };
  this.divide = function () {
    return this.a / this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Skaičių suma yra " + calculator.sum());
alert("Skirtumas yra " + calculator.subract());
alert("Sąndauga yra " + calculator.multiply());
alert("Dalmuo yra " + calculator.divide());
