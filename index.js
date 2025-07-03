const { exec } = require('child_process');
const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`✅ Bot logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith('$pi')) return;
  if (!config.allowedUsers.includes(message.author.id)) {
    return message.reply("❌ You don't have permission to run this command.");
  }

  const command = message.content.slice(4).trim();
  const lowerCmd = command.toLowerCase().replace(/\s+/g, ' ');

  // 🔒 Dangerous commands blacklist (with sudo auto-detection)
  const blacklist = [
    'rm',
    'mv',
    'shutdown',
    'reboot',
    'init',
    'halt',
    'mkdir',
    'mkfs',
    'dd',
    'poweroff',
    'kill ',
    'killall',
    'systemctl stop',
    'chmod 000',
    'chown root',
    ':(){:|:&};:',
    'wget',
    'curl',
    '>', '>>', '2>'
  ];

  for (const bad of blacklist) {
    if (lowerCmd.includes(`sudo ${bad}`) || lowerCmd.includes(bad)) {
      console.log(`[BLOCKED] ${message.author.tag} attempted: ${command}`);
      return message.reply(`❌ Command blocked: contains \`${bad}\``);
    }
  }

  // 🔐 Sensitive file access detection via `cat`
  const sensitiveFiles = [
    '.env',
    'config.json',
    'settings.json',
    '.git',
    '.ssh',
    'id_rsa',
    'id_rsa.pub',
    'known_hosts',
    'authorized_keys',
    'shadow',
    'passwd',
    '/etc/passwd',
    '/etc/shadow',
    '/etc/sudoers',
    '.bash_history',
    '.zsh_history',
    'credentials',
    'secrets',
    '.npmrc',
    '.docker',
    '.aws',
    '.gnupg',
    'netrc',
    'wallet.dat',
    'key.json',
    'apikey',
    'token'
  ];

  if (lowerCmd.startsWith('cat')) {
    for (const file of sensitiveFiles) {
      if (lowerCmd.includes(file)) {
        console.log(`[BLOCKED] ${message.author.tag} tried to read sensitive file: ${file}`);
        return message.reply(`❌ Access denied: reading sensitive file \`${file}\` is not allowed.`);
      }
    }
  }

  // ✅ Execute command
  exec(command, (error, stdout, stderr) => {
    if (error) {
      return message.reply(`❌ Error:\n\`\`\`\n${error.message}\n\`\`\``);
    }

    if (stderr) {
      return message.reply(`⚠️ Stderr:\n\`\`\`\n${stderr}\n\`\`\``);
    }

    const output = stdout.trim();
    if (output.length === 0) {
      return message.reply('✅ Command executed with no output.');
    }

    if (output.length > 1900) {
      return message.reply('⚠️ Output too long to display in Discord.');
    }

    message.reply(`✅ Output:\n\`\`\`\n${output}\n\`\`\``);
  });
});

client.login(config.botToken);
