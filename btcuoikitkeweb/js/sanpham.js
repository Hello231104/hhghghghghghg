const connectToDB = require('./db');

async function getProducts() {
    const db = await connectToDB();
    const collection = db.collection('products'); // Thay 'products' bằng tên collection của bạn
    const products = await collection.find({}).toArray(); // Lấy toàn bộ sản phẩm
    console.log(products);
    return products;
}

getProducts();
