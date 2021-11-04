let menu = {
    _courses: {
      appetizers:[],
      mains: [],
      desserts: []
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn){
      return this._courses.appetizers = appetizerIn;
    },
    get mains(){
       return this._courses.mains;
    },
    set mains(mainsIn){
      return this._courses.mains = maisIn;
    },
    get desserts(){
       return this._courses.desserts;
    },
    set desserts(dessertsIn){
      return this._courses.desserts = dessertsIn;
    },
    get courses(){
      return{
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice){
      let dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this.courses[courseName];
      const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    },
  
    generateRandomMeal(){
      const appetizers =this.getRandomDishFromCourse('appetizers');
      const mains =this.getRandomDishFromCourse('mains');
      const desserts =this.getRandomDishFromCourse('desserts');
      const totalPrice= appetizers.price + mains.price + desserts.price;
      return `Your meal is ${appetizers.name}, ${mains.name}, and ${desserts.name} and the total price is ${totalPrice}`;
    }
  };
  
  menu.addDishToCourse('appetizers','salad',50);
  menu.addDishToCourse('appetizers','fruits',40);
  menu.addDishToCourse('appetizers','porridge',30);
  
  menu.addDishToCourse('mains','banku',120);
  menu.addDishToCourse('mains','waakye',250);
  menu.addDishToCourse('mains','salad',50);
  
  menu.addDishToCourse('desserts','Ice Cream',90);
  menu.addDishToCourse('desserts','Coke',120);
  menu.addDishToCourse('desserts','cake',524);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);