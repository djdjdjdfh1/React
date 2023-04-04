import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            date : new Date(),
        }
        // 속성 또는 필드라고 이야기
        // 현재 컴퍼넌트에서 전역으로 사용하고 싶을 때
        this.timerID = ""
    }

    // 라이프 사이클 메소드 - 마운트 되었을 때 / 시작했을 때
    // 컴퍼넌트가 보이는 한번만 실행
    componentDidMount() {
        console.log("마운트가 되었습니다");
        setInterval(()=>{ this.setState({ date : new Date() }) }, 1000)
        // 처음 한번 실행하는 내용 작성
        // 또는 외부에서 값을 한번만 가져올때
    }

    // 라이프 사이클 메소드 - 업데이트가 되었을 때 / 화면이 바뀌었을 때
    // 현재 컴퍼넌트가 업데이트 될때마다 실행
    // props의 값이 바뀔 때, setState를 통해서 값이 바뀔 때  
    componentDidUpdate() {
        // 모든 업데이트마다 실행할 내용 작성가능
        console.log("업데이트가 되었습니다");
    }

    componentWillUnmount() {
        console.log("컴퍼넌트가 언마운트 되었습니다");
    }

    // 화면에 시간 출력 메소드
    printClock = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${hours}:${minutes}:${seconds}`
    }

  render() {
    return (
      <div>
        <h3>라이프 사이클</h3>
        <h3>{this.state.count}</h3>
        <button
        onClick={()=>{this.setState({count:this.state.count+1})}}
        >
            +1
        </button>
        <hr />
        <h3>시계 {this.printClock(this.state.date)}</h3>
      </div>
    )
  }
}

export default LifeCycle