import React, { Component } from 'react'
import Items from '../components/Items'
import * as actions from '../actions/ItemPageActions'
import { connect } from 'react-redux'
class ItemPageContainer extends Component {
    componentDidMount(){
        this.props.initLoad()
    }

    render(){
        return(
            <Items {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    
    return(
        {
            items: state.items.listItem
        }
    );
}

const mapDispatchToProps = (dispatch) => {
    return ({
        initLoad: () => {
            dispatch(actions.getListItem())
        }
    });
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemPageContainer)