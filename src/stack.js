export function MakeStack() {
  this.stack = [];
};
MakeStack.prototype.isEmpty = function() {
  return this.stack.length === 0;
};

MakeStack.prototype.push = function(value) {
  return this.stack.push(value);
};

MakeStack.prototype.pop = function() {
  return this.stack.pop();
};

MakeStack.prototype.length = function() {
  return this.stack.length;
};