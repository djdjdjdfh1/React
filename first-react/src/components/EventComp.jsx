import React, { Component } from 'react'

export class EventComp extends Component { 
    // state 작성
    constructor(props) {
        super(props);
        this.state = {
            name: "홍길동",
            address: "부산",
            toggle: true
        }

        // 메소드에 .bind로 묶어서 this전달
                          // 아래 this.printEvent는 작성한 메소드
                          // 그 메소드에 .bind(this)로 연결
        this.printEvent = this.printEvent.bind(this);
        this.printAddress = this.printAddress.bind(this);
        this.setToggle = this.setToggle.bind(this);
        //this.printEvent는 이름
        // 참고) let num = 0; num = num + 1; >> num의 결과: 1
        
    }

    // 이벤트안에서 작성한 함수 그대로 들고와서 사용할수 있다
    // render에서 사용한 값을 쓸 수 없다
    // this.state.name을 통해서 접근
    // 메소드에 바로 .bind를 통해서 this를 묶어줄수 없다
    // 메소드만 만들어서 바로 사용하면 this를 찾지못해서 오류
    // >> constructor에서 bind로 묶어서 사용
    printEvent() {
        console.log("이벤트 출력");
        console.log(this.state.name);
      }
    printAddress(e) {
        e.target.innerHTML = this.state.address; 
        console.log("이벤트 완료")
    }

    // this.setState 사용해서 값수정
    setToggle() {
        this.setState({toggle: !this.state.toggle})
      }

  render() {
    // render안에서 this = EventComp;
    // this.state는 construct의 속성값
     const {name} = this.state;

    return (
        // 이벤트를 위한 버튼 작성
        <div>
          <h3>버튼을 클릭했을때 console.log("이벤트 실행")</h3>
          <button
          // 실행할 함수내용이 짧을때 (화살표 함수를 이용함)
          // 이벤트 객체 사용가능 
          // this를 사용했을때 자기자신 컴퍼넌트 호출
          // >> 클래스컴퍼넌트에서 사용하는 props와 state호출
          onClick={(e) => {console.log(e, this)}}
          >
            화살함수를 사용해서 이벤트 실행
          </button>
          <button
          // 익명함수를 사용해서 이벤트 객체 사용가능
          // this를 사용하면 연결된 객체가 없으므로 undefined 출력
          // html파일에서 js 익명함수를 들고오면 window객체로 들고오지만
          // react에서 익명함수를 들고오면 this의 값이 undefined
          // react에서 익명함수를 사용하려면 함수의 this값을 연결
          // this값을 연결하기위해 .bind(this)
          // return 안에서 .bind(this) 불러오는 this = EventComp
          onClick={ function(e) {console.log(e, this)}.bind(this)}
          >
            익명함수를 사용해서 이벤트 실행
          </button>

          <h3>이벤트의 함수(메서드)를 따로 작성하는 방법</h3>
          <p>
            버튼을 눌렀을때 console.log(이벤트출력)
            this.state.name이 "홍길동"을 출력
          </p>
          <button
            onClick={ function() {
              console.log("이벤트 출력");
              // name값을 render에서 this.state값을 가져와서
              // this를 연결하지않아도 사용가능
              console.log(name);
            }.bind(this)
          }
          >
            메소드를 사용한 이벤트
          </button>

          <button
          // 작성한 메소드를 들고올때 this.를 통해 가져옴
            onClick={this.printEvent}
          >
            메소드를 사용한 이벤트
          </button>

          {/* 이벤트 : 메소드 만들기 실습 */}
          <p>
            버튼을 누르면 state의 address부산을 출력하고
            console.log를 이용하여 이벤트 완료 출력
          </p>
          <button 
          onClick={this.printAddress}
          >
            이벤트
          </button>
          <button 
          onClick={function(e) {
            e.target.innerHTML = this.state.address;
            console.log("이벤트 완료");
          }.bind(this)}
          >
            이벤트2
          </button>

          {/* this.setState를 사용하는 메소드 */}
          <button
          onClick={this.setToggle}
          >
            {this.state.toggle ? "on" : "off"}
          </button>
      </div>
    )
  }
}

export default EventComp