import { Component } from "react";

class TextComp extends Component {
    render(){
        // this.props 값을 가져와서 사용
        const {name, children} = this.props; 
        return (
            <div>
                <h1>{children}</h1>
                <p>{name}님</p>
            </div>
        );
    }
}
export default TextComp