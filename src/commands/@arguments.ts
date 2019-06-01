import {Command, Context, name, description, args, Type} from "d.mix";

// Note: This command will not be loaded by Forge (as instructed by the leading @ in the command file name)
// and only serves example/template purposes.

interface ILocalArgs {
    readonly name: string;
    readonly favoriteNumber: string;
}

// Basic information of the command:
@name("args")
@description("Example use of command arguments")

// Specify the command's arguments. Keep in mind that the order of the argument objects corresponds to the input order.
@args(
    {
        // The name of the argument.
        name: "name",

        // The type of argument.
        type: Type.string
    },
    {
        name: "favoriteNumber",
        type: Type.integer
    }
)
export default class extends Command {
    // This command should be executed as follows: !args "john doe" 5
    public async run($: Context, args: ILocalArgs): Promise<void> {
        args.name; // "john doe" (string)
        args.favoriteNumber; // 5 (number)
    }
};
