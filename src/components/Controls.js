import { useSelector, useDispatch } from "react-redux"; //  add connect in when using class version
import { ActionTypes } from "./EventConstants";
import ControlsStyles from "./Controls.module.css";
import { gsap } from 'gsap';
import {useState} from 'react';
import { GetAwardValue } from "./Awards";

// import { Component } from 'react'; //  only needed for class based version of Counter below
const readoutdata = { balance: 0};
const spins = { totalSpins: 0 };
const lastReel1 = { degrees:0};
const lastReel2 = { degrees:0}; 
const lastReel3 = { degrees:0}; 
const newReel1Target = { degrees:0};
const newReel2Target = { degrees:0};
const newReel3Target = { degrees:0};
const TARGET_REEL_SPINS = 2*1440;
const ReelsData = [
  {symbol:"O7", description:"One Seven", degrees:265},
  {symbol:"CH", description:"Cherries One", degrees:229},
  {symbol:"LM", description:"Lemon", degrees:195},
  {symbol:"OL", description:"Olive", degrees:160},
  {symbol:"OR", description:"Orange", degrees:122},
  {symbol:"B1", description:"One Bar", degrees:87},
  {symbol:"B2", description:"Two Bars", degrees:50},
  {symbol:"B3", description:"Three Bars", degrees:14},
  {symbol:"CH", description:"Cherries Two", degrees:338},
  {symbol:"T7", description:"Three Sevens", degrees:303}
]  

const lastSpinState = { value: "OLOLOL"}

const Controls = () => {
  
  const [won, setWon] = useState(false);
  const [winnings, setWinnings] = useState(0);
  const [lastReels, setLastReels] = useState("");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const winState = useSelector((state) => state.showWin);
  
  const awardAmount = {dollars:0};

  document.addEventListener("spin-complete", (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    console.log("Spin animation complete " + winnings + " lastReels: " + lastSpinState.value);
    let winValue = GetAwardValue(lastSpinState.value);
    console.log("on spin complete winnings: " + winValue )
    if( winValue > 0 ){
      setWinnings(winValue);
      awardAmount.dollars = winValue;
      setWon(true);
      updateBalance();
    } else {
      setWon(false);
      dispatch({type: ActionTypes.SHOW_CONTROLS });
    }

        
  });

  const incrementHandler = () => {
    dispatch({ type: ActionTypes.INCREMENT });
  };

  const increaseHandler = () => {
    dispatch({ type: ActionTypes.INCREASE_BY_VALUE, amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: ActionTypes.DECREMENT });  };

  const toggleCounterHandler = () => {
    dispatch({ type: ActionTypes.TOGGLE });
  };

  const updateBalance = () => {
    gsap.to(counter, {
      duration: 1,
      balance: (counter + awardAmount.dollars), 
      onUpdate: function() {
        incrementHandler();
      },
      onComplete: function() {
        dispatch({type: ActionTypes.SHOW_CONTROLS })
      }

    });
    

  };



  const spinReels = () => {
    setWinnings(0)
    dispatch({type: ActionTypes.HIDE_CONTROLS })
    let reel1Degrees;
    let reel2Degrees;
    let reel3Degrees;

    let reel1Object = ReelsData[ Math.floor(Math.random()*10) ];
    let reel2Object = ReelsData[ Math.floor(Math.random()*10) ];
    let reel3Object = ReelsData[ Math.floor(Math.random()*10) ];
    newReel1Target.degrees = reel1Object.degrees;
    newReel2Target.degrees = reel2Object.degrees;
    newReel3Target.degrees = reel3Object.degrees;
    let reelsString = reel1Object.symbol + reel2Object.symbol + reel3Object.symbol;
    console.log( "reels string is : " + reelsString);
    //console.log("Got reward back: " + GetAwardValue(reelsString) );
    lastSpinState.value = reelsString;
        
    if( spins.totalSpins > 0 ){
      reel1Degrees = (360 - lastReel1.degrees) + TARGET_REEL_SPINS + newReel1Target.degrees;
      reel2Degrees = (360 - lastReel2.degrees) + TARGET_REEL_SPINS + newReel2Target.degrees;
      reel3Degrees = (360 - lastReel3.degrees) + TARGET_REEL_SPINS + newReel3Target.degrees;
    } else if( spins.totalSpins === 0 ){
      reel1Degrees = TARGET_REEL_SPINS + newReel1Target.degrees;
      reel2Degrees = TARGET_REEL_SPINS + newReel2Target.degrees;
      reel3Degrees = TARGET_REEL_SPINS + newReel3Target.degrees;
    }

    window.unityInstance.SendMessage("AnimationManager", "SpinReelsTo", (reel1Degrees + "|" + reel2Degrees + "|" + reel3Degrees ));

    lastReel1.degrees = newReel1Target.degrees;
    lastReel2.degrees = newReel2Target.degrees;       
    lastReel3.degrees = newReel3Target.degrees;
    
    spins.totalSpins = spins.totalSpins + 1;
    decrementHandler();
  } ;

  return (
      <div className={ControlsStyles.wrapper}>
        <main className={ControlsStyles.controls}>
          <div className={"wonON"}>{ winnings > 0 ? "YOU WIN $" + winnings : ""}</div>
          <div className={ControlsStyles.controlsDivider} />
          {show && <button onClick={spinReels}>SPIN</button>}
          {!show && <button className="inactive">SPIN</button>}
          <div className={ControlsStyles.controlsDivider} />

          {show && <button onClick={decrementHandler}>BET $1</button> } 
          {!show && <button className="inactive">BET $1</button> } 
        <div className={ControlsStyles.value}>{counter}</div>     
        </main>
      </div>

  );
};
export default Controls;
