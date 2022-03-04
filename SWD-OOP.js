// Declaratic Class
class MyPhone {

  name = "Xiaomi";
  ram = 6;
  storage = 64;

  // static variable can be called without new keyword
  static camera = 3;

  // private variable can access with getter and setter
  #_region = 'China';

  get region() {
    return this.#_region;
  }

  set region(value) {
    this.#_region = value;
  }
  // get region() {
  //   return this.
  // }

  showModel() {
    console.log('My Phone Model is ' + this.name);
  }
  showSpec() {
    const { storage, ram, camera } = this;
    return `My phone has ${storage}gb storage, ${ram}gb ram and ${camera} camera`;
  }
}

const p = new MyPhone();
console.log(p.name);
console.log(p.storage);
console.log(p.showSpec());