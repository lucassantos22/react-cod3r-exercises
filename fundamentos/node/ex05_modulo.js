console.log(global === this);
console.log(module === this);
console.log(module.exports === this);

// this igual a module.exports
this.digaOi = function (){
    console.log('Oi!')
};