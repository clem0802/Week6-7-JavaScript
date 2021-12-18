class ClemsJob {
    constructor(title, domain, years){
        this.title = title;
        this.domain = domain;
        this.years = years;
    }
}

var clemsjob1 = new ClemsJob("piano teacher", "music", 18);
var clemsjob2 = new ClemsJob("night receptionist", "hotels", 2);
var clemsjob3 = new ClemsJob("will-be junior dev", "web development", 0);
console.log(clemsjob1);
console.log(clemsjob2);
console.log(clemsjob3);
