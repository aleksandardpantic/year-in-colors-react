class Day {
    
    constructor(day,month,mood, text){
        this.day = day
        this.month = month
        this.mood = mood
        this.id = 0
        this.text = text
    }
    getYearIndex(){
        switch (this.month) {
                case 1:
                
                return this.day-1;


                case 2:
                
                return 31 + this.day -1;


                case 3:
                
                    return 59 + this.day -1;


                 case 4:
                
                    return 90 + this.day -1;


                case 5:
                
                    return 120 + this.day -1;


                case 6:
                
                
                return 151 + this.day -1;
                
                
                case 7:
                
                    return 181 + this.day -1;


                case 8:
                
                    return 212 + this.day -1;


                case 9:
                
                    return 243 + this.day -1;


                case 10:
                
                    return 273 + this.day -1;

                
                    case 11:
                
                    return 304 + this.day -1;

                    
                    case 12:
                
                    return 334 + this.day -1;

                    
                    case 12:
                
                    return 31 + this.day -1;

                    
        
            default:
                break;
        }
    }
    
}
export default Day;