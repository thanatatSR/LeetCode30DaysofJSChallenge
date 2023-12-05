var expect = function(val) {
    return {
        toBe: (n) => {
            return val === n ? true : (() => {throw new Error("Not Equal")})()
        },
        notToBe: (n) => {
            return val !== n ? true : (() => {throw new Error("Equal")})()
        }
    }
};
