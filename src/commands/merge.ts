import {Command, Context, name, description, Constraint} from "d.mix";
import {exec} from "child_process";
import {env} from "../app";

@name("merge")
@description("Merge development branch with the master branch on GitHub")
@Constraint.cooldown(3)
export default class extends Command {
    public async run($: Context): Promise<void> {
        return new Promise((resolve) => {
            exec(`cd ${env.ION_DIR} && git checkout master && git merge dev && git push && git checkout dev`, (error, output: string) => {
                if (error) {
                    $.fail(`There was an error: ${error.message}`);
                    resolve();

                    return;
                }

                $.ok(`\`\`\`\n${output}\n\`\`\``);
                resolve();
            });
        });
    }
};
