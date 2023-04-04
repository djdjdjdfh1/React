import React, { Component } from 'react'

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

// 필터링된 값을 테이블로 출력
export class ProductTable extends Component {

    constructor(props) {
        super(props)
    }

  render() {
    const {products} = this.props
    return (
      <div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <ProductCategoryRow /> 
                {
                    products.map(
                        (product)=>
                        <ProductRow 
                        name={product.name}
                        price={product.price} 
                        />)
                }
                {
                    // products의 category중 'Sporting Goods'를
                    // 가진 배열을 만드는 방법
                    // filter를 이용해서 내용을 작성하고
                    // <ProductRow />통해서 내용출력하기
                }   
                
            </tbody>
        </table>
      </div>
    )
  }
}

export default ProductTable