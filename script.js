// let Age=17;
// if (Age >=0 && Age <=12) {
//     console.log(`Ticket price = $5`);
// } else if (Age >12 && Age <=17) {
//     console.log(`Ticket price = $10`);
// } else if (Age >=18 && Age <=64) {
//     console.log(`Ticket price = $15`);
// } else if (Age >64 && Age <=120) {
//     console.log(`Ticket price = $8`);
// } else {
//     console.log(`age is wrong and please correct it`);      
// }


let Age=68;
let Ticketprice;
if (Age >=0 && Age <=12) {
    Ticketprice="$5";
    console.log(`Ticket price = ${Ticketprice}`);
} else if (Age >12 && Age <=17) {
    Ticketprice="$10";
    console.log(`Ticket price = ${Ticketprice}`);
} else if (Age >=18 && Age <=64) {
    Ticketprice="$15";
    console.log(`Ticket price = ${Ticketprice}`);
} else if (Age >64 && Age <=120) {
    Ticketprice="$8";
    console.log(`Ticket price = ${Ticketprice}`);
} else {
    console.log(`age is wrong and please correct it`);      
}
