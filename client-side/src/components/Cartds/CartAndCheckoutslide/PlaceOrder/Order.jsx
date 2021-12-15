import React, { useContext, useState } from 'react'
import * as constants from '../../../../Redux/constants/orderconstants'
import { useHistory } from 'react-router-dom'
import { CircularProgress, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { UserCartcontext } from '../cartcontext'
import { Button } from '@material-ui/core'
import { orderPlacement } from '../../../../Redux/actions/actions'
import './order.css'
function Order() {
    const history = useHistory()
    const { counter, setcounter } = useContext(UserCartcontext)
    const dispatch = useDispatch()
    const info = useSelector(state => state)
    const orderCreated = useSelector(state => state.orderPlacement)

    const { cartItems } = info.cart
    const SHIPPING = 10
    const TAX = 11.70
    const { shipping: { shippingData }, shippingMethod: { shippinValue } } = info
    const getCartTotal = () => {
        return cartItems
            .reduce((price, item) => price + Number(item.price * item.qty), 0)
            .toFixed(2);
    };
    const calculateTotal = () => {
        let totalamount = Number(getCartTotal()) + SHIPPING + TAX
        return Number(totalamount).toFixed(2)
    }
    const orderItems = {
        orderItems: cartItems,
        shipping: SHIPPING,
        tax: TAX,
        paymentMethod: shippinValue,
        shippingInfo: shippingData,
        itemsPrice: Number(getCartTotal()),
        total: calculateTotal(),
        _id: info.user.authData.result._id
    }


    const handlePlaceOrder = () => {
        dispatch(orderPlacement(orderItems, setcounter, counter))

        setcounter(counter + 1)
    }

    React.useEffect(() => {
        if (orderCreated?.success) {
            history.push(`/order/${orderCreated?.order.newsavedOrder._id}`)
            dispatch({ type: constants.ORDER_CREATE_RESET })
        }
    }, [orderCreated?.success, history, orderCreated?.order, dispatch])
    return (
        <div className='placeOrder_wrapper'>
            <div className="info_wrapper">

                <div className="shipping_info">
                    <div className='info_head'>
                        Shipping
                    </div>
                    <div className="info">Name: {shippingData?.fullname}</div>
                    <div className="info">Address: {shippingData?.Address}</div>
                </div>
                <div className="payment_method">
                    <div className='info_head'>
                        Payment Method
                    </div>
                    <div className="info">Method: <span>{shippinValue}</span> </div>
                </div>
                <div className='info_head order_items_info_head'>
                    Order Items
                </div>
                <div className="order_items">
                    {
                        cartItems?.map((item, i) => (

                            <div className="order_items_cart" key={i}>
                                <div className="order_items_cart-item">
                                    <div className="img">
                                        <img src={item.image} alt="order_items_cart-img" />
                                    </div>
                                    <div className="order_items_cart-description items-start">
                                        <div className="">
                                            {item.name}
                                            <span className="order_items_cart-sub">{item.sub}</span>
                                        </div>
                                        <span className="order_items_cart-size">
                                            size:
                                            <div className="order_items_cart-sizes">{item?.sizes}</div>
                                        </span>

                                        <div className="colordescription">{item.productColor}</div>
                                        <div className="color">
                                            color :{" "}
                                            <span
                                                className="item-colorDesc"
                                                style={{ backgroundColor: item.color }}
                                            ></span>
                                        </div>
                                    </div>

                                    <div className="total-item_calc">
                                        {`${item.qty} x $${item.price} = $${Number(item.qty * item.price).toFixed(2)}`}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="ordercalcs_wrapper">
                <h2>Order Summary</h2>
                <div className="ordercalcs_items">
                    <div className="key">Items total price</div>
                    <div className="ordercalcs_amount">${getCartTotal()}</div>
                </div>
                <div className="ordercalcs_items">
                    <div className="key">Shipping</div>
                    <div className="ordercalcs_amount">${SHIPPING.toFixed(2)}</div>
                </div>
                <div className="ordercalcs_items">
                    <div className="key">Tax</div>
                    <div className="ordercalcs_amount">${TAX.toFixed(2)}</div>
                </div>

                <div className="ordercalcs_items ordercalcs_total">
                    <div className="key">Order Total</div>
                    <div className="ordercalcs_amount">${calculateTotal()}</div>
                </div>

                <Button onClick={handlePlaceOrder} fullWidth variant='contained' color='secondary'>Place Order</Button>
                {orderCreated?.loading && <CircularProgress />}
                {orderCreated?.error && <Typography variant='body1' color='secondary'>{orderCreated?.error}</Typography>}
            </div>
        </div>
    )
}

export default Order
