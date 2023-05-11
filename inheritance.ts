class Human {
  constructor(
    protected readonly name: string,
    protected readonly age: number
  ) {}

  introduce(): string {
    return `Hi I'm ${this.name} and I'm ${this.age}years old`;
  }
}

class Developer extends Human {
  constructor(protected readonly name: string, protected readonly age: number) {
    console.log(name);
    console.log(age)
    super(name, age);
  }

  introduce(): string {
    const greeting = super.introduce();
    return greeting.concat(" and do code");
  }
}

const dev: Human = new Developer("Idooru", 26);
const result = dev.introduce();
console.log(result);
