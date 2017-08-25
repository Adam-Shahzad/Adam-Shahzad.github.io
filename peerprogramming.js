"use strict";
let dogs = function dogs() {
    var ticketer1 = {route : [3, 1 ,2 ,3] , gossip : 1};
    var ticketer2 = {route : [3, 2, 3, 1] , gossip : 1};
    var ticketer3 = {route : [4, 2, 3, 4, 5] , gossip : 1};

    var ticketers=[];

    var gossip_counter = 0;

    ticketers.push(ticketer1);
    ticketers.push(ticketer2);
    ticketers.push(ticketer3);


    var i =0;
    while (gossip_counter< ticketers.length){                                                                                                                   // goes through each stop
        for (let x = 0; x< ticketers.length; x ++){                                                                                                                  // goes through each ticketer for start of comparison
            for ( let y = x+1; y < ticketers.length; y++ ){                                                                                                        // goes through each ticketer for last of comparison
                if ( ticketers[x].route[i%ticketers[x].route.length]  == ticketers[y].route[i%ticketers[x].route.length]){
                 ticketers[x].gossip =ticketers[x].gossip + ticketers[y].gossip;
                 ticketers[y].gossip =  ticketers[x].gossip;
                 }
            }
        }   
    gossip_counter = ticketers.filter(w=>w.gossip = ticketers.length).length
    i++;
    }
    console.log("i: " + i);
    console.log("tick1 gossip: " + ticketer1.gossip);
    console.log("tick2 gossip:  " + ticketer2.gossip);
    console.log("tick3 gossip:  " + ticketer3.gossip);
    console.log("gossip counter: " + gossip_counter);
    console.log("ticketers length: " + ticketers.length);
}

//for (let c = 0; c < ticketers.length; c ++){
//        if (ticketers[c].gossip == ticketers.length){
//            gossip_counter++;
//        }
//    }