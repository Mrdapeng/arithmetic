export default function isInteger(num) {
  if (Number.isInteger) {
    Number.prototype.isInteger = function() {
      return typeof num === "number" && num % 1 === 0;
    };
  }
}

export function safeNum(num){
    return Number.isSafeInteger(num)
}