(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{23:function(e,a,r){},25:function(e,a,r){"use strict";r.r(a);var d=r(1),O=r(6),t=r.n(O),n=r(4),o=(r(23),r(7)),s={INCREMENT:"action/increment",INCREMENT_BY_FIVE:"action/incrementBy5",INCREASE_BY_VALUE:"action/incrementByValue",DECREMENT:"action/decrement",TOGGLE:"action/toggle",TWEEN_VALUE_FROM_TO:"action/tweenFromTo",SHOW_WIN:"action/showWin",HIDE_WIN:"action/hideWin",SHOW_CONTROLS:"action/showControls",HIDE_CONTROLS:"action/hideControls"},y=r(5),w=r.n(y),c=r(12),B=[{key:"B1B3B2",award:20},{key:"B2B1B3",award:20},{key:"B1B2B3",award:20},{key:"B3B2B1",award:20},{key:"B1B1B1",award:40},{key:"B2B2B2",award:50},{key:"B3B3B3",award:60},{key:"OLOLOL",award:20},{key:"OLOLB1",award:20},{key:"OLB1OL",award:20},{key:"B1OLOL",award:10},{key:"OLB1B1",award:10},{key:"B1B1OL",award:20},{key:"OLB1B1",award:20},{key:"OROROR",award:20},{key:"ORORB1",award:20},{key:"ORB1OR",award:20},{key:"B1OROR",award:20},{key:"CHCHCH",award:10},{key:"B1CHCH",award:10},{key:"LMT7T7",award:20},{key:"LMLMLM",award:10},{key:"LMLMB1",award:10},{key:"LMB1LM",award:10},{key:"B1LMLM",award:10},{key:"O7O7O7",award:80},{key:"O7O7B1",award:20},{key:"O7B1O7",award:20},{key:"B1O7O7",award:20},{key:"O7B3O7",award:20},{key:"B3O7O7",award:20},{key:"B3O7O7",award:20},{key:"ORO7O7",award:20},{key:"O7B2O7",award:20},{key:"B2O7O7",award:20},{key:"T7T7T7",award:100},{key:"T7T7B1",award:40},{key:"T7B1T7",award:40},{key:"B1T7T7",award:40},{key:"B1T7O7",award:20},{key:"B1O7T7",award:20},{key:"ORORO7",award:30},{key:"ORO7OR",award:30},{key:"O7OROR",award:30},{key:"ORORT7",award:30},{key:"ORT7OR",award:30},{key:"T7OROR",award:30},{key:"OLOLO7",award:30},{key:"OLO7OL",award:30},{key:"O7OLOL",award:30},{key:"OLOLT7",award:30},{key:"OLT7OL",award:30},{key:"T7OLOL",award:30},{key:"LMLMO7",award:25},{key:"LMO7LM",award:25},{key:"O7LMLM",award:25},{key:"LMLMT7",award:25},{key:"LMT7LM",award:25},{key:"T7LMLM",award:25},{key:"CHCHO7",award:35},{key:"CHO7CH",award:35},{key:"O7CHCH",award:35},{key:"CHCHT7",award:35},{key:"CHT7CH",award:35},{key:"T7CHCH",award:35},{key:"T7T7CH",award:30},{key:"CHT7T7",award:30},{key:"T7CHT7",award:30},{key:"T7T7OL",award:30},{key:"T7OLT7",award:30},{key:"OLT7T7",award:30},{key:"ORB1B1",award:30},{key:"B2B1B2",award:30},{key:"T7O7T7",award:50},{key:"O7T7O7",award:50},{key:"O7LMO7",award:30},{key:"B2B2OL",award:15},{key:"O7B2B3",award:20},{key:"B1B2T7",award:40},{key:"LMB2B2",award:15},{key:"B1O7B1",award:30},{key:"B3T7B3",award:50},{key:"CHB3CH",award:20},{key:"CHB1B1",award:20},{key:"B3B3LM",award:30},{key:"B1T7B1",award:20},{key:"B2B2B1",award:30},{key:"O7T7CH",award:10},{key:"B3O7B3",award:60},{key:"O7O7B3",award:30},{key:"OLO7O7",award:10},{key:"B2T7B2",award:50},{key:"T7T7B3",award:35},{key:"B3O7B3",award:30},{key:"B3B3O7",award:40},{key:"B3B3T7",award:45},{key:"O7B1T7",award:20},{key:"B1B3T7",award:30},{key:"T7B3B3",award:40},{key:"CHO7O7",award:20},{key:"O7O7OR",award:15},{key:"O7O7LM",award:10},{key:"B3B1T7",award:25},{key:"B3B1O7",award:25},{key:"OLO7T7",award:10},{key:"CHT7O7",award:20},{key:"O7O7OL",award:15},{key:"B1B1O7",award:20},{key:"O7B2B2",award:40},{key:"CHO7T7",award:20},{key:"T7B3O7",award:20},{key:"B3O7T7",award:60},{key:"O7B3O7",award:60},{key:"O7O7T7",award:80},{key:"B1B2O7",award:30},{key:"O7B3T7",award:60},{key:"B2B1T7",award:40},{key:"B2B3T7",award:40},{key:"B3O7B1",award:40},{key:"O7B1B1",award:40},{key:"B3B2T7",award:40},{key:"T7B2B2",award:40},{key:"B2O7T7",award:50},{key:"T7O7B2",award:50},{key:"B3B1B2",award:30},{key:"T7CHO7",award:20},{key:"O7OLO7",award:30},{key:"LMO7O7",award:20},{key:"T7T7OR",award:10},{key:"B3T7T7",award:60}],k={symbol:""};function i(e){return e.key===k.symbol}var T=r(3),l={totalSpins:0},L={degrees:0},u={degrees:0},b={degrees:0},C={degrees:0},j={degrees:0},p={degrees:0},g=2880,m=[{symbol:"O7",description:"One Seven",degrees:265},{symbol:"CH",description:"Cherries One",degrees:229},{symbol:"LM",description:"Lemon",degrees:195},{symbol:"OL",description:"Olive",degrees:160},{symbol:"OR",description:"Orange",degrees:122},{symbol:"B1",description:"One Bar",degrees:87},{symbol:"B2",description:"Two Bars",degrees:50},{symbol:"B3",description:"Three Bars",degrees:14},{symbol:"CH",description:"Cherries Two",degrees:338},{symbol:"T7",description:"Three Sevens",degrees:303}],R={value:"OLOLOL"},E=function(){var e=Object(d.useState)(!1),a=Object(o.a)(e,2),r=(a[0],a[1]),O=Object(d.useState)(0),t=Object(o.a)(O,2),y=t[0],E=t[1],M=Object(d.useState)(""),H=Object(o.a)(M,2),_=(H[0],H[1],Object(n.b)()),h=Object(n.c)((function(e){return e.counter})),v=Object(n.c)((function(e){return e.showCounter})),N=(Object(n.c)((function(e){return e.showWin})),{dollars:0});document.addEventListener("spin-complete",(function(e){e.stopImmediatePropagation(),e.preventDefault(),console.log("Spin animation complete "+y+" lastReels: "+R.value);var a=function(e){k.symbol=e;var a=B.find(i);try{return console.log("reward was ... "+a.award),a.award}catch(r){return 0}}(R.value);console.log("on spin complete winnings: "+a),a>0?(E(a),N.dollars=a,r(!0),f()):(r(!1),_({type:s.SHOW_CONTROLS}))}));var S=function(){_({type:s.DECREMENT})},f=function(){c.a.to(h,{duration:1,balance:h+N.dollars,onUpdate:function(){_({type:s.INCREMENT})},onComplete:function(){_({type:s.SHOW_CONTROLS})}})};return Object(T.jsx)("div",{className:w.a.wrapper,children:Object(T.jsxs)("main",{className:w.a.controls,children:[Object(T.jsx)("div",{className:"wonON",children:y>0?"YOU WIN $"+y:""}),Object(T.jsx)("div",{className:w.a.controlsDivider}),v&&Object(T.jsx)("button",{onClick:function(){var e,a,r;E(0),_({type:s.HIDE_CONTROLS});var d=m[Math.floor(10*Math.random())],O=m[Math.floor(10*Math.random())],t=m[Math.floor(10*Math.random())];C.degrees=d.degrees,j.degrees=O.degrees,p.degrees=t.degrees;var n=d.symbol+O.symbol+t.symbol;console.log("reels string is : "+n),R.value=n,l.totalSpins>0?(e=360-L.degrees+g+C.degrees,a=360-u.degrees+g+j.degrees,r=360-b.degrees+g+p.degrees):0===l.totalSpins&&(e=g+C.degrees,a=g+j.degrees,r=g+p.degrees),window.unityInstance.SendMessage("AnimationManager","SpinReelsTo",e+"|"+a+"|"+r),L.degrees=C.degrees,u.degrees=j.degrees,b.degrees=p.degrees,l.totalSpins=l.totalSpins+1,S()},children:"SPIN"}),!v&&Object(T.jsx)("button",{className:"inactive",children:"SPIN"}),Object(T.jsx)("div",{className:w.a.controlsDivider}),v&&Object(T.jsx)("button",{onClick:S,children:"BET $1"}),!v&&Object(T.jsx)("button",{className:"inactive",children:"BET $1"}),Object(T.jsx)("div",{className:w.a.value,children:h})]})})};var M=function(){return Object(T.jsx)(E,{})},H=r(2),_=r(11),h={counter:100,showCounter:!0,showWin:!1},v=Object(_.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;if(a.type===s.INCREMENT)return Object(H.a)(Object(H.a)({},e),{},{counter:e.counter+1});if(a.type===s.DECREMENT)return Object(H.a)(Object(H.a)({},e),{},{counter:e.counter-1});if(a.type===s.INCREASE_BY_VALUE)return Object(H.a)(Object(H.a)({},e),{},{counter:e.counter+a.amount});if(a.type===s.TWEEN_VALUE_FROM_TO){var r=a.range.split(":")[0],d=a.range.split(":")[1];return Object(H.a)(Object(H.a)({},e),{},{from:e.from+r,to:e.to+d})}return a.type===s.DECREASE_BY_VALUE?Object(H.a)(Object(H.a)({},e),{},{counter:e.counter-a.amount}):a.type===s.TOGGLE?Object(H.a)(Object(H.a)({},e),{},{showCounter:!e.showCounter}):a.type===s.SHOW_CONTROLS?Object(H.a)(Object(H.a)({},e),{},{showCounter:!0}):a.type===s.HIDE_CONTROLS?Object(H.a)(Object(H.a)({},e),{},{showCounter:!1}):a.type===s.SHOW_WIN?Object(H.a)(Object(H.a)({},e),{},{showWin:!0}):a.type===s.HIDE_WIN?Object(H.a)(Object(H.a)({},e),{},{showWin:!1}):e})),N=v;t.a.render(Object(T.jsx)(n.a,{store:N,children:Object(T.jsx)(M,{})}),document.getElementById("root"))},5:function(e,a,r){e.exports={controls:"Controls_controls__1eluf",wrapper:"Controls_wrapper__1KVLY",value:"Controls_value__1WNi0",inactive:"Controls_inactive__3HsBj",controlsDivider:"Controls_controlsDivider__1KgVB"}}},[[25,1,2]]]);
//# sourceMappingURL=main.8acf250d.chunk.js.map