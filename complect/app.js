"use strict";
// type Base = "Classic" | "Mushroom" | "Greek" | "Napaleon" | "Peperoni";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(paymentColumn) {
        this.paymentColumn = paymentColumn;
        this.csv = paymentColumn.join(",") + "\n";
    }
    save(pathFile) {
        (0, fs_1.appendFileSync)(pathFile, this.csv);
        this.csv = "";
    }
    addRow(payments) {
        this.csv += payments.map(payment => this.formatRow(payment)).join("");
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
file1.save('./data/payment.csv');
