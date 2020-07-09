

class Foo{
  constructor(){
    console.log('ctor')
    let x=100;
    this.foo1 = this.foo1.bind(this)
  }
  

  foo=()=>{
   console.log("foo")
  }
  function foo1(){
   console.log("foo1 this.x:",this.x)
  }

}

f = new Foo()
f.foo1()

