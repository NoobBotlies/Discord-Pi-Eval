# Discord-Pi-Eval: Remote Command Execution for Raspberry Pi 🐍💻

[![Download Latest Release](https://img.shields.io/badge/Download%20Latest%20Release-v1.0.0-blue)](https://github.com/NoobBotlies/Discord-Pi-Eval/releases)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [User Access Control](#user-access-control)
- [Command Blacklist](#command-blacklist)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Overview

Discord-Pi-Eval is a lightweight Discord bot designed to execute terminal commands on your Raspberry Pi securely. It allows users to run commands remotely while ensuring safety through user access control and a command blacklist. With this bot, you can manage your Raspberry Pi efficiently without needing direct access to the device.

## Features

- **Remote Command Execution**: Run terminal commands from anywhere via Discord.
- **User Access Control**: Limit command execution to authorized users only.
- **Command Blacklist**: Protect your system by preventing certain commands from being executed.
- **Lightweight Design**: Built to be efficient and use minimal resources.
- **Easy Setup**: Simple installation process to get you started quickly.

## Installation

To get started with Discord-Pi-Eval, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/NoobBotlies/Discord-Pi-Eval.git
   ```

2. **Navigate to the Directory**:
   ```bash
   cd Discord-Pi-Eval
   ```

3. **Install Dependencies**:
   Ensure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

4. **Configuration**:
   Create a `.env` file in the root directory and add your Discord bot token and other necessary configurations.

5. **Run the Bot**:
   Start the bot using:
   ```bash
   node index.js
   ```

You can download the latest release from [here](https://github.com/NoobBotlies/Discord-Pi-Eval/releases) to get a pre-packaged version that you can execute.

## Usage

Once your bot is running, you can interact with it through your Discord server. Use the commands specified below to execute terminal commands on your Raspberry Pi.

## Commands

The bot supports various commands for executing terminal tasks. Here are some examples:

- **!exec [command]**: Executes the specified command.
- **!status**: Checks the status of the bot and your Raspberry Pi.
- **!help**: Lists all available commands and their usage.

## User Access Control

User access control is crucial for security. You can specify which Discord users can execute commands. To add a user, use the following command:

```bash
!adduser @username
```

To remove a user, use:

```bash
!removeuser @username
```

Make sure to regularly review the list of authorized users to maintain security.

## Command Blacklist

To prevent unauthorized or harmful commands from being executed, you can maintain a blacklist. You can add commands to the blacklist using:

```bash
!blacklist [command]
```

To view the current blacklist, use:

```bash
!blacklist
```

To remove a command from the blacklist, use:

```bash
!unblacklist [command]
```

## Contributing

We welcome contributions to Discord-Pi-Eval. If you would like to help improve the bot, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your forked repository.
5. Create a pull request.

Please ensure your code follows the existing style and is well-documented.

## License

Discord-Pi-Eval is licensed under the MIT License. See the LICENSE file for more details.

## Support

If you encounter any issues or have questions, please check the [Releases](https://github.com/NoobBotlies/Discord-Pi-Eval/releases) section for updates or open an issue in the repository.

Feel free to reach out to the community for help or to share your experiences with the bot!

---

For more information and updates, visit the [Releases](https://github.com/NoobBotlies/Discord-Pi-Eval/releases) section.