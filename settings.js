const moment = require('moment');

let demand_count = {
    "lvl1":{
        "min":10,
        "max":81
    },
    "lvl2":{
        "min":70,
        "max":131
    },
    "lvl3":{
        "min":100,
        "max":171
    },
    "lvl4":{
        "min":140,
        "max":281
    },
    "lvl5":{
        "min":230,
        "max":501
    },
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getDemand(lvl, pctg){
    pctg = pctg + getRandomInt(-20,2);
    return getRandomInt(demand_count[`${lvl}`].min + (demand_count[`${lvl}`].min * (pctg / 100)), demand_count[`${lvl}`].max + (demand_count[`${lvl}`].max * (pctg / 100)));
}

function getSupply(lvl, pctg){
    pctg = pctg + getRandomInt(-2,2);
    return getRandomInt(demand_count[`${lvl}`].min + (demand_count[`${lvl}`].min * (pctg / 100)), demand_count[`${lvl}`].max + (demand_count[`${lvl}`].max * (pctg / 100)));
}

function getStartDate(){
    return moment("01/01/2010", "DD-MM-YYYY");
}

function getEndDate(){
    return moment("31/12/2019", "DD-MM-YYYY");
}

module.exports={
    getDemand,
    getSupply,
    getStartDate,
    getEndDate
}