module.exports = {
    server: {
        domain: "sunflower.robloxbot.xyz",
        https: true,
        httpPort: 8080,
    },

    Discord: {
        // —— Things that are required for the whole project to work.
        token: "MTE5NTMyNDUzNjA5MTA2MjMzMg.GuqxBj.YIp-E81QNsP0ZrUjWhuJWhI6M4UDw-XIhmTnpg", // —— Your bot's token.
        botId: "1195324536091062332", // —— The bot's ID.
        guildId: "1188813133075185674", // —— The server ID on where the commands will be deployed.
        verifiedRole: "1193209377516179526", // —— Role that will be added to the user when they verify their account.

        // —— For users that want to have a role removed upon verification, if you want this, set remove-role to true, and set your remove role ID.
        removeRole: false,
        removeRoleId: "",

        // —— Set the bot's presence, for statusType see: https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType
        statusType: 1, // 1 (STREAMING), 2 (LISTENING), 3 (WATCHING), 5 (COMPETING). Default is 0 (PLAYING). 
        statusMsg: "H!help | sunflower",

        // —— By default, rules are set to disabled, this means rules will be hidden. If you want to use the rules function, change disabled to your rules. Please ensure you use \n for each line break and do not use any symbols that could interfear with JSON.
        rulesEnabled: true,
        rules: "Type your rules here if rulesEnabled is enabled, ensure to use \n for new lines"
    },

    reCAPTCHA: {
        secretKey: "",
        publicKey: ""
    }
}
