const Engineer = require('../lib/Engineer');

test('create engineer', () =>{
    const engineer = new Engineer('mike', '2', 'mike@gmail.com', 'mike-github');

    expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer's github", () =>{
    const engineer = new Engineer('mike', '2', 'mike@gmail.com', 'mike-github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("get engineer's role", () =>{
    const engineer = new Engineer('mike', '2', 'mike@gmail.com', 'mike-github');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});