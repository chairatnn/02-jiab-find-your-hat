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

<!-- Thinking Process -->
<!-- 1. Workflow Planning -->

[Game start → Read input → Update position → Check rules → End/Continue]

<!-- 2.1. Board Functions (Hardcoded) -->

  -> กำหนดสัญลักษณ์ในเกมส์ ดังนี้
      ผู้เล่น: ใช้ * แทนตำแหน่งปัจจุบันของผู้เล่นและเส้นทางที่เดินผ่าน
      พื้น:   ใช้ ░ แทนพื้นที่ที่ผู้เล่นสามารถเดินผ่านได้
      หลุม:  ใช้ O แทนหลุมที่หากตกลงไปแล้วจะแพ้ทันที
      หมวก: ใช้ ^ แทนหมวกที่เป็นเป้าหมายของเกม
  -> สร้าง Object สำหรับกระดานเกมแต่ละครั้ง
  -> เก็บข้อมูลกระดาน 2 มิติ ที่ถูกส่งเข้ามา
  -> กำหนดตำแหน่งเริ่มต้นของผู้เล่นแถวและคอลัมน์ (0, 0) 

  *░O
  ░O░
  ░^░

<!-- 2.2. Board Functions (Generated) -->

  -> สร้างกระดานที่มีพื้นว่าง, หลุม, หมวกและผู้เล่น
  -> สร้างกระดานด้วยการรับค่า กว้างxยาว 
  -> สร้างตำแหน่งหลุมในกระดาน แบบสุ่ม
  -> สร้างตำแหน่งหมวกและผู้เล่น แบบสุ่มและไม่เริ่มตำแหน่งเดียวกัน

<!-- 3. Input Functions -->

  -> function สร้างกระดานแบบสุ่ม โดยรับค่าขนาด row col และสถานะเกมเริ่มต้น true
  -> function แสดงผลกระดาน โดยให้ล้างหน้าจอเพื่อให้ผู้เล่นเห็นสถานะกระดานใหม่ทุกครั้ง 
  -> function ทิศทางการเดินของผู้เล่น *
  -> function ตรวจสอบกฎและสถานะของเกมส์
  -> function การรันเกมส์และการวน loop

<!-- 4. Movement Functions -->

  -> รับค่าทิศทางการเดินจากผู้เล่น (w,a,s,d)
  -> กำหนดค่าทิศทางการเดิน ดังนี้ 
      w = ขึ้น
      a = ซ้าย
      s = ลง
      d = ขวา
  -> หากป้อนค่าอื่นๆ ให้มีข้อความแจ้งเตือน

<!-- 5. Game Rule Functions -->

  -> สร้างกฎตรวจสอบสถานะการเดิน
    -> ตรวจสอบการเจอหมวก ^ ชนะ
    -> ตรวจสอบการตกหลุม O แพ้
    -> ตรวจสอบออกนอกกระดาน แพ้
    -> ถ้าไม่เข้าเงื่อนไขให้อัพเดทตำแหน่งผู้เล่นแล้วเล่นต่อไป *

<!-- 6. Game Play Loop -->

  -> เงื่อนไขการเล่นเกมส์
    -> ถ้าผู้เล่นเดินแล้วยังไม่เจอหมวก ยังไม่ตกหลุม ยังไม่ออกนอกกรอบ เกมจะยังไม่จบ ให้ทำงานซ้ำ โดยให้ผู้เล่นเลือกทิศทางเดินต่อไป
    -> ถ้าเจอหมวกให้พิมพ์ "Wins by finding the hat."
    -> ถ้าตกหลุมให้พิมพ์ "Loses by landing in a hole."
    -> ถ้าออกนอกกระดานให้พิมพ์ "Loses by moving outside the board."


[Back to Table of Contents](#table-of-contents)

---
