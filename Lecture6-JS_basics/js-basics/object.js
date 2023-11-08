var birds = {
    x: 100,
    y: 20,
    color: "blue",
    eggs: ["one", "two", "three"],
    fly: function () {
        console.log("bird is flying ", this.x, this.y);
    }
}

// for loop
for (let i = 0; i < birds.eggs.length; i++) {
    console.log(birds.eggs[i]);
    
}

//for each loop
birds.eggs.forEach(function (val,index) {
    console.log(index, val);
})

birds.fly();