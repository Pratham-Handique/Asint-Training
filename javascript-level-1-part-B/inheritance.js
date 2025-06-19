// prototype based inheritance
 let animal ={
    eats : true,
    walks : function(){
        console.log(" Animal walks"+" * "+this.eats);
    }
 }
let rabbit ={
    jumps : true,
 }
// setting prototype
rabbit.__proto__ = animal;
//now 
rabbit.walks(); // Animal walks true
console.log(rabbit.jumps); // true