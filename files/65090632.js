
interface Props {
  isPrime: boolean;
}
interface Other {
  isEdit: boolean;
}
type TFunc<T, U> = (a: T, b: U) => any;
const myFunc = <T, U>(c: TFunc<T, U>) => (a: T) => (b: U) => c(a, b);

const funcA = myFunc<Props, Other>((props: Props, other: Other) => {
  // ..somecode
});
