import EmployeeAdd from './EmployeeAdd.js';

// M5 and M6 and M7
function EmployeeTable(props) {
  // maps employee element in array to create 
  // multiple employee rows
  // creates properties "key" taking in employee.id and "employee"
  // taking in whole element in the array {id, name, ext etc}
  const employeeRows = props.employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
    key: employee._id,
    employee: employee,
    deleteEmployee: props.deleteEmployee
  }));
  // define style here
  // basically make a box around each cell in table

  return (
    /*#__PURE__*/
    //two braces since you're specifiying in-line style, also have to use "800px" instead of just number 800
    React.createElement("table", {
      class: "bordered-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Extension"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Date Hired"), /*#__PURE__*/React.createElement("th", null, "Is Employed"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, employeeRows))
  );
}

// M8
// creating an array of employees

/*
const initialEmployees = [
    {   id: 1,
        name: 'Zak Ruvalcaba',
        ext: 1224,
        email: 'zak@vectacorp.com',
        title: 'CEO',
        dateHired: new Date('2018-08-15'),
        isEmployed: true,
    },
    {
        id: 2, 
        name: 'yuh Ruvalcaba',
        ext: 1234,
        email: 'zaak@vectacorp.com',
        title: 'CFO',
        dateHired: new Date('2019-08-15'),
        isEmployed: true,
    },
]

const sampleEmployee = {
    name: 'Holly Unlikely',
    ext: 1126,
    email: 'sally@vectacorp.com',
    title: 'Director of Sales',
    dateHired: new Date('2015-01-03'),
    isEmployed: true,

}

*/

// M4
class EmployeeFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the employee filter.");
  }
}

// class HTML attribute has to be called class_name in JSX since class is a specific keyword
// hyphens become camelcase in JSX max-hyphen-length ->  maxHyphenLength

function EmployeeRow(props) {
  //const employee = props.employee
  //const style = this.props.rowStyle // property passed onto built-in react compoment
  // need toDateString for it to work

  function onDeleteClick() {
    props.deleteEmployee(props.employee._id);
  }
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.employee.name), /*#__PURE__*/React.createElement("td", null, props.employee.extension), /*#__PURE__*/React.createElement("td", null, props.employee.email), /*#__PURE__*/React.createElement("td", null, props.employee.title), /*#__PURE__*/React.createElement("td", null, props.employee.dateHired.toDateString()), /*#__PURE__*/React.createElement("td", null, props.employee.currentlyEmployed ? 'Yes' : 'No'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    onClick: onDeleteClick
  }, "DELETE")));
}

// M3

// gathering all components within employeelist
class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    }; //using hard-coded array to initialize state
    this.createEmployee = this.createEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  componentDidMount() {
    this.loadData(); //simulates asynchronous call, load employee data from state
  }
  loadData() {
    fetch('/api/employees').then(response => response.json()).then(data => {
      console.log('Total count of employees:', data.count);
      data.employees.forEach(employee => {
        employee.dateHired = new Date(employee.dateHired);
      });
      this.setState({
        employees: data.employees
      });
    }).catch(err => {
      console.log(err);
    });
    /*
    setTimeout(() => {
        this.setState({ employees: initialEmployees })
    }, 500 )
    */
  }
  createEmployee(employee) {
    fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    }).then(response => response.json()).then(newEmployee => {
      newEmployee.employee.dateHired = new Date(newEmployee.employee.dateHired);
      const newEmployees = this.state.employees.concat(newEmployee.employee);
      this.setState({
        employees: newEmployees
      });
      console.log('Total count of employees:', newEmployees.length); // modifying the state after adding to database
    }).catch(err => {
      console.log(err);
    });
  }
  deleteEmployee(id) {
    fetch(`/api/employees/${id}`, {
      method: 'DELETE'
    }).then(response => {
      if (!response.ok) {
        console.log('Failed to delete employee.');
      } else {
        this.loadData();
      }
    });
  }
  // passing employees to EmployeeTable via prop
  // passing method 
  render() {
    //have to have render() function within a class
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Employee Management Application"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, {
      employees: this.state.employees,
      deleteEmployee: this.deleteEmployee
    }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeAdd, {
      createEmployee: this.createEmployee
    }));
  }
}
const contentNode = document.getElementById('content');
ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmployeeList, null)),
//what you want to render
contentNode // where you want to render the element to
); //rendering component to contentNode element

/*
// M2
function Welcome(props) {
    return <h1>Hello, {props.name} </h1>
}
// <Welcome name="Zak Ruvalcaba" />
// one property called name
ReactDOM.render(<Welcome name="Zak Ruvalcaba" />, document.getElementById('content'))
*/