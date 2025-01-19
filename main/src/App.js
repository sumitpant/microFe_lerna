import React, { lazy, Suspense, useEffect, useState } from 'react'
import Home from './Home';

const NavBar = lazy(() => import('navigation/NavBar'));
const Cart = lazy(() => import("cart/Cart"));

const App = () => {
    const [store, AddToStore] = useState([]);

    function AddToStoreFn(id, name, price, image) {
        const prev = store.slice(0);
        const prevItem = prev.filter(data => data.id === id);
        if (prevItem.length > 0) {
            prevItem[0].count++;
        } else {
            const newItem = {
                id,
                name,
                count: 1,
                price,
                image
            }
            prev.push(newItem);
        }
        console.log("orev",prev);
        AddToStore(prev);

    }
    return (
        <div>
            <Suspense fallback="Loading...">
                <NavBar />
            </Suspense>
            <Suspense fallback="Loading Cart">
                <Cart cart={store} />
            </Suspense>
            <Home add={AddToStoreFn} />

        </div>
    )
}

export default App