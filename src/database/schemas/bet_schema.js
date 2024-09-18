import conn from "../conn.js";

const Schema = conn.Schema;

const betSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    paymentStatus: {
        type: Schema.Types.String,
        enum: ["PENDING", "FINISHED", "REFUSED", "CANCELLED"],
        default: "PENDING"
    },
    status:{
        type: Schema.Types.String,
        enum: ["WON", "LOST", "TIED"],
        required: true
    },
    value: {
        type: Schema.Types.Number,
        required: true,
        min: 1
    },
    date:{
        type: Schema.Types.Date,
        required: true
    },
},{
    timestamps: true
})

export default betSchema;