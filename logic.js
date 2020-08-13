let Products = require('./product');
let Stores = require('./store');
let Settings = require('./settings');
const fs = require('fs');

let startDate = Settings.getStartDate();
let endDate = Settings.getEndDate();
let writer = fs.createWriteStream('../out.csv');

let dataCount = 0;
let currentDemandInc = 0;
let currentSupplyInc = 0;

writer.write('This is a dummy dataset created only for demonstration purposes.\nNo real-life relevance.\nBPPIMT, 2020\n', 'utf-8');
writer.write('date,store id,store name,store location,product id,product name,production cost,selling price,demand,supply\n', 'utf-8');
while(startDate <= endDate){
    let currentDay = startDate.format('DD');
    let currentMonth = startDate.format('MM');

    if(currentMonth == 01 && currentDay == 01){
        currentDemandInc = currentDemandInc + 8;
        currentSupplyInc = currentSupplyInc + 5;
    }
    
    Stores.getStores().forEach(currentStore => {

        let demandLvl = Stores.getDemand(currentStore.id,currentMonth);

        Products.getProducts().forEach(product => {
            let supplyOfCurrentProductLvl = Products.getSupply(product.id, currentMonth);

            let supplyOfCurrentProductValue = Settings.getSupply(supplyOfCurrentProductLvl, currentSupplyInc);
            let demandOfCurrentProductValue = Settings.getDemand(demandLvl, currentDemandInc);

            let data = `${startDate.format('DD-MM-YYYY')},${currentStore.id},${currentStore.name},${currentStore.location},${product.id},${product.name},${product.production_cost},${product.selling_price},${demandOfCurrentProductValue},${supplyOfCurrentProductValue}\n`
            writer.write(data, 'utf-8');
            dataCount++;
        });
    });

    startDate.add(1, 'days');
}

if(startDate > endDate){
    console.log('Ended...');
    console.log(`Total data recorded : ${dataCount}`);
    writer.end();
}
    

















// if(writer.write(processor)){
//     console.log(`Total data : ${dataCount}`);
// }