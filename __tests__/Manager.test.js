const Manager = require('../lib/Manager');

test('create manager', () =>{
    const manager = new Manager('mike', '2', 'mike@gmail.com', '123');

    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("get manager's role", () =>{
    const manager = new Manager('mike', '2', 'mike@gmail.com', '123');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});