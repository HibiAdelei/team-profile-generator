const Engineer = require('../lib/Engineer');

// creates engineer object 
test('create engineer object', () => {
 const engineer = new Engineer('Hibiscus', 12, 'hibiscus@hibi.hibi');
 
 expect(employee.name).toEqual(expect.any(String));
 expect(employee.id).toEqual(expect.any(Number));
 expect(employee.email).toEqual(expect.any(String));
});

// checks role from getRole()
test('gets role of employee', () => {
 const employee = new Employee('Hibiscus', 12, 'hibiscus@hibi.hibi');

 expect(employee.getRole()).toEqual("Employee");
}); 

// checks github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Hibiscus', 12, 'hibiscus@hibi.hibi', 'HibiAdelei');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});