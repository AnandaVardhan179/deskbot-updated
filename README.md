# 🧠 DeskBot – Your Personal Desktop Assistant

DeskBot is an AI-powered desktop assistant built using **Java Spring Boot** (backend) and **React + Tauri.js** (frontend). It is designed to boost productivity by enabling voice/text-triggered commands and sticky notes functionality.

---

## ✨ Features

- 🖥️ **Open Desktop Applications** via commands  
  - `open chrome`, `open vscode`, `open notepad`, `open calculator`, etc.
- 🗒️ **Sticky Notes (with SQLite persistence)**  
  - Create, delete, and color-code notes (Yellow, Green, Blue, Pink)
  - Notes are saved in SQLite DB even after shutdown
- 📜 **Command Terminal Integration**  
  - Opens Command Prompt (`cmd`) via shortcut launcher

---

## 📁 Project Structure

deskbot/
├── deskbot-api/ # Java Spring Boot backend
│ ├── src/main/java/com.deskbot.deskbot_api/
│ │ ├── CommandController.java
│ │ ├── NoteController.java
│ │ ├── NoteRepository.java
│ │ ├── Note.java
│ ├── application.properties
│ └── notes.db # SQLite database
├── frontend/ # React + Tauri (if applicable)
│ └── StickyNotes.tsx
│ └── App.tsx





🛠 Tech Stack
Java 17

Spring Boot 3

SQLite with JPA

React.js (TypeScript)

Tauri.js (for desktop packaging)




📦 Future Scope
Add voice command support 🎙️

System usage stats (RAM/CPU) display 📊

Download manager for organizing files 📁

Reminder and alarm functionality ⏰

🙌 Author
Ananda Vardhan Chekuru
GitHub: @AnandaVardhan179
