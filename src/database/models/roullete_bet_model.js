import conn from "../conn.js";
import betSchema from "../schemas/bet_schema.js"

const Schema = conn.Schema;

const roulleteBetSchema = new Schema({
    bet: betSchema,
    betNumber: {
        type: Schema.Types.Number,
        required: true,
        min: 1,
        max: 100
    },
    drawnNumber: {
        type: Schema.Types.Number,
        required: true
    }
});

const RoulleteBet = conn.model("RoulleteBet", roulleteBetSchema);

export default RoulleteBet;