type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object ⭐️ : 둘 다 오브젝트로 만들 수 있음
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  // z: 1,
};

// class ⭐️ : 둘 다 클래스에서 구현이 가능
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends ⭐️ : 둘다 확장이 가능(방법은 다름)
interface ZPositionInterface extends PositionInterface {
  z: number;
}
type ZPositionType = PositionType & { z: number };

// only interfaces can be merged.
// interface PositionInterface {
//   z: number;
// }

// 타입은 이게 불가능!!
// type PositionType {
// }
// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"]; // string type
type NumberType = number;
type Direction = "left" | "right"; // uninion type은 인터페이스로 절대 구현 할 수 없다는것!
