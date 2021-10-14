import { useSelector, useDispatch } from "react-redux"; //  add connect in when using class version
import { ActionTypes } from "./EventConstants";
import ControlsStyles from "./Controls.module.css";
import { gsap } from 'gsap';
import {useState} from 'react';

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

const Controls = () => {
  
  const [won, setWon] = useState(false);
  const [winnings, setWinnings] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const winState = useSelector((state) => state.showWin);
  const awardAmount = {dollars:0};

  document.addEventListener("spin-complete", (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    setWinnings(2000);
    console.log("Spin animation complete")
    updateBalance();
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
        
        // roRef.innerHTML = readoutdata.balance.toFixed(0);
      },
      onComplete: function() {
        dispatch({type: ActionTypes.SHOW_CONTROLS })
      }

    });
    setWon(true);
    
  };



  const spinReels = () => {
    dispatch({type: ActionTypes.HIDE_CONTROLS })
    setWon(false)
    let reel1Degrees;
    let reel2Degrees;
    let reel3Degrees;

    newReel1Target.degrees = ReelsData[ Math.floor(Math.random()*10) ].degrees;
    newReel2Target.degrees = ReelsData[ Math.floor(Math.random()*10) ].degrees;
    newReel3Target.degrees = ReelsData[ Math.floor(Math.random()*10) ].degrees;

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
        <div className={won ? "wonON" : "wonOFF"}>YOU WIN ${ winnings}</div>

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
