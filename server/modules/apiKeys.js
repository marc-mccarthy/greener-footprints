require('dotenv').config();

let CarbonKey = process.env.CARBON_KEY;
let GoogleKey = process.env.GOOGLE_KEY;
let ClimatiqKey = process.env.CLIMATIQ_KEY;


module.exports = {
    CarbonKey,
    GoogleKey,
    ClimatiqKey,
}