var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'some initial customer';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new customer';
}