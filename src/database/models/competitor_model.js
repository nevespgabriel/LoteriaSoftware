import conn from "../conn.js";

const Schema = conn.Schema;

const competitorSchema = new Schema({
    name:{
        type: Schema.Types.String,
        required: true
    }
});

const Competitor = conn.model("Competitor", competitorSchema);

export default Competitor;