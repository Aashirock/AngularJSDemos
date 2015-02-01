//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('customersService', function () {
    this.getCustomers = function () {
        return customers;
    };

    this.insertCustomer = function (firstName, lastName, city) {
        var topID = customers.length + 1;
        customers.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            city: city
        });
    };

    this.deleteCustomer = function (id) {
        for (var i = customers.length - 1; i >= 0; i--) {
            if (customers[i].id === id) {
                customers.splice(i, 1);
                break;
            }
        }
    };

    this.getCustomer = function (id) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === id) {
                return customers[i];
            }
        }
        return null;
    };

    this.getCustomerCart=function(value){
        for (var i=0;i<customers.length;i++){
            if(customers[i].firstName === value){
                return customers[i];
            }
        }
    };

    this.addOrder=function(product,price,quantity,orderTotal,searchName) {
        var customerCart=this.getCustomerCart(searchName);
        if(!('orders' in customerCart)) {
            console.log("First order");
            customerCart['orders'] =
                [
                    {
                        product: product,
                        price: price,
                        quantity: quantity,
                        orderTotal: orderTotal
                    }
                ]
        }
        else
        {
            console.log("Next orders");
            customerCart['orders'].push(
                    {
                        product: product,
                        price: price,
                        quantity: quantity,
                        orderTotal: orderTotal
                    }
            );

            console.log(customerCart);
        }
    };

    var customers = [];

});