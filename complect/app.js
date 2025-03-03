"use strict";
// type Base = "Classic" | "Mushroom" | "Greek" | "Napaleon" | "Peperoni";
class CSVWriter {
    constructor(paymentColumn) {
        this.paymentColumn = paymentColumn;
        this.csv = paymentColumn.join(",") + "\n";
    }
    save() { }
    addRow(payments) {
        this.csv += payments.map(payment => this.formatRow(payment)).join("");
        console.log(this.csv);
    }
    formatRow(payment) {
        return this.paymentColumn.map(col => payment[col]).join(",") + '\n';
    }
}
const file1 = new CSVWriter(["id", "amount", "to", "notes"]);
let nextPizzaId = 1;
file1.addRow([
    { id: nextPizzaId++, amount: 500, to: "John", notes: "For dinner" },
    { id: nextPizzaId++, amount: 1600, to: "Alex", notes: "For lunch" },
    { id: nextPizzaId++, amount: 200, to: "Steve", notes: "For Breakfast" },
]);
