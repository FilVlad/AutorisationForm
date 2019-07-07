import React from 'react';
import '../src/form.css';


export default class MyForm extends React.Component {
  state = {
    form: {  
        login: '',
        password: '',
    },
    formTheme: 'light',
  }; 
  
  handleChangeField = (e) => {
      const { form } = this.state;
      const value = e.target.value;
      this.setState({ form: {...form, [e.target.name]: value} });
  }

  handleOnSubmit = (e) => {
      e.preventDefault();
    this.setState({form: {login: '', password: ''}});
  }

  handleSwitchTheme = (e) => {
   
    const { formTheme } = this.state;
    const newTheme = formTheme === 'light' ? 'dark' : 'light';
    this.setState({formTheme: newTheme });
  }

  renderForm() {
      const { form } = this.state;
    return (
        <form className="aut__form" onSubmit={this.handleOnSubmit}>
            <input 
            className="input login" 
            name="login" 
            placeholder=" Login"
            value={form.login} 
            onChange={this.handleChangeField} />

            <input 
            className="input password" 
            type="password" 
            name="password" 
            value={form.password}
            placeholder=" Password" 
            onChange={this.handleChangeField} />

            <button type="submit" className="btn__submit">Submit</button>
        </form>
    );
  }

  render() {
      switch (this.state.formTheme) {
          case 'light': {
        return(
            <div className="form__body">
              <h2>Account</h2>
              {this.renderForm()}
              <div class="toggle-button-cover">
          <div class="button r" id="button-1">
          <input type="checkbox" class="checkbox" onClick={this.handleSwitchTheme}/>
          <div class="knobs"></div>
         <div class="layer"></div>
        </div>
</div>
            </div>
        );
    };
    case 'dark': {
        return(
          <div className="form__body-dark">
              <h2 style={{color: "#e4e4e4"}}>Account</h2>
              {this.renderForm()}
              <div class="toggle-button-cover">
        <div class="button r" id="button-1">
          <input type="checkbox" class="checkbox" checked="checked" onClick={this.handleSwitchTheme} />
          <div class="knobs"></div>
         <div class="layer"></div>
        </div>
</div>
          </div>
        );
    }
    }
  }
}
