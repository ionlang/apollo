import {Snowflake} from "discord.js";

/**
 * These variables reflect the configuration from the .env file.
 */
export interface Env {
    readonly TOKEN: string;
    readonly OWNER_ID: Snowflake;
    readonly PREFIX: string;
    readonly COMMANDS_DIR: string;
    readonly SERVICES_DIR: string;
    readonly ION_DIR: string;
    readonly CIRCLE_CI_KEY: string;
}
