import inquirer from "inquirer";
async function check() {
    let con = await inquirer.prompt([
        {
            name: "ask",
            type: "number",
            message: "Press '1' to continue or '0' to exit?\n"
        }
    ]);
    return con.ask;
}
export default check;
