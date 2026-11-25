// 配列を更新するときによく使うパターン集
const shoppingCart = [
    {id: 1, product: 'HDMI Cable', price: 400 },
    {id: 1, product: 'Oven', price: 2800 },
    {id: 1, product: 'Peach Pie', price: 650 },
];

// 配列に要素を追加
// 新しい配列を作ってその中で元の配列をスプレッドしつつ最後に新しい要素を追加する
[...shoppingCart, { id: 4, product: 'Coffee Mug', price: 700 }];

// 配列から要素を削除
// idが2じゃないものを残すようにしている
shoppingCart.filter((item) => item.id !== 2);

// 配列内の要素をすべて更新
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLocaleLowerCase(),
    };
});

// 配列内の特定の要素を更新
shoppingCart.map((item) => {
    if(item.id === 3) {
        return {...item, price: 1080};
    } else {
        return item;
    }
});


// 配列
// 配列

