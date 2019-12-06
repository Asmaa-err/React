import React, {Component} from 'react';


class User extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
    }


    render(){
        return(
         <>
            <tr>
                <td>{this.props.data.firstname} {this.props.data.lastname}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.mobile}</td>
                <td>{this.props.data.bd.substr(0,10)}</td>
                <td>{this.props.data.rue}, {this.props.data.cp}, {this.props.data.ville}</td>
                <td>{this.props.data.nbannonce}</td>
                <td>{this.props.data.note}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.deleteUser(this.props.data.id)}>Supprimer</button>
                    <button className="btn btn-info" onClick={() => this.props.updateUser(this.props.data._id)}>Modifier</button>
                </td>
            </tr>
         </>
        )
    }


}

export default User;