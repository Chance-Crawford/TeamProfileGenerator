const Intern = require('../lib/Intern');

test('create intern', () =>{
    const intern = new Intern('fred', '3', 'fred@gmail.com', 'fred-github');

    expect(intern.school).toEqual(expect.any(String));
});

test("get intern's school", () =>{
    const intern = new Intern('fred', '3', 'fred@gmail.com', 'fred-github');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("get intern's role", () =>{
    const intern = new Intern('fred', '3', 'fred@gmail.com', 'fred-github');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});