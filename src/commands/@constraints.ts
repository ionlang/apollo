import {Command, Context, Permission, ChatEnv, RestrictGroup, name, description, constraints, Constraint} from "d.mix";

// Note: This command will not be loaded by Forge (as instructed by the leading @ in the command file name)
// and only serves example/template purposes.

// Basic information of the command:
@name("constraints")
@description("Example use of command constraints")

// Apply multiple constraints:
@constraints({
    cooldown: 3, // Cooldown between executions in seconds (per-user).
    selfPermissions: [Permission.SendMessages], // Permission(s) required by the bot.
    issuerPermissions: [Permission.ManageMessages], // Permission(s) required by the executer.
    environment: ChatEnv.Guild, // Limit command to specific environments (such as NSFW channels).
    specific: [RestrictGroup.BotOwner] // Limit command to the bot owner.
})

// If you need to apply just a single constraint:
@Constraint.cooldown(3)
export default class extends Command {
    public async run($: Context): Promise<void> {
        //
    }
};
