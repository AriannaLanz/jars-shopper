import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProducts } from '../store'


const mapStateToProps = function (state) {
    return {
        products: state.products,
    }
}

const AllProducts = (props) => {
    return(
        <div className='all-products'>
          <h2>All of our Dragons!</h2>
            {props.products.map( product => {
                return (
                    <div key={product.id} className="ProductListItem" >
                        <img src = {product.image} />
                        <h3>{product.title}</h3>
                        <h4>{product.price}</h4>
                    </div>
                )
            })}
        </div>
    )
}



export default connect(mapStateToProps)(AllProducts);
