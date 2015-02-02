//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('customersService', function ($log) {
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

    this.getCustomerCart=function(firstName,lastName){
        for (var i=0;i<customers.length;i++){
            if(customers[i].firstName === firstName && customers[i].lastName===lastName){
                return customers[i];
            }
            else
            {
                return false;
            }
        }
    };

    this.addOrder=function(product,price,quantity,orderTotal,firstName,lastName) {
        $log.info("Adding orders to cart for " + firstName + " " + lastName);
        var customerCart=this.getCustomerCart(firstName,lastName);
        if(customerCart && !('orders' in customerCart)) {
            $log.info("First order processed for " + customerCart.firstName + " "+ customerCart.lastName);
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
        else if (customerCart && 'orders' in customerCart)
        {
            $log.info("Further orders processed for "+ customerCart.firstName + " " + customerCart.lastName);
            customerCart['orders'].push(
                    {
                        product: product,
                        price: price,
                        quantity: quantity,
                        orderTotal: orderTotal
                    }
            );
        }
        else
        {
            $log.warn("No user name found , Please register yourselves");
        }
    };

    var customers = [];

});