import * as api from "../../api/api"

export const getProductinfo = () => async (dispatch) =>{
    try {
        const {data} = await api.getProducts()
        dispatch({type: 'FETCH', payload : data})
            
    } catch (error) {
        console.log(error);
    }
}

export const addtoCart =  (id, qty)=> async (dispatch, getState) =>{
     try {
        const {data} = await api.getProductsById(id)
        console.log(data)
        dispatch({type : 'CART ITEMS', payload : 
        {
        name:data.name,
        sub :data.sub,
        color:data.color,
        image: data.image,
        productColor : data.ProductColor,
        countinstock : data.countInStock,
        price: data.price,
        sizes : data.sizes,
        id,
        qty,
        }
    })   
    //   localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
     } catch (error) {
         console.log(error)
     }

}
export const deleteAllItemFromCart=()=>(dispatch)=>{
    dispatch({type: 'DELETE ALL CARTITEMS'})

}

export const deletitems = (id) => (dispatch)=>{
    dispatch({type: 'DELETE ITEMS',  payload : id})
}
