import React, { Component } from 'react'

// 글자를 입력받아서 필터링하는 컴퍼넌트
export class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder='Search...' />
        <br />
        <input type="checkbox" name="" id=""/>
        <label htmlFor="">Only show products on stock</label>
      </div>
    )
  }
}

export default SearchBar