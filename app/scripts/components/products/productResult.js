import React from 'react'
import ItemsHeader from './productHeader'
import ItemsList from './ListOfProducts'

const ItemsResult = ({items}) => {
    return items.length ? (
        <div>
            <ItemsHeader itemsAmount={items.length}/>
            <ItemsList items={items}/>
        </div>
    ): <div>Not Found</div>
}

export default ItemsResult