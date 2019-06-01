import {Command, Context, name, description, Constraint} from "d.mix";

@name("hello")
@description("Say hello world")
@Constraint.cooldown(3) // Must wait 3 seconds between executions (per-user)
export default class extends Command {
    public async run($: Context): Promise<void> {
        await $.ok("Hello world"); // Success embed
        await $.fail("Hello world"); // Failure embed (auto-deletes; time depends on the message length)
    }
};
