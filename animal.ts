abstract class Animal {
  abstract move(): void;
  abstract eat(): void;
}

class Dog extends Animal {
  constructor(
    private readonly transportation: Transportation,
    private readonly food: Food
  ) {
    super();
  }

  move(): void {
    console.log(`Move with ${this.transportation}`);
  }
  eat(): void {
    console.log(`Eat ${this.food}`);
  }
}

class Bird extends Animal {
  constructor(
    private readonly transportation: Transportation,
    private readonly food: Food
  ) {
    super();
  }

  move(): void {
    console.log(`Move with ${this.transportation}`);
  }
  eat(): void {
    console.log(`Eat ${this.food}`);
  }
}

type AnimalCons = new (transportation: Transportation, food: Food) => Animal;
type Transportations = ["foot", "wing"];
type Foods = ["bone", "bugs"];
type Transportation = "foot" | "wing";
type Food = "bone" | "bugs";

function activator(
  animals: AnimalCons[],
  transportations: Transportations,
  foods: Foods
) {
  animals.forEach((animal) => {
    const animalInstance = new animal(
      transportations.reduce(
        (transportation: Transportation) => transportation
      ),
      foods.reduce((food: Food) => food)
    );

    animalInstance.move();
    animalInstance.eat();
  });
}

const animal: AnimalCons[] = [Dog, Bird];
const transportations: Transportations = ["foot", "wing"];
const foods: Foods = ["bone", "bugs"];

activator(animal, transportations, foods);
