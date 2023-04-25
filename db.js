const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mwhitham:k9tFvXQ0J5eReW6w@cluster0.nyybfk7.mongodb.net/test"
  )
  .then(() => console.log("connected to online mongodb cluster, i think..."))
  .catch(() => console.log("something went wrong"));

const catSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  type: String,
  colour: String,
  evil: Boolean,
});

const catModel = mongoose.model("cat", catSchema);

module.exports = { catModel };
