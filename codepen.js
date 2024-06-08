class EmployeeEdit extends React.Component {
    constructor() {
        super()
        this.state = { value: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleSubmit(e) {
      e.preventDefault()
      console.log('Hello', this.state.value)
    }
  
  
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
            </form>

        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<EmployeeEdit />)