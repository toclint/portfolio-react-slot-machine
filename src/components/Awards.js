import { _isUndefined } from "gsap/gsap-core";

/***************** */
/* B1=BAR1  B2=BAR2 B3=BAR3 CH=CHERRY OL=OLIVE OR=ORANGE LM=LEMON
/*  O7=ONE-SEVEN  T7=TRIPLE-SEVEN
/*
/***************** */
const AwardsTable = [
    { key:"B1B3B2", award: 20 }, { key:"B2B1B3", award: 20 },     
    { key:"B1B2B3", award: 20 }, { key:"B3B2B1", award: 20 }, 
    { key:"B1B1B1", award: 40 }, { key:"B2B2B2", award: 50 }, 
    { key:"B3B3B3", award: 60 }, { key:"OLOLOL", award: 20 },    
    { key:"B1B1OL", award: 20 }, { key:"OLB1B1", award: 20 },  
    { key:"OROROR", award: 20 }, { key:"ORORB1", award: 20 }, 
    { key:"ORB1OR", award: 20 }, { key:"B1OROR", award: 20 },  
    { key:"CHCHCH", award: 10 }, 
    { key:"LMLMLM", award: 10 }, { key:"LMLMB1", award: 10 }, 
    { key:"LMB1LM", award: 10 }, { key:"B1LMLM", award: 10 }, 
    { key:"O7O7O7", award: 80 }, { key:"O7O7B1", award: 20 },   
    { key:"O7B1O7", award: 20 }, { key:"B1O7O7", award: 20 }, 
    { key:"O7B3O7", award: 20 },
    { key:"B3O7O7", award: 20 }, { key:"ORO7O7", award: 20 },  
    { key:"O7B2O7", award: 20 }, { key:"B2O7O7", award: 20 },
    { key:"T7T7T7", award: 100 },{ key:"T7T7B1", award: 40 }, 
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
    { key:"O7LMO7", award: 30 }, { key:"B2B2OL", award: 15 }, 
    { key:"O7B2B3", award: 20 }, { key:"B1B2T7", award: 40 },
    { key:"LMB2B2", award: 15 }, { key:"B1O7B1", award: 30 },
    { key:"B3T7B3", award: 50 }, { key:"LMO7T7", award: 15 },
    { key:"CHB1B1", award: 20 }, { key:"B3B3LM", award: 30 },
    { key:"B1T7B1", award: 20 }, { key:"B2B2B1", award: 30 },
    { key:"O7T7CH", award: 10 }, { key:"B3O7B3", award: 60 },
    { key:"O7O7B3", award: 30 }, { key:"T7OOT7", award: 60 },
    { key:"OLO7O7", award: 10 }, { key:"B2T7B2", award: 50 },
    { key:"T7T7B3", award: 35 },
    { key:"B3B3O7", award: 40 }, { key:"B3B3T7", award: 45 },
    { key:"O7B1T7", award: 20 }, { key:"B1B3T7", award: 30 },
    { key:"T7B3B3", award: 40 }, { key:"CHO7O7", award: 20 },
    { key:"O7O7OR", award: 15 }, { key:"O7O7LM", award: 10 },
    { key:"B3B1T7", award: 25 }, { key:"B3B1O7", award: 25 },
    { key:"OLO7T7", award: 10 }, { key:"CHT7O7", award: 20 },
    { key:"O7O7OL", award: 15 }, { key:"B1B1O7", award: 20 },
    { key:"O7B2B2", award: 40 }, { key:"CHO7T7", award: 20 },
    { key:"T7B3O7", award: 20 }, { key:"B3O7T7", award: 60 },
    { key:"O7O7T7", award: 80 }, { key:"O7ORO7", award: 10 },
    { key:"B1B2O7", award: 30 }, { key:"O7B3T7", award: 60 },
    { key:"B2B1T7", award: 50 }, { key:"B2B3T7", award: 30 },
    { key:"B3O7B1", award: 30 }, { key:"O7B1B1", award: 40 },
    { key:"B3B2T7", award: 30 }, { key:"T7B2B2", award: 50 },
    { key:"B2O7T7", award: 50 }, { key:"T7O7B2", award: 50 },
    { key:"B3B1B2", award: 30 }, { key:"T7CHO7", award: 20 },
    { key:"O7OLO7", award: 15 }, { key:"LMO7O7", award: 10 },
    { key:"T7T7OR", award: 15 }, { key:"B3T7T7", award: 60 },
    { key:"O7O7CH", award: 15 }, { key:"O7CHO7", award: 15 },
    { key:"T7LMT7", award: 10 }, { key:"T7ORT7", award: 20 },
    { key:"T7B2T7", award: 50 }, { key:"T7B3T7", award: 60 },
    { key:"T7T1T7", award: 80 }, { key:"ORT7T7", award: 15 },
    { key:"B2T7T7", award: 50 }, { key:"07T7T7", award: 15 },
    { key:"O7T7T7", award: 80 }, { key:"T7T7O7", award: 80 }, 
    { key:"T7O7O7", award: 80 }, { key:"B1B3B1", award: 30 },
    { key:"B1B3B3", award: 30 }, { key:"B1B2B1", award: 30 },
    { key:"B2B3B1", award: 30 }, { key:"B2B1B1", award: 30 },
    { key:"B3B1B1", award: 30 }, { key:"B1B2B2", award: 30 },
    { key:"B3B2B2", award: 30 }, { key:"B3B2B3", award: 30 },
    { key:"B3B1B3", award: 30 }, { key:"B2B3B2", award: 30 },
    { key:"T707O7", award: 60 },{ key:"07O7T7", award: 60 },
    { key:"B2B2O7", award: 40 },{ key:"O7B3B3", award: 50 },
    { key:"B1O7B2", award: 30 },{ key:"B1B3O7", award: 30 },
    { key:"B2B1O7", award: 30 }, { key:"B3B2O7", award: 30 },
    { key:"B3T7B1", award: 30 }, { key:"B1T7B3", award: 30 },
    { key:"B2T7B3", award: 30 }, { key:"B3T7B2", award: 30 },
    { key:"T7B1B3", award: 30 },  { key:"T7B1B2", award: 30 },
    { key:"T7B2B3", award: 30 }, { key:"T7b2O7", award: 30 },
    { key:"B1O7B3", award: 30 },
    { key:"O7T7B1", award: 30 }, { key:"O7T7B2", award: 30 },
    { key:"O7T7B3", award: 30 }, { key:"T7O7B1", award: 30 },
    { key:"T7O7B3", award: 30 }, { key:"B3T7O7", award: 20 },
    { key:"T7O7CH", award: 20 },
    { key:"ORT7O7", award: 20 }, { key:"O7O7B2", award: 30 },
    { key:"O7T7OR", award: 30 }, { key:"O7T7OL", award: 30 },
    { key:"O7T7LM", award: 30 }, { key:"ORO7T7", award: 30 },
    { key:"LMT7T7", award: 20 }, { key:"T7O7OL", award: 20 },
    { key:"O7B2B1", award: 20 }, { key:"B2O7B1", award: 20 },
    { key:"B1T7B2", award: 30 },
    { key:"B2T7O7", award: 40 }, { key:"B2B3B3", award: 30 },
    { key:"O7B1B3", award: 30 }, { key:"O7CHT7", award: 30 },
    { key:"T7T7B2", award: 50 }, { key:"T7B3B2", award: 40 },

]

const targetReelsSymbol = { symbol: ""};

function isWIN(inReels) {
    return inReels.key === targetReelsSymbol.symbol;
}

export const GetAwardValue = ( reelsStr ) => {
    targetReelsSymbol.symbol = reelsStr; 
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