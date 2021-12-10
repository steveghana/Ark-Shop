import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { UserCartcontext } from '../cartcontext'
import { Button } from '@material-ui/core'
import { orderPlacement } from '../../../../Redux/actions/actions'
import './order.css'
function Order() {
    const { counter, setcounter } = useContext(UserCartcontext)
    const dispatch = useDispatch()
    const info = useSelector(state => state)
    const { shipping: { shippingData }, shippingMethod: { shippingValue } } = info
    console.log(info)
    const handleOrderPlacement = () => {
        dispatch(orderPlacement())
        setcounter(counter + 1)
    }
    return (
        <div className='placeOrder_wrapper'>
            <div className="info_wrapper">

                <div className="shipping_info">
                    <div>
                        Shipping
                    </div>
                    <div className="info">Name: {shippingData?.fullname}</div>
                    <div className="info">Address: {shippingData?.Address}</div>
                </div>
                <div className="payment_method">
                    <div>
                        Payment Method
                    </div>
                    <div className="info">Method: {shippingValue}</div>
                </div>
                <div className="order_items">
                    <div>
                        Order Items
                    </div>
                    <div className="info"></div>
                </div>
            </div>
            <div className="ordercalcs_wrapper">
                <h2>Order Summary</h2>
                <div className="items">
                    <div className="key">Items</div>
                    <div className="amount"></div>
                </div>
                <div className="items">
                    <div className="key">Shipping</div>
                    <div className="amount"></div>
                </div>
                <div className="items">
                    <div className="key">Tax</div>
                    <div className="amount"></div>
                </div>

                <div className="items total">
                    <div className="key">Order Total</div>
                    <div className="amount total_amount"></div>
                </div>
                <Button fullWidth variant='contained' color='secondary'>Place Order</Button>
            </div>
        </div>
    )
}

export default Order
