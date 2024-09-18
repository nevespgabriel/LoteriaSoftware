import conn from "../conn.js";
import competitorSchema from "./competitor_model";

const Schema = conn.Schema;

const matchSchema = new Schema({
    competitors: [
        {
        competitor: competitorSchema,
        status:{
            type: Schema.Types.String,
            enum: ["", ""]
        },
        required: true 
    }, {
        competitor: competitorSchema,
        status:{
            type: Schema.Types.String,
            enum: ["", ""]
        },
        required: true
    }],
    start:{
        type: Schema.Types.Date,
        required: true
    }
});

const Match = conn.model("Match", matchSchema);

export default Match;