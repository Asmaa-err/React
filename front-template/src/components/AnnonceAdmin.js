import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Annonce extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
    }

    


    render(){
        return(
            <>
            <div>
                <h5><b><Link to={`/Catalogue-page/${this.props.data._id}`}>{this.props.data.title}</Link></b></h5>
                <div><b>Catégorie :</b> {this.props.data.selection}</div> 
                <div><b>Prix :</b> {this.props.data.prix}</div>
                <div>{this.props.data.cp}, {this.props.data.ville}</div>
                <div>{this.props.data.dateA.substring(0,10)}</div>
                <button className="btn btn-danger" onClick={() => this.props.deleteAnnonce(this.props.data.id)}>Supprimer</button>
                <button className="btn btn-success" onClick={() => this.props.detailsAnnonce(this.props.data._id)}>Details</button>
                <div>--------------------</div>
            </div>
           
            
            </>
        )
    }


}

export default Annonce;