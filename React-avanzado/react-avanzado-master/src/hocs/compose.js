
function compose(...fns) {
    return function() {
        return fns.reduceRight((acc, fn) => fn(acc), arg)
    };
};

export default compose;