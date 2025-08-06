package com.deskbot.deskbot_api.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CommandController {

    @GetMapping("/command")
    public String handleCommand(@RequestParam String text) {
        try {
            String command = text.trim().toLowerCase();


            Map<String, String> appMap = Map.of(
                    "open chrome", "cmd /c start chrome",
                    "open notepad", "notepad.exe",
                    "open calculator", "calc.exe",
                    "open explorer", "explorer.exe",
                    "open paint", "mspaint.exe",
                    "open cmd", "cmd /c start \"\" \"C:\\Users\\Anand\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\System Tools\\Command Prompt.lnk\"",
                    "open vscode", "C:\\Users\\Anand\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"
            );

            if (appMap.containsKey(command)) {
                String execCmd = appMap.get(command);


                if (execCmd.endsWith(".exe") || execCmd.contains(".lnk")) {
                    new ProcessBuilder("cmd", "/c", execCmd).start();
                } else {
                    Runtime.getRuntime().exec(execCmd);
                }

                return command.replace("open ", "").toUpperCase() + " launched!";
            }

            return "❌ Command not recognized.";
        } catch (Exception e) {
            return "🔥 Error: " + e.getMessage();
        }
    }
}
