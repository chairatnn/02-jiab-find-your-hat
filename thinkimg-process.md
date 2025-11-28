# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

<h1>Thinking Process</h1>
<h2>1. Workflow Planning</h2>

[Game start → Read input → Update position → Check rules → End/Continue]

  <h3>1.1 Game start</h3>

    - Input: "npm run dev"
  
    - Output: generate game board and print "Which way? (w/a/s/d): "
  
    - Edge case: invalid input then can not start game

  <h3>1.2 Read input</h3>
    
    - Input: "w/a/s/d"
    
    - Output: calculate direction
    
    - Edge case: invalid input then print "warning message"

  <h3>1.3 Update position</h3>
    
    - Input: "w/a/s/d"
    
    - Output: move to "up/left/down/right"
    
    - Edge case: detect error in Read input stage

  <h3>1.4 Check rules</h3>
    
    - Input: position row,col
    
    - Output: if position = hat then print "Wins by finding the hat."
          then if position = hole then print "Loses by landing in a hole."
          then position != boundaries then print "Loses by moving outside the board."
          else update new position and play continue.
    
    - Edge case: detect error in Read input stage

  <h3>1.5 End/Continue</h3>
    
    - Input: player = hat || hole || out-boundaries
    
    - Output: quit game and return to terminal
    
    - Edge case: detect error in Read input stage

  <h3>2.1. Board Functions (Hardcoded)</h3>

* ░ O
░ O ░
░ ^ ░

    - How the board is represented (2D array).

    - function printBoard(board) {
	      board.forEach((row) => {
		      console.log(row.join(' ')); 
	      });
      }

      - ใช้คำสั่ง forEach ให้วนลูปผ่านแต่ละแถว(row) ใน board 
      - ใช้ .join(' ') เพื่อรวมค่าในแถว โดยเว้นให้มีช่องว่างคั่นไว้
      - แสดงผลค่า PLAYER, EMPTY, HOLE, HAT แต่ละแถวตามลำดับ

  <h3>2.2. Board Functions (Generated)</h3>


<h2>3. Input Functions</h2>

    - Input: รับค่าทิศทางการเดิน (w,a,s,d) จากผู้เล่น
    - Output: ส่งค่า (w,a,s,d) ที่รับมาไปเช็คกับ function movement
    - Edge cases: หากป้อนค่าอื่นๆ ให้มีข้อความแจ้งเตือน
    - How player position is updated.  // รับค่า (w/a/s/d) ที่ได้จากผู้เล่นมาเก็บไว้ที่ตัวแปรเพื่อเตรียมส่งไปเช็คกับ function movement

<h2>4. Movement Functions</h2>

    - Input: ค่า (w,a,s,d) ที่มาจาก Input Function  
    - output: ทิศทางการเดินของผู้เล่น w = ขึ้น, a = ซ้าย, s = ลง, d = ขวา
    - Edge cases: ตรวจสอบการรับค่าที่ถูกต้องที่ Input Function
    - How player position is updated. // นำค่าตัวแปรที่ได้มาจาก Input funtion เช็คกับเงื่อนไขทิศทางการเดินแล้ว update position

<h2>5. Game Rule Functions</h2>

    - How to determine win/loss conditions.
    - Handling messages for win/loss conditions. // สร้างกฎตรวจสอบสถานะการเดิน
      - ตรวจสอบ ถ้าเจอหมวก ^ ชนะ
      - ตรวจสอบ ถ้าตกหลุม O แพ้
      - ตรวจสอบ ถ้าออกนอกกระดาน แพ้
      - ถ้าไม่เข้าเงื่อนไขใดๆ ให้อัพเดทตำแหน่งผู้เล่น แล้วเล่นต่อไป

<h2>. Game Play Loop</h2>

    - How to determine win/loss conditions.
    - Handling messages for win/loss conditions // เงื่อนไขการเล่นเกมส์ 
      - ถ้าเจอหมวกให้พิมพ์ "Wins by finding the hat."
      - ถ้าตกหลุมให้พิมพ์ "Loses by landing in a hole."
      - ถ้าออกนอกกระดานให้พิมพ์ "Loses by moving outside the board."
      - ถ้าผู้เล่นเดินแล้วยังไม่เจอหมวก ยังไม่ตกหลุม ยังไม่ออกนอกกรอบ เกมจะยังไม่จบ ให้ทำงานซ้ำ โดยให้ผู้เล่นเลือกทิศทางเดินต่อไป

    - How to update the board when the player moves.
      - ถ้าผู้เล่นเดินยังไม่เข้าเงื่อนไข Rule Function เกมจะยังไม่จบ จะให้โปรแกรมทำซ้ำ โดยเรียกแสดงกระดานปัจจุบัน แล้วขอรับ Input จากผู้เล่นอีกเพื่อคำนวณตำแหน่งใหม่ แล้วตรวจสอบว่าการเคลื่อนที่นั้นทำให้เกิดการชนะ/แพ้ หรือเดินต่อไป
      - ให้มีฟังก์ชันสำหรับสร้างกระดาน โดยรับค่าความสูง(height), ความกว้าง(width), และเปอร์เซ็นต์หลุม(percentage) และทำการสุ่มหมวกกับผู้เล่น โดยมีเงื่อนไขตำแหน่งต้องไม่เริ่มต้นที่ตำแหน่งเดียวกัน


[Back to Table of Contents](#table-of-contents)

---