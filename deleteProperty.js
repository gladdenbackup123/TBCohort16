let laptop = {
    model:'Macbook Pro',
    ram:'8GB',
    rom:'512GB',
    price:'169999',
    color:'grey',
    USBport:true,
}
delete laptop.USBport; // delete object.property
delete laptop['color']; //delete object['property']
console.log(laptop);
