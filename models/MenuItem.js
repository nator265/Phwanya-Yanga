import mongoose from "mongoose";

const MenuItemSchema = new mongoose.schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
})

const MenuItem = mongoose.models.MenuItem || mongoose.model("menuItem", MenuItemSchema);

export default MenuItem;