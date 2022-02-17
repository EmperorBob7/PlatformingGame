export default {
  level1: {
    items: {
      grass: { x: 0, y: 600, width: 700, height: 25, color: "#00BB00" , type:"block"},
      floor: {"x":0,"y":625,"width":700,"height":75,"color":"#964B00", type:"block"},
      b1: {"x":150,"y":500,"width":100,"height":25,"color":"#aa0000", type:"block"},
      b2: {"x":300,"y":450,"width":75,"height":25,"color":"#aa0000", type:"block"},
      b3: {"x":400,"y":400,"width":50,"height":25,"color":"#aa0000", type:"block"},
      finish: {"x":500,"y":350,"width":100,"height":15,"color":"#FFD700", type:"finish"}
    },
    x: 20,
    y: 100,
    "text": "Use WASD to move",
    "coins": 0
  },
  level2: {
    items: {
      grass: {"x":0,"y":600,"width":700,"height":25,"color":"#00BB00",type:"block"},
      floor: {"x":0,"y":625,"width":700,"height":75,"color":"#964B00",type:"block"},
      b1: {"x":100,"y":500,"width":100,"height":20,"color":"#aa0000",type:"block"},
      b2: {"x":200,"y":400,"width":100,"height":20,"color":"#aa0000",type:"block"},
      b3: {"x":100,"y":300,"width":100,"height":20,"color":"#aa0000",type:"block"},
      b4: {"x":100,"y":200,"width":100,"height":20,"color":"#aa0000",type:"block"},
      h1: {"x":200,"y":200,"width":100,"height":20,"color":"green","goal":400,"velocity":2,type:"horizontal"},
      finish: {"x":500,"y":200,"width":100,"height":20,"color":"#FFD700",type:"finish"}
    },
    x: 20,
    y: 400,
    "text": "Green Blocks may be Horizontal Sliders",
    "coins": 0
  },
  level3: {
    items: {
      grass: {"x":0,"y":600,"width":700,"height":25,"color":"#00BB00",type:"block"},
      floor: {"x":0,"y":625,"width":700,"height":75,"color":"#964B00",type:"block"},
      v1: {"x":100,"y":500,"width":100,"height":20,"color":"green","goal":200,"velocity":-3,type:"vertical"},
      h1: {"x":200,"y":200,"width":100,"height":20,"color":"green","goal":400,"velocity":2.5,type:"horizontal"},
      finish: {"x":550,"y":200,"width":100,"height":20,"color":"#FFD700",type:"finish"}
    },
    x: 20,
    y: 400,
    "text": "They can also be Vertical Sliders",
    "coins": 0
  },
  level4: {
    items: {
      grass: {"x":0,"y":600,"width":200,"height":25,"color":"#00BB00",type:"block"},
      floor: {"x":0,"y":625,"width":200,"height":75,"color":"#964B00",type:"block"},
      v1: {"x":100,"y":500,"width":100,"height":25,"color":"green","goal":200,"velocity":-4,type:"vertical"},
      bounce1: {"x":350,"y":500,"width":100,"height":25,"color":"lime",type:"bounce"},
      finish: {"x":550,"y":200,"width":100,"height":20,"color":"#FFD700",type:"finish"}
    },
    x: 20,
    y: 400,
    "text": "Lime panels keep your vertical velocity. Don't press W when landing on them",
    "coins": 0
  },
  level5: {
    items: {
      grass: {"x":0,"y":600,"width":300,"height":25,"color":"#00BB00",type:"block"},
      floor: {"x":0,"y":625,"width":300,"height":75,"color":"#964B00",type:"block"},
      w1: {"x":100,"y":0,"width":10,"height":500,"color":"#333",type:"block"},
      w2: {"x":200,"y":100,"width":10,"height":500,"color":"#333",type:"block"},
      c1: {"x":200,"y":450,"width":10,"height":50,"color":"white",type:"cling"},
      c2: {"x":100,"y":340,"width":10,"height":50,"color":"white",type:"cling"},
      c3: {"x":200,"y":230,"width":10,"height":50,"color":"white",type:"cling"},
      c4: {"x":100,"y":120,"width":10,"height":50,"color":"white",type:"cling"},
      bounce1: {"x":300,"y":300,"width":100,"height":10,"color":"lime",type:"bounce"},
      finish: {"x":550,"y":200,"width":100,"height":20,"color":"#FFD700",type:"finish"}
    },
    x: 20,
    y: 400,
    "text": "White blocks allow you to cling to the sides.",
    "coins": 0
  },
  level6: {
    items: {
      grass: {"x":0,"y":600,"width":700,"height":25,"color":"#00BB00",type:"block"},
      floor: {"x":0,"y":625,"width":700,"height":75,"color":"#964B00",type:"block"},
      v1: {"x":100,"y":500,"width":100,"height":20,"color":"green","goal":200,"velocity":-5,type:"vertical"},
      b1: {"x":200,"y":200,"width":100,"height":25,"color":"#aa0000",type:"block"},
      c1: {"x":300,"y":150,"width":25,"height":25,"color":"yellow",type:"coin"},
      c2: {"x":500,"y":400,"width":25,"height":25,"color":"yellow",type:"coin"},
      finish: {"x":550,"y":600,"width":100,"height":20,"color":"#FFD700",type:"finish"}
    },
    x: 20,
    y: 300,
    "text": "A level may require you to collect all coins to pass.",
    "coins": 2
  }
};
