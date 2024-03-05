import React, {Component } from 'react';
import axios from 'axios';

export default class data extends Component{
    constructor(){
        super();
        this.state={
            data : null,
            error : null
        }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products/1").then(response=>{
            this.setState({ data : response.data});
        }).catch(error=>{
            this.setState({error : error.message});
        })
    }
    render(){
        const {data,error} = this.state;
        return (
            <>
            <div>
                {
                    error?(<div>Error is:{error}</div>):(data? (<div>
                        {JSON.stringify(data,null,2)}
                        </div>):(<div>Loading...</div>))
                }

            </div>
            </>
        )
    }

}