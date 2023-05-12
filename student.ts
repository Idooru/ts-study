/**
 * #인터페이스, #구현(implements), #다형성(Polymorphism)
 */

interface Study {
  study(): void;
  studyHarder(): void;
}

interface Play {
  play(): void;
  playHarder(): void;
}

class Student implements Study, Play {
  play(): void {
    console.log("놀기");
  }
  playHarder(): void {
    console.log("빡세게 놀기");
  }
  study(): void {
    console.log("공부하기");
  }
  studyHarder(): void {
    console.log("빡세게 공부하기");
  }
}

const commonStudent = new Student();

commonStudent.play();
commonStudent.playHarder();
commonStudent.study();
commonStudent.studyHarder();

const faithfulStudent: Study = new Student();
const lazyStudent: Play = new Student();

faithfulStudent.study();
faithfulStudent.studyHarder();

lazyStudent.play();
lazyStudent.playHarder();
