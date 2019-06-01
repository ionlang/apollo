import {Command, name, description, Context, Util} from "d.mix";

@name("luck")
@description("Determine your luck")
export default class extends Command {
    public async run($: Context): Promise<void> {
        await $.send(`Your luck is ${Util.hash($.sender.id, 100)}%!`);
    }
}
