import { _isUndefined } from "gsap/gsap-core";


const AwardsTable = [
    { key:"B1B3B2", award: 20 }, { key:"B2B1B3", award: 20 },     
    { key:"B1B2B3", award: 20 }, { key:"B3B2B1", award: 20 }, 
    { key:"B1B1B1", award: 40 }, { key:"B2B2B2", award: 50 }, 
    { key:"B3B3B3", award: 60 }, { key:"OLOLOL", award: 20 },
    { key:"OLOLB1", award: 20 }, { key:"OLB1OL", award: 20 },  
    { key:"B1OLOL", award: 10 }, { key:"OLB1B1", award: 10 },
    { key:"B1B1OL", award: 20 }, { key:"OLB1B1", award: 20 },  
    { key:"OROROR", award: 20 }, { key:"ORORB1", award: 20 }, 
    { key:"ORB1OR", award: 20 }, { key:"B1OROR", award: 20 },  
    { key:"CHCHCH", award: 10 }, { key:"CHCHB1", award: 10 }, 
    { key:"CHB1CH", award: 10 }, { key:"B1CHCH", award: 10 },  
    { key:"LMLMLM", award: 10 }, { key:"LMLMB1", award: 10 }, 
    { key:"LMB1LM", award: 10 }, { key:"B1LMLM", award: 10 }, 
    { key:"O70707", award: 80 }, { key:"O7O7B1", award: 20 },   
    { key:"O7B107", award: 20 }, { key:"B1O707", award: 20 }, 
    { key:"O7B307", award: 20 }, { key:"B3O707", award: 20 },  
    { key:"B30707", award: 20 }, { key:"OR0707", award: 20 },  
    { key:"O7B207", award: 20 }, { key:"B2O707", award: 20 },
    { key:"T7T7T7", award: 100 }, { key:"T7T7B1", award: 40 }, 
    { key:"T7B1T7", award: 40 }, { key:"B1T7T7", award: 40 },   
    { key:"B1T7O7", award: 20 }, { key:"B1O7T7", award: 20 },
    { key:"ORORO7", award: 30 }, { key:"ORO7OR", award: 30 },  
    { key:"O7OROR", award: 30 }, { key:"ORORT7", award: 30 },   
    { key:"ORT7OR", award: 30 }, { key:"T7OROR", award: 30 },   
    { key:"OLOLO7", award: 30 }, { key:"OLO7OL", award: 30 },  
    { key:"O7OLOL", award: 30 }, { key:"OLOLT7", award: 30 },   
    { key:"OLT7OL", award: 30 }, { key:"T7OLOL", award: 30 },     
    { key:"LMLMO7", award: 25 }, { key:"LMO7LM", award: 25 },  
    { key:"O7LMLM", award: 25 }, { key:"LMLMT7", award: 25 },   
    { key:"LMT7LM", award: 25 }, { key:"T7LMLM", award: 25 },   
    { key:"CHCHO7", award: 35 }, { key:"CHO7CH", award: 35 },  
    { key:"O7CHCH", award: 35 }, { key:"CHCHT7", award: 35 },   
    { key:"CHT7CH", award: 35 }, { key:"T7CHCH", award: 35 },  
    
    { key:"T7T7CH", award: 30 }, { key:"CHT7T7", award: 30 }, 
    { key:"T7CHT7", award: 30 }, { key:"T7T7OL", award: 30 },   
    { key:"T7OLT7", award: 30 }, { key:"OLT7T7", award: 30 },   
    { key:"ORB1B1", award: 30 }, { key:"B2B1B2", award: 30 }, 
    { key:"T7O7T7", award: 50 }, { key:"O7T7O7", award: 50 }, 
    { key:"ORORB2", award: 20 }, { key:"O7LMO7", award: 30 }, 
    
]

const targetReelsSymbol = { symbol: ""};

function isWIN(inReels) {
    return inReels.key === targetReelsSymbol.symbol;
}

export const GetAwardValue = ( reelsStr ) => {
    targetReelsSymbol.symbol = reelsStr; //  'T7CHCH'
    //const result = AwardsTable.find( ({ key }) => key === reelsStr );
    const result =  AwardsTable.find( isWIN );
    try {
        console.log("reward was ... " + result.award )
        return result.award;
    } catch (e) {
       return 0;
    }
};

const Awards = () => {
}


export default Awards;