import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            date : new Date(),
        }
    }
    componentDidMount() {
        console.log("마운트가 되었습니다");
        setInterval(()=>{ this.setState({ date : new Date() }) }, 1000)
    }
    componentDidUpdate() {
        console.log("업데이트가 되었습니다");
    }
    componentWillUnmount() {
        console.log("컴퍼넌트가 언마운트 되었습니다");
    }

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