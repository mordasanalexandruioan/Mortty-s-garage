function createTable() {
    let table = document.createElement('table');

    let thead = document.createElement('thead');
    let trHead = document.createElement('tr');

    let thHead1 = document.createElement('th');
    thHead1.scope = "col";
    thHead1.textContent = "Name";
    trHead.append(thHead1);

    let thHead2 = document.createElement('th');
    thHead2.scope = "col";
    thHead2.textContent = "Problem";
    trHead.append(thHead2);

    let thHead3 = document.createElement('th');
    thHead3.scope = "col";
    thHead3.textContent = "Date";
    trHead.append(thHead3);
    thead.append(trHead);
    table.append(thead);



    let tbody = document.createElement('tbody');
    let trBody = document.createElement('tr');

    let thBody = document.createElement('th');
    thBody.scope = "row";

    let spanTable = document.createElement('span');
    spanTable.textContent = "Popa Ioan";
    thBody.append(spanTable);
    trBody.append(thBody);

    let tdProblem = document.createElement('td');
    tdProblem.textContent = "Oil";
    trBody.append(tdProblem);

    let tdDate = document.createElement('td');
    tdDate.textContent = "09/22/2021";
    trBody.append(tdDate);

    let confirm = document.getElementById('confirm');
    confirm.addEventListener('click', (e) => {
        tbody.append(createAppointment());
    });

    tbody.append(trBody);
    table.append(tbody);

    return table;
}

function verifyInputs() {
    let confirm = document.getElementById('confirm');
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == null) {
            console.log('1');
        }
    }
}

function createAppointment() {
    let date = document.getElementById('appointment');
    let name = document.getElementById('appnt-name');
    let problem = document.getElementById('appnt-problem');
    let trBody = document.createElement('tr');

    let thBody = document.createElement('th');
    thBody.scope = "row";

    let spanTable = document.createElement('span');
    spanTable.textContent = name.value;
    thBody.append(spanTable);
    trBody.append(thBody);

    let tdProblem = document.createElement('td');
    tdProblem.textContent = problem.value;
    trBody.append(tdProblem);

    let tdDate = document.createElement('td');
    tdDate.textContent = date.value;
    trBody.append(tdDate);

    return trBody;
}