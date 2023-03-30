import { Component } from "react";
import {PropTypes} from "prop-types"

class OtherComp extends Component {
    render() {
        const {name} = this.props;

        return ( // name에 기본값이 없다면 삼항연산자 사용
            <div>{name ? name : "이름"}</div>
        );
    }
}
// props이 전달되지않았을때 undefined 대신 기본으로들어갈 값
OtherComp.defaultProps = {
    name:"기본이름"
}
// prop-tyeps 라이브러리 설치 후 사용
// 다른 자료형이 들어가면 콘솔에 오류로 알려줌
OtherComp.propTypes = {
    name: PropTypes.string
}

export default OtherComp;