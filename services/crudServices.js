import connectMongoDB from './connectMongoDB';

export async function createItem(model, data) {
    await connectMongoDB();
    const item = await model.create(data);
    return item;
}

export async function getItems(model) {
    await connectMongoDB();
    const items = await model.find();
    return items;
}

export async function deleteItem(model, id) {
    await connectMongoDB();
    const result = await model.findByIdAndDelete(id);
    return result;
}
