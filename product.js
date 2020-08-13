let products = [
    {
        "id":"01",
        "name":"p1_BROWN_MID",
        "production_cost":"Rs. 400",
        "selling_price":"Rs. 800",
        "supply":{
            "supply_fwd":{
                "lvl5":[11,12],
                "lvl4":[10,9,1,2],
                "lvl3":[8,7,3,4],
                "lvl2":[6],
                "lvl1":[5]
            },
            "supply_rev":{
                "01":"lvl4","02":"lvl4","03":"lvl3","04":"lvl3","05":"lvl1","06":"lvl2",
                "07":"lvl3","08":"lvl3","09":"lvl4","10":"lvl4","11":"lvl5","12":"lvl5",
            }
        }
    },
    {
        "id":"02",
        "name":"p2_BROWN_LARGE",
        "production_cost":"Rs. 600",
        "selling_price":"Rs. 1200",
        "supply":{
            "supply_fwd":{
                "lvl5":[12,1],
                "lvl4":[11,10,9,2],
                "lvl3":[8,3,4],
                "lvl2":[7,5],
                "lvl1":[6]
            },
            "supply_rev":{
                "01":"lvl5","02":"lvl4","03":"lvl3","04":"lvl3","05":"lvl2","06":"lvl1",
                "07":"lvl2","08":"lvl3","09":"lvl4","10":"lvl4","11":"lvl4","12":"lvl5",
            }
        }
    },
    {
        "id":"03",
        "name":"p3_WHITE_LARGE",
        "production_cost":"Rs. 1000",
        "selling_price":"Rs. 1500",
        "supply":{
            "supply_fwd":{
                "lvl5":[1],
                "lvl4":[11,12,2,3],
                "lvl3":[10,4],
                "lvl2":[9,5],
                "lvl1":[6,7,8]
            },
            "supply_rev":{
                "01":"lvl5","02":"lvl4","03":"lvl4","04":"lvl3","05":"lvl2","06":"lvl1",
                "07":"lvl1","08":"lvl1","09":"lvl2","10":"lvl3","11":"lvl4","12":"lvl4",
            }
        }
    },
]

function getProducts(){
    return products;
}

function getSupply(productId, month){
    return products.filter(i => i.id == productId).map(i => i.supply.supply_rev[`${month}`])[0];
}

module.exports = {
    getProducts,
    getSupply
}