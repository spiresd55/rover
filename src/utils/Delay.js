export const delay = (timeInMs, cb) => {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, cb), timeInMs)
    });
}