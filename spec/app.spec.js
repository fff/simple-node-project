var app = require('../app')
describe("App", function(){
  it("should return HELLO", function() {
    expect(app().hello()).toBe('HELLO')
  });

  it("should return trimed hello", function() {
    expect(app().trim(' hello    ')).toBe('hello')
  });
});
