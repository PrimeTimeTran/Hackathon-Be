const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participantSchema = Schema({
  owner: {
    ref: "User",
    type: Schema.ObjectId,
    required: true,
  },
  type: ["receiver", "provider", "driver", "loaner", "borrower"],
  endLoc: {
    lat: Number,
    long: Number,
    address: String,
    city: String,
    country: String,
  },
});

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;
