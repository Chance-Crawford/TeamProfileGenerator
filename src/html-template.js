
function generateEmployees(employeeData){

    const employeeArr = employeeData.employeeArr;

    if(employeeArr.length < 1){
        return ``;
    }

    return employeeArr.map(employee =>{
        if(employee.role === 'engineer'){
            return `

            <!-- employee info -->
            <article class="col-12 col-md-4 mt-5">
                <div class="employee-card">
                    <div class="primary-color p-3 text-white">
                        <h2 class="font-weight-bold">${employee.name}</h2>
                        <h3><span class="text-white mr-2"><i class="fas fa-glasses"></i></span>Engineer</h3>
                    </div>
                    <div class="div-padding">
                        <ul class="list m-0 p-0">
                            <li class="list-item">ID: ${employee.id}</li>
                            <li class="list-item">Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                            <li class="list-item">GitHub: ${employee.github}</li>
                        </ul>
                    </div>
                </div>
            </article>
            `
        }
        else if(employee.role === 'intern'){
            return `

            <!-- employee info -->
            <article class="col-12 col-md-4 mt-5">
                <div class="employee-card">
                    <div class="primary-color p-3 text-white">
                        <h2 class="font-weight-bold">${employee.name}</h2>
                        <h3><span class="text-white mr-2"><i class="fas fa-user-graduate"></i></span>Intern</h3>
                    </div>
                    <div class="div-padding">
                        <ul class="list m-0 p-0">
                            <li class="list-item">ID: ${employee.id}</li>
                            <li class="list-item">Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                            <li class="list-item">School: ${employee.school}</li>
                        </ul>
                    </div>
                </div>
            </article>
            `
        }
        else{
            return ``;
        }
        
    }).join('');
}




module.exports = employeeData =>{
    console.log(employeeData);

    const employeeArr = employeeData.employeeArr;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="p-5 text-center primary-color">
            <h1 class="font-weight-bold text-white">My Team</h1>
        </header>

        <section class="container mt-3 mb-5">

            <div class="row justify-content-center align-items-center">

                <!-- manager info -->
                <article class="col-12 col-md-4 mt-5">
                    <div class="employee-card">
                        <div class="primary-color p-3 text-white">
                            <h2 class="font-weight-bold">${employeeData.name}</h2>
                            <h3><span class="text-white mr-2"><i class="fas fa-coffee"></i></span>Manager</h3>
                        </div>
                        <div class="div-padding">
                            <ul class="list m-0 p-0">
                                <li class="list-item">ID: ${employeeData.id}</li>
                                <li class="list-item">Email: <a href="mailto: ${employeeData.email}">${employeeData.email}</a></li>
                                <li class="list-item">Office Number: ${employeeData.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                </article>
                ${generateEmployees(employeeData)}

            </div>

        </section>
    </body>
    </html>
    `
}