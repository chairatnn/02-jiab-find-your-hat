"use strict";
import promptSync from 'prompt-sync'; 
const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// --- Board dimensions ---
const FIELD_HEIGHT = 10;
const FIELD_WIDTH = 10;
const HOLE_PERCENTAGE = 0.2; 

// Global Game State 
let board;
let playerRow;
let playerCol;
let playing = true;

let boardHeight;
let boardWidth;


// 1. BOARD GENERATION FUNCTION
/**
 * สร้างกระดานเกมแบบสุ่มตามขนาดและเปอร์เซ็นต์หลุมที่กำหนด
 * และกำหนดตำแหน่งเริ่มต้นของผู้เล่นและหมวก
 */
function generateBoard(height, width, percentage) {
    const field = [];
    
    // 1. สร้างพื้นที่หลักและสุ่มวาง HOLE
    for (let r = 0; r < height; r++) {
        const row = [];
        for (let c = 0; c < width; c++) {
            // สุ่ม: ถ้า Math.random() > percentage (เช่น 0.2) จะเป็น EMPTY (80%)
            const prob = Math.random();
            row.push(prob > percentage ? EMPTY : HOLE);
        }
        field.push(row);
    }
    
    // 2. สุ่มวาง HAT - ต้องไม่ทับ HOLE
    let hatY, hatX;
    do {
        hatY = Math.floor(Math.random() * height);
        hatX = Math.floor(Math.random() * width);
    } while (field[hatY][hatX] === HOLE); // ตรวจสอบไม่ให้ทับหลุม

    field[hatY][hatX] = HAT;
    
    // 3. กำหนดตำแหน่งเริ่มต้นของผู้เล่นแบบสุ่ม
    // ต้องไม่ทับ HOLE หรือ HAT
    let playerY, playerX;
    do {
        playerY = Math.floor(Math.random() * height);
        playerX = Math.floor(Math.random() * width);
    } while (field[playerY][playerX] === HOLE || field[playerY][playerX] === HAT); 
    // ตรวจสอบให้มั่นใจว่าตำแหน่งเริ่มต้นของผู้เล่นเป็นช่องว่าง EMPTY เท่านั้น

    // อัปเดต Global State และวางสัญลักษณ์ PLAYER
    playerRow = playerY;
    playerCol = playerX;
    field[playerRow][playerCol] = PLAYER;

    return field;
}

// 2. GAME FUNCTIONS

function printBoard(board) {
    console.clear(); // ล้างจอเพื่อให้เห็นกระดานใหม่
    for (const row of board) {
        // ใช้ join(' ') เพื่อให้ได้รูปแบบตารางที่อ่านง่าย (* ░ O)
        console.log(row.join(" "));
    }
}

function checkGameStatus(newRow, newCol) {
    // 1. ตรวจสอบการออกนอกขอบเขต
    if (newRow < 0 || newRow >= boardHeight || newCol < 0 || newCol >= boardWidth) {
        return "lose-bounds"; // Out of bounds
    }
    
    const targetTile = board[newRow][newCol];
    
    // 2. ตรวจสอบหมวก/หลุม
    if (targetTile === HAT) {
        return "win";
    } else if (targetTile === HOLE) {
        return "lose-hole";
    }
    
    return "continue";
}

function movePlayer(move) {
    let newRow = playerRow;
    let newCol = playerCol;

    switch (move) {
        case 'up':
            newRow--;
            break;
        case 'down':
            newRow++;
            break;
        case 'left':
            newCol--;
            break;
        case 'right':
            newCol++;
            break;
    }
    return { newRow, newCol };
}

function handleInput() {
    const input = prompt("Which way? (w/a/s/d): ").toLowerCase();
    switch (input) {
        case 'w':
            return 'up';
        case 's':
            return 'down';
        case 'a':
            return 'left';
        case 'd':
            return 'right';
        default:
            console.log("Invalid input. Use w, a, s, d.");
            return null;
    }
}

function updateBoard(oldRow, oldCol, newRow, newCol) {
    // ทำเครื่องหมายตำแหน่งเก่าเป็นเส้นทางที่เดินแล้ว (ใช้สัญลักษณ์ PLAYER)
    board[oldRow][oldCol] = PLAYER; 
    
    // วางผู้เล่นในตำแหน่งใหม่
    board[newRow][newCol] = PLAYER; 
    
    // อัปเดต Global State
    playerRow = newRow;
    playerCol = newCol;
}

// 3. MAIN GAME LOOP

function gameLoop() {
    // กำหนดค่าเริ่มต้นของกระดาน
    board = generateBoard(FIELD_HEIGHT, FIELD_WIDTH, HOLE_PERCENTAGE);
    
    // กำหนดขนาดกระดานจริงหลังจากสร้าง
    boardHeight = board.length;
    boardWidth = board[0].length;
    
    while (playing) {
        printBoard(board);
        const move = handleInput();
        
        if (move) {
            const { newRow, newCol } = movePlayer(move);
            const status = checkGameStatus(newRow, newCol);

            if (status === "win") {
                // อัปเดตกระดานเพื่อแสดงว่าไปถึงหมวกแล้ว
                board[newRow][newCol] = HAT; 
                printBoard(board);
                console.log("\n*** You found your hat! You win! ***");
                playing = false;
            } else if (status === "lose-hole") {
                // อัปเดตกระดานเพื่อแสดงว่าตกลงไปในหลุม
                board[newRow][newCol] = 'X'; // อาจใช้ 'X' เพื่อแสดงว่าแพ้ที่ช่องนี้
                printBoard(board);
                console.log("\n!!! You fell into a hole! Game Over! !!!");
                playing = false;
            } else if (status === "lose-bounds") {
                printBoard(board);
                console.log("\n!!! You moved off the board! Game Over! !!!");
                playing = false;
            } else {
                updateBoard(playerRow, playerCol, newRow, newCol);
            }
        }
    }
    prompt("Press Enter to exit..."); // รอให้ผู้ใช้กด Enter ก่อนปิด Terminal
}

// เริ่มเกม!
gameLoop();