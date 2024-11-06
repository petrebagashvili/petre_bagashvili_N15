let Age=17;
if (Age >=0 && Age <=12) {
    console.log(`Ticket price = $5`);
} else if (Age >12 && Age <=17) {
    console.log(`Ticket price = $10`);
} else if (Age >=18 && Age <=64) {
    console.log(`Ticket price = $15`);
} else if (Age >64 && Age <=120) {
    console.log(`Ticket price = $8`);
} else {
    console.log(`age is wrong and please correct it`);      
}