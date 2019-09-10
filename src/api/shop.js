const _product = [
    { "id": 1, "title": 'ipad', "price": 500, "inventory": 2 },
    { "id": 2, "title": 'H&M', "price": 12, "inventory": 10 },
    { "id": 3, "title": 'Charli xcx', "price": 22, "inventory": 2 },
]

export const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_product);
        }, 100);
    })
}