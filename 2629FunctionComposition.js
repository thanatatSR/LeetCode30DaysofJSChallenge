var compose = function(functions) {
	return (x) => {
        return x = functions.reduceRight((cur,fn) => fn(cur), x)
    }
};
