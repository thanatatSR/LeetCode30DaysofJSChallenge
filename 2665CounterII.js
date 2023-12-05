var createCounter = function(init) {
    const theOldOne = init
    return {
        increment: () => {
            init++
            return init
        },
        decrement: () => {
            init--
            return init
        },
        reset: () => {
            init = theOldOne
            return init
        },
    }
};
