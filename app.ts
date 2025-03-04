// type Base = "Classic" | "Mushroom" | "Greek" | "Napaleon" | "Peperoni";

type PaymentColumn = ("id" | "amount" | "to" | "notes")[];

import { appendFileSync} from "fs"

interface Payment {
    id: number;
    amount: number;
    to: string;
    notes: string;
}

class CSVWriter {
    constructor(private paymentColumn: PaymentColumn) {
        this.csv = paymentColumn.join(",") + "\n";
    }

    private csv: string;

    save(pathFile: string) {
        appendFileSync( pathFile, this.csv)

        this.csv = "";
     }

    addRow(payments: Payment[]) {
        this.csv += payments.map(payment => this.formatRow(payment)).join("");
        
    }

    formatRow(payment: Payment) {
        return this.paymentColumn.map(col => payment[col]).join(",") + '\n';
    }
}

const file1 = new CSVWriter(["id", "amount", "to", "notes"]);

let nextPizzaId = 1;

file1.addRow([
    { id: nextPizzaId++, amount: 500, to: "John", notes: "For dinner" },
    { id: nextPizzaId++, amount: 1600, to: "Alex", notes: "For lunch" },
    { id: nextPizzaId++, amount: 200, to: "Steve", notes: "For Breakfast" },
])


file1.save('./data/payment.csv')