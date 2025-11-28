“use strict”;
import promptSync from “prompt-sync”;
const prompt = promptSync({ sigint: true });
// Board tiles
const PLAYER = “*”;
const EMPTY = “░”;
const HOLE = “O”;
const HAT = “^”;
const PATH = ” “;
class Field {
    constructor(field) {
        this.field = field;
        this.playerX = 0;
        this.playerY = 0;
        this.field[0][0] = PLAYER;
    }
    print() {
        this.field.forEach(row => {
            console.log(row.join(“”));
        });
    }
    move(direction) {
        let newX = this.playerX;
        let newY = this.playerY;
        switch (direction) {
            case “w”:
                newY -= 1;
                break;
            case “s”:
                newY += 1;
                break;
            case “a”:
                newX -= 1;
                break;
            case “d”:
                newX += 1;
                break;
            default:
                console.log(“Invalid input. Use w, a, s, or d.“);
                return;
        }
        if (this.isOutOfBounds(newX, newY)) {
            console.log(“Out of bounds! Game over.“);
            process.exit();
        }
        if (this.field[newY][newX] === HOLE) {
            console.log(“You fell in a hole! Game over.“);
            process.exit();
        }
        if (this.field[newY][newX] === HAT) {
            console.log(“You found the hat! You win!“);
            process.exit();
        }
        this.field[this.playerY][this.playerX] = PATH;
        this.playerX = newX;
        this.playerY = newY;
        this.field[this.playerY][this.playerX] = PLAYER;
    }
    isOutOfBounds(x, y) {
        return y < 0 || y >= this.field.length || x < 0 || x >= this.field[0].length;
    }
    static generateField(height, width, percentage) {
        const field = Array(height).fill(null).map(() => Array(width).fill(EMPTY));
        const hatY = Math.floor(Math.random() * height);
        const hatX = Math.floor(Math.random() * width);
        field[hatY][hatX] = HAT;
        const numHoles = Math.floor(height * width * (percentage / 100));
        for (let i = 0; i < numHoles; i++) {
            let holeY, holeX;
            do {
                holeY = Math.floor(Math.random() * height);
                holeX = Math.floor(Math.random() * width);
            } while (field[holeY][holeX] !== EMPTY);
            field[holeY][holeX] = HOLE;
        }
        return field;
    }
}
const myField = new Field(Field.generateField(10, 10, 20));
function gameLoop() {
    while (true) {
        myField.print();
        const direction = prompt(“Which way? (w/a/s/d): “);
        myField.move(direction);
    }
}
gameLoop();