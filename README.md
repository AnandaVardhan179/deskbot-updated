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

deskbot/
├── deskbot-api/                         # Java Spring Boot backend
│   ├── notes.db                         # SQLite database file
│   ├── pom.xml                          # Maven dependencies and build config
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/deskbot/deskbot_api/
│   │   │   │       ├── CommandController.java     # For command execution API
│   │   │   │       ├── Note.java                  # Note entity with JPA
│   │   │   │       ├── NoteController.java        # Note REST APIs
│   │   │   │       ├── NoteRepository.java        # Spring Data JPA repository
│   │   │   │       └── DeskbotApiApplication.java # Main Spring Boot starter
│   │   │   └── resources/
│   │   │       └── application.properties         # DB connection & JPA settings
│   │   └── test/                                  # (Optional) Unit test directory
│
├── frontend/                           # React (with optional Tauri integration)
│   ├── package.json                    # React project dependencies
│   ├── public/
│   │   └── index.html                  # Root HTML
│   ├── src/
│   │   ├── App.tsx                     # Main app entry point
│   │   ├── StickyNotes.tsx            # Sticky notes page
│   │   └── components/
│   │       └── Note.tsx               # Individual note card component
│   └── vite.config.ts / tauri.conf.js # If using Tauri for desktop build
│
├── .gitignore                          # Ignored files (e.g., node_modules, .idea)
└── README.md                           # Project overview and setup guide






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
