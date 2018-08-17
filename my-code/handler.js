module.exports.greet = (event, context, callback) => {
    //event data from the event call
    //callback ends function execution

    console.log(JSON.stringify(event));
    callback(null, {message: 'hi it worked'});
    //first arg is error
}