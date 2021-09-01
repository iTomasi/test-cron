import cron from "node-cron";

let currentValue: number = 0;

cron.schedule("*/10 * * * * *", () => {
    currentValue += 1;

    console.log(`cron exected`);
    console.log(`currentvaluecron: ${currentValue}`);
});

const getValue = () => currentValue;

export { getValue };
