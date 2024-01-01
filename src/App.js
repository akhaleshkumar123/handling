import React, { Component } from 'react';
import "./App.css";

class App extends Component {
constructor(props) {
super(props);
this.state = {
firstname: '',
lastname: '',
address: '',
email: '',
mobile: ''
};
}

validatedata = (e) => {
this.setState({ [e.target.name]: e.target.value });
};

datasubmit = (e) => {
e.preventDefault();
console.log('firstname', this.state.firstname);
console.log('lastname', this.state.lastname);
console.log('address', this.state.address);
console.log('email', this.state.email);
console.log('mobile', this.state.mobile);


this.setState({
firstname: '',
lastname: '',
address: '',
email: '',
mobile: ''
});

};

render() {
return (
<div className='Container'>
<h1>Form Handling with class-based Components</h1>
<form onSubmit={(e) => { this.datasubmit(e) }}>
<table>
<tbody>
<tr>
<td> First Name:</td>
<td>
<input
type="text"
name="firstname"
value={this.state.firstname}
onChange={(e) => {
this.validatedata(e);
}}
/>
</td>
</tr>

<tr>
<td> Last Name:</td>
<td>
<input
type="text"
name="lastname"
value={this.state.lastname}
onChange={(e) => {
this.validatedata(e);
}}
/>
</td>
</tr>

<tr>
<td> Address:</td>
<td>
<input
type="text"
name="address"
value={this.state.address}
onChange={(e) => {
this.validatedata(e);
}}
/>
</td>
</tr>

<tr>
<td> Email:</td>
<td>
<input
type="text"
name="email"
value={this.state.email}
onChange={(e) => {
this.validatedata(e);
}}
/>
</td>
</tr>

<tr>
<td> Mobile:</td>
<td>
<input
type="text"
name="mobile"
value={this.state.mobile}
onChange={(e) => {
this.validatedata(e);
}}
/>
</td>
</tr>

<tr>
<td colSpan="2">
<button type='submit' className='btn'>Submit</button>
</td>
</tr>
</tbody>
</table>
</form>
</div>
);
}
}

export default App;