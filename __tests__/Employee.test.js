
const Employee = require('../lib/Employee');

test('create employee', () =>{
    const employee = new Employee('james', '1', 'james@gmail.com');

    expect(employee.name).toBe('james');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test("get employee's name", () =>{
    const employee = new Employee('james', '1', 'james@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("get employee's id", () =>{
    const employee = new Employee('james', '1', 'james@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("get employee's email", () =>{
    const employee = new Employee('james', '1', 'james@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("get employee's role", () =>{
    const employee = new Employee('james', '1', 'james@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});