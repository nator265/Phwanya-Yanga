import { NextResponse } from "next/server";
import { createItem, getItems, deleteItem } from " services/services";
import MenuItem from "models/MenuItem";
import Special from "model/Special";

const models = {
    menuItem: MenuItem,
    special: Special,
}

export async function POST(request) {
    const { resource } = request.NextUrl.searchParams;
    const model = models[resource];
    if (!model) {
        return NextResponse.json({ messsage: 'Resource not found' }, { status: 404 });
    }
    const data = await request.json();
    const item = await createItem(model, data);
    return NextResponse.json({ message: `${resource} created`, item }, { status: 201 });
}

export async function GET(request) { 
    const { resource } = request.NextUrl.searchParams;
    const model = models[resource];
    if (!model) {
        return NextResponse.json({ messsage: 'Resource not found' }, { status: 404 });
    }
    const items = await getItems(model);
    return NextResponse.json({ [resource]: items });
}

export async function DELETE(request) { 
    const { resource } = request.NextUrl.searchParams;
    const model = models[resource];
    if (!model) {
        return NextResponse.json({ messsage: 'Resource not found' }, { status: 404 });
    }
    const result = await deleteItem(model, id);
    if (result) {
        return NextResponse.json({ message: `${resource} deleted` }, { status: 200 });
    }
    return NextResponse.json({ message: `${resource} not found` }, { status: 404 });
}