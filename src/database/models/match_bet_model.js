import betSchema from "../schemas/bet_schema.js";
import conn from "../conn.js";
import Match from "./match_model.js";
import competitorSchema from "./competitor_model.js";

const Schema = conn.Schema;

const matchBetSchema = new Schema({
    bet: betSchema,
    match: Match,
    odd: {
        required: true,
        type: Schema.Types.Number
    },
    competitor: competitorSchema
})

const matchBet = conn.model("MatchBet", matchBetSchema);

export default matchBet;