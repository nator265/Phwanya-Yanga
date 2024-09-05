import mongoose from "mongoose";

const Specials = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
});

const Special = mongoose.models.Special || mongoose.model('Special', SpecialSchema);