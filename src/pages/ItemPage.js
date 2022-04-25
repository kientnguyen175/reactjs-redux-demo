import React from 'react'
import ItemContainer from '../containers/ItemPageContainer'
class ItemPage extends React.Component{
    render(){
        return(
            <div className="ItemPage">
                <h1>Trang Iteams</h1>
                <ItemContainer/>
            </div>
        );
    }
}

export default ItemPage