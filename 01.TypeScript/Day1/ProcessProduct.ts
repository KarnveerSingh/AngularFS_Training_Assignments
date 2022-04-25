enum ProducName{
    product1,
    product2
};

enum DiscountType{  
    NEW15 = 15,
    WEEKEND25=25
}

enum DeliveryMode {
    StorePick = 0,
    DeliveryToHome = 30
}


function CalculateAmount(productName:ProducName,unitprice:number,quantity:number=1,discountType:DiscountType,deliveryMode:DeliveryMode) : number{

    let totalAmount : number = 0;

    let netAmount:number = ((unitprice * quantity) + deliveryMode);

    totalAmount = netAmount;

    var discount:number = netAmount/discountType;

    totalAmount = totalAmount - discount;

    return totalAmount;
}


var productName:ProducName = ProducName.product1;
var unitprice:number = 1000;
var quantity:number = 2;
var discountType:DiscountType = DiscountType.WEEKEND25;
var deliveryMode:DeliveryMode = DeliveryMode.DeliveryToHome;


var result:number = CalculateAmount(productName,unitprice,quantity,discountType,deliveryMode);
console.log(`Total Amount is := ${result}`);