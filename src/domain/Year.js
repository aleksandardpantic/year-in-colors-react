import Day from './Day';

class Year {
    constructor(days){
        this.days = Array(365);
        if (Object.seal) {
            this.days.fill(new Day(1,1,0, ""));
        }
        Object.seal(this.days);
        for (let i = 0; i < days.length; i++) {
            let day = days[i]
            this.days[day.getYearIndex()]=day
            
          }
    }
    

    
}
export default Year