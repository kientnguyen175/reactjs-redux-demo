import React, {Component} from 'react'
class Items extends Component {
    render (){
        let listData = []
        if (this.props.items){
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                    </tr>
                );
            }
            )
        }
        return (
            <div className="">
                <div>
                    <table className="list-item">
                        <tbody>
                            <tr>
                                <th className="id">Id cua du lieu</th>
                                <th className="name">Ten cua du lieu</th>
                            </tr>
                            {listData}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Items;