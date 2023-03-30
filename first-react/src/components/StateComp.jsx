import React, { Component } from 'react'

class StateComp extends Component {
    // state 컴퍼넌트 안에서 사용되는 변수
    constructor(props) {
        // constructor를 사용하면 props를 따로 연결
        super(props);
        // this.state안에 객체 형태로 값을 작성할 수 있다
        this.state = {
            number : 0,
        }
    }

    // 화면에 출력되는 html
    render() {
        // this.state의 값을 비구조화 할당을 통해 사용
        const {number} = this.state;
        // return의 html안에서 직접 불러와서 사용
        return (
            <div>
                <h3>{number}</h3>
                <h3>{this.state.number}</h3>
                <button onClick={() => {this.setState( {number: number+1} ) } }>
                    +1
                </button>
            </div>
        )
    }
}
export default StateComp;