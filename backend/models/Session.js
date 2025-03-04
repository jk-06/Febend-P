const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  chapter: { type: String },
  topic: { type: String, required: true },
  date: { type: Date, required: true },
  pfs: { type: Number, min: 1, max: 10 },
  sessionType: {
    type: String,
    enum: ["First Study", "Review 2 Days", "Review 6 Days", "Review 14 Days", "Review 28 Days"],
    required: true,
  },
});

module.exports = mongoose.model("Session", sessionSchema);
