let stores = [
    {
        "location":"Kolkata_Park St.",
        "name":"Yummies_Kolkata_Park_Street",
        "id":"01",
        "demand":{
            "demand_fwd":{
                "lvl5":[12],
                "lvl4":[11,1],
                "lvl3":[2,3,9,10],
                "lvl2":[4,8],
                "lvl1":[5,6,7]
            },
            "demand_rev":{
                "01":"lvl4","02":"lvl3","03":"lvl3","04":"lvl2","05":"lvl1","06":"lvl1",
                "07":"lvl1","08":"lvl2","09":"lvl3","10":"lvl3","11":"lvl4","12":"lvl5",
            }
        }
    },
    {
        "location":"kolkata_Ballygunge",
        "name":"Yummies_kolkata_Ballygunge",
        "id":"02",
        "demand":{
            "demand_fwd":{
                "lvl5":[10],
                "lvl4":[9,11],
                "lvl3":[8,7,12,1],
                "lvl2":[6,2],
                "lvl1":[5,4,3]
            },
            "demand_rev":{
                "01":"lvl3","02":"lvl2","03":"lvl1","04":"lvl1","05":"lvl1","06":"lvl2",
                "07":"lvl3","08":"lvl3","09":"lvl4","10":"lvl5","11":"lvl4","12":"lvl3",
            }
        }
    },
    {
        "location":"Mumbai_Andheri E.",
        "name":"Yummies_Mumbai_Andheri_East",
        "id":"03",
        "demand":{
            "demand_fwd":{
                "lvl5":[8,9],
                "lvl4":[10,7],
                "lvl3":[11,6,12,5],
                "lvl2":[1,4],
                "lvl1":[2,3]
            },
            "demand_rev":{
                "01":"lvl2","02":"lvl1","03":"lvl1","04":"lvl2","05":"lvl3","06":"lvl3",
                "07":"lvl4","08":"lvl5","09":"lvl5","10":"lvl4","11":"lvl3","12":"lvl3",
            }
        }
    },
    {
        "location":"New Delhi_Connaught place",
        "name":"Yummies_New_Delhi_Connaught_place",
        "id":"04",
        "demand":{
            "demand_fwd":{
                "lvl5":[10,11,12],
                "lvl4":[8,9,1,2],
                "lvl3":[7,3],
                "lvl2":[4,6],
                "lvl1":[5]
            },
            "demand_rev":{
                "01":"lvl4","02":"lvl4","03":"lvl3","04":"lvl2","05":"lvl1","06":"lvl2",
                "07":"lvl3","08":"lvl4","09":"lvl4","10":"lvl5","11":"lvl5","12":"lvl5",
            }
        }
    }
]

function getStores(){
    return stores;
}

function getDemand(storeid, month){
    return stores.filter(i => i.id == storeid).map(i => i.demand.demand_rev[`${month}`])[0];
}

module.exports = {
    getStores,
    getDemand
};