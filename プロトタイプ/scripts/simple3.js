var Member = function(firstName, lastName) {
  if(!(this instanceof Member)) {
    return new Member(firstName, lastName);
  }
  this.firstName = firstName;
  this.lastName = lastName;
};

var m = Member('権兵衛', '佐藤');
console.log(m);
console.log(m.firstName);
console.log(firstName);