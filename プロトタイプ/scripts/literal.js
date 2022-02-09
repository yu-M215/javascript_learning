var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

// 個々のメンバー定義を独立したブロックで記述
Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

Member.prototype.toString = function() {
  return this.lastName + ' ' + this.firstName;
};

// 上記の書き換え(メンバー定義が多い時は以下のようにまとめて書いた方が可読性が上がる)
Member.prototype = {
  getName : function() {
    return this.lastName + ' ' + this.firstName;
  },
  toString : function() {
    return this.lastName + ' ' + this.firstName;
  }
};