# Discord Pi Eval Bot 🔧📟

A lightweight Discord bot that lets authorized users run safe terminal commands on a Raspberry Pi (or any Linux server) via Discord messages.

---

## 🚀 Features

- Run shell commands remotely through Discord (e.g. `pm2 restart name`, `ls`, `uptime`)
- Restrict command execution to specific Discord user IDs
- Block dangerous commands with an improved blacklist that detects commands run with or without `sudo` (e.g. `rm`, `shutdown`, `kill`, etc)
- Prevent reading sensitive files via `cat` (e.g. `.env`, `config.json`, SSH keys, password files, and more)
- Logs blocked command attempts to the console for auditing
- Sends command output or errors back to Discord
- Built with [discord.js v14](https://discord.js.org/)

---

## ⚙️ Prerequisites

- Node.js **v16.9.0+**
- A Discord bot token ([Create one here](https://discord.com/developers/applications))
- `pm2` installed on your Pi (if you want to manage processes with pm2)
- Bot hosted and run on your Raspberry Pi or Linux server

---

## 🛠️ Setup Instructions

1. **Clone or download the repo**

2. **Install dependencies:**

    npm install

3. **Configure your bot:**

    - Copy `example.config.json` to `config.json`
    - Replace `"YOUR_BOT_TOKEN_HERE"` with your Discord bot token
    - Replace user IDs in `"allowedUsers"` with the Discord IDs authorized to run commands

    Example:

    ```bash
    {
      "botToken": "YOUR_BOT_TOKEN_HERE",
      "allowedUsers": ["123456789012345678", "234567890123456789"]
    }
    ```

4. **Run the bot:**

    npm start

    > Tip: Use pm2 to keep the bot running persistently:
    >
    > pm2 start index.js --name pibot

---

## 🧪 Usage

Send commands in Discord prefixed with `$pi`, for example:

    $pi pm2 restart process-name
    $pi ls -lah
    $pi uptime

The bot will execute the command on the host machine and reply with the output.

*Can change the prefix by editing the line below in `index.js`*  
`  if (!message.content.startsWith('$pi')) return;`

---

## 🔒 Security & Safety

- Only users listed in `allowedUsers` can run commands.
- The blacklist blocks dangerous commands whether run plainly or prefixed with `sudo` (e.g. `rm`, `shutdown`, `reboot`, etc.).
- Attempts to read sensitive files via `cat` on files like `.env`, `config.json`, SSH keys, password files, and other sensitive system files are blocked.
- Blocked command attempts are logged to the console for auditing and monitoring.
- **Do not** share your bot token or allowed user IDs publicly.
- Avoid enabling commands that require `sudo` without proper safeguards.
- Always review and maintain your blacklist and sensitive file list as needed.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributions & Improvements

Feel free to fork, modify, or suggest improvements! If you want help adding slash commands, environment variable support, or more advanced security, just ask.

---

Enjoy managing your Pi remotely through Discord! 🚀

---

## Author

slapped together by [rich](https://richw.xyz)
