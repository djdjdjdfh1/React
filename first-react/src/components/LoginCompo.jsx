import React, { Component } from 'react'

export class LoginCompo extends Component {
  // state 생성
  constructor(props) {
    super(props);
    this.state = {
      name : "",
      login : false
    }
  }

  // inputChange
  inputChange = (e) => {this.setState({name: e.target.value})};

  // loginMethod
  loginMethod = () =>{this.setState({login : true})}

  render() {
    const {name, login} = this.state;
    return (
      <div>
        <h1 stlye={ login ? {display:"block"} : {display: "none"} }>
          {name},{login ? "true" : "false"}
        </h1>
        <p>이름을 입력하세요</p>
        <input 
        type="text"
        onChange={this.inputChange} 
        />
        <button
        onClick={this.loginMethod}
        >
          확인
        </button>

        <div>  
        <h1 stlye={ {display: "none"} }>
          {name},{login ? "true" : "false"}
        </h1>
        <p>이름을 입력하세요</p>
        <input 
        type="text"
        onChange={this.inputChange} 
        />
        <button
        onClick={this.loginMethod}
        >
          확인
        </button>
        </div>

      </div>
    )
  }
}

export default LoginCompo