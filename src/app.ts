// Load environment variables from the .env file.
require("dotenv").config();

import path from "path";
import fs from "fs";
import {Bot, Settings} from "d.mix";
import {Env} from "./defs";

// Verify that .env file exists (bot configuration).
if (!fs.existsSync(".env")) {
    console.log("Hold up! Your bot isn't configured. Run 'npm run config' to configure it. Alternatively, you can configure the .env file manually.");
    process.exit(0);
}

export const env: Env = process.env as any;

const bot: Bot = new Bot({
    settings: new Settings({
        general: {
            prefix: [env.PREFIX],
            token: env.TOKEN,
        },

        paths: {
            commands: path.join(__dirname, env.COMMANDS_DIR),
            services: path.join(__dirname, env.SERVICES_DIR)
        }
    }),

    owner: env.OWNER_ID
});

// Connect and start the bot.
bot.connect();
