var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн",
price: function () {
    let result = 0;
    
    for(let key in this) {
        if (typeof this[key] !== "string") {continue}
        result += Number.parseFloat(this[key])
    }

    return result + " грн"
},
minPrice : function () {
     let result = Infinity;
    
    for(let key in this) {
        if (typeof this[key] !== "string") {continue}
        if (result > Number.parseInt(this[key])) {
        result = Number.parseInt(this[key])
        }
    }

    return result + " грн"
},
maxPrice : function () {
     let result = 0;
    
    for(let key in this) {
        if (typeof this[key] !== "string") {continue}
        if (result < Number.parseInt(this[key])) {
        result = Number.parseInt(this[key])
        }
    }

    return result + " грн"
}

};

services['Розбити скло'] = "200 грн";
services['Розбити скло2'] = "2300 грн";
services['Розбити скло3'] = "3 грн";

console.log(services.price())
console.log(services.minPrice());
console.log(services.maxPrice());










//     Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
//     Створити метод minPrice(), який повертає мінімальну ціну.
//     Створити метод maxPrice(), який повертає максимальну ціну.
