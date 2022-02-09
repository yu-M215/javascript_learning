function hoge() {
  var args = Array.prototype.slice.call(arguments);
  // let args = Array.from(arguments);
  console.log(args.join('／'));
}

hoge('Angular', 'React', 'Backbone');