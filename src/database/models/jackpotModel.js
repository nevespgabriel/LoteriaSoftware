import betSchema from "../schemas/bet_schema";
import conn from "../conn.js";

const Schema = conn.Schema;

const jackpotBetSchema = new Schema({
    bet: betSchema,
    numbers: [Schema.Types.Number]
})

const JackpotBet = conn.model("Jackpot", jackpotBetSchema);

export default JackpotBet;