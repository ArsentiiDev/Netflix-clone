import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import ownerDocument from '@mui/utils/ownerDocument'
import React, { useEffect, useState } from 'react'
import db from '../../firebase'
import './plansscreen.css'
import { useHistory } from 'react-router'
function PlansScreen() {

    const [products, setProducts] = useState([])
    const [subscribe, setSubscribe] = useState(false)

    const history = useHistory()

    useEffect(() => {
        async function get() {
            const q = query(collection(db, 'products'), where('active', '==', true))
            const querySnapshot = await getDocs(q)
            const products = {}
            querySnapshot.forEach(async (productDoc) => {
                products[productDoc.id] = productDoc.data()
            })
            setProducts(products)
        }
        get()

        
    }, [])


    const handleSubscribe = (e) => {
        e.target.classList.add('sub')
        e.target.innerText='unsubscribe'
        if(!subscribe){
            setSubscribe(true)
        }
        history.push('/')
    }




    return (
        <div className="plansScreen">
            {Object.entries(products).map(([productId,productData])=>{
                return( 
                    <div key={productId} className="plansScreen__plan">
                        <div className="planScreen__info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>

                        <button className={`button` } onClick={handleSubscribe}>
                            Subscribe
                        </button>
                    </div>
                )
            })}


        </div>
    )
}

export default PlansScreen
