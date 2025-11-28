"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// การเริ่มเกมส์แสดงผลกระดาน และล้างหน้าจอใหม่หลังจากเคลื่อนที่
class Field {
	constructor(board) {
		this.board = board;
		this.playerRow = 0;
		this.playerCol = 0;
		this.playing = true;
	}

	print() {
		console.clear();
		this.board.forEach((row) => {
			console.log(row.join(""));
		});
	}

	// Game Loop ทำงานวนซ้ำเมื่อ this.playing ยังเป็น true 
	play() {
		while (this.playing) {
			this.print();
			const input = prompt("Which way? (w/a/s/d): ");
			this.move(input);
			this.checkWin();
		}
	}

	// การเคลื่อนที่ตามทิศทางที่ผู้เล่นส่ง input เข้ามา (w,a,s,d)
	move(direction) {
		switch (direction) {
			case "w":
				this.playerRow--;
				break;
			case "a":
				this.playerCol--;
				break;

			case "s":
				this.playerRow++;
				break;
			case "d":
				this.playerCol++;
				break;
			default:
				console.log("Invalid input. Please use w, a, s, or d.");
				break;
		}
	}

	// การตรวจสอบกฎและสถานะ 1.ออกนอกกระดาน 2.ตกหลุม 3.เจอหมวก 4.ดำเนินการต่อ
	checkWin() {
		if (
			this.playerRow < 0 ||
			this.playerRow >= this.board.length ||
			this.playerCol < 0 ||
			this.playerCol >= this.board[0].length
		) {
			console.log("You fell off the board!");
			this.playing = false;
		} else if (this.board[this.playerRow][this.playerCol] === HOLE) {
			console.log("You fell in a hole!");
			this.playing = false;
		} else if (this.board[this.playerRow][this.playerCol] === HAT) {
			console.log("You found your hat!");
			this.playing = false;
		} else {
			this.board[this.playerRow][this.playerCol] = PLAYER;
		}
	}

	// การสร้างกระดานแบบสุ่ม โดยรับค่าความสูง ความกว้้าง และเปอร์เซ็นต์หลุม
	static generateField(height, width, percentage) {
		const field = new Array(height).fill(0).map(() => new Array(width));
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const prob = Math.random();
				field[y][x] = prob > percentage ? EMPTY : HOLE;
			}
		}

		// การสุ่มตำแหน่งผู้เล่นและหมวก โดยไม่ให้เริ่มต้นที่ตำแหน่งเดียวกัน
		const hatY = Math.floor(Math.random() * height);
		const hatX = Math.floor(Math.random() * width);
		field[hatY][hatX] = HAT;

		let playerY = Math.floor(Math.random() * height);
		let playerX = Math.floor(Math.random() * width);
		while (playerY === hatY && playerX === hatX) {
			playerY = Math.floor(Math.random() * height);
			playerX = Math.floor(Math.random() * width);
		}
		field[playerY][playerX] = PLAYER;

		const gameField = new Field(field);
		gameField.playerRow = playerY;
		gameField.playerCol = playerX;
		return gameField;
	}
}

// การ run เกมส์ให้เริ่มทำงานใน Terminal
const myField = Field.generateField(10, 20, 0.2);
myField.play();
