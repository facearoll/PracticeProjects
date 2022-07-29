const express = require("express")
const app = express();
const {products} = require("./data")
const {persons} = require("./data")




app.use(express.static("./public"))

app.get("/about", (req, res) => {
    res.send("<h1>Home Page</h1> <a href='/api/products'>Products</a>")
})

app.get("/api/products/", (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {
            id, name, image
        }
    })
    res.send(newProducts)
})

app.get("/api/products/:productID", (req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find(
        (product) => product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send("Product does not exist")
    }
    return res.send(singleProduct)
})

// app.get("/api/products/:productName", (req, res) => {
//     const {productName} = req.params;
//     const justName = products.find(
//         (product) => product.name === productName)
//     if(!justName){
//         return res.status(404).send("Product name does not exist")
//     }
//     return res.send(justName)
// })


app.get("/api/v1/query", (req, res) => {
    console.log(req.query);
    const {search, limit} = req.query
    let sortedProducts = [... products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        // res.status(200).send("No products match your search")
        return res.status(200).json({success:true, data: []})
    }
    return res.status(200).json(sortedProducts)
})



app.listen(5000, () => {
    console.log("Port 5000, LESS THAN 9000");
})