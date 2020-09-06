import React, { Component } from 'react';
import {Card,CardBody, ListGroupItem,Container,Row,Col,Button,InputGroup} from "reactstrap";
import "../App.css"

import axios from "axios";

import Search from "./Search"

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            git_data:"",
            repos:[],
            errorMsg:""
            
        }
    }

    onClickHandler=()=>{
        axios.get(`https://api.github.com/users/${this.state.query}`)
        .then(response=>{
            console.log(response.data)
            this.setState({git_data:response.data})
          

        })
        .catch(error=>{
            this.setState({errorMsg:"This username does not exist"})
            alert("This username does not exist")
        })
       
    }
    onChangeHandler2=()=>{
        axios.get(`https://api.github.com/users/${this.state.query}/repos`)
        .then(res=>{
            console.log(res.data)
            this.setState({repos:res.data})
        })
    }
    
    onChangeHandler=(e)=>{
        this.setState({query:e.target.value})
        
    }
    render() {
        const git_data=this.state;
        return (

            <>
           
                <div className="profile  text-center">
                
                <input type="text" value={this.state.query} onChange={this.onChangeHandler} placeholder="Enter the git username"/>
                
                <button className="search-btn"   onClick={this.onClickHandler}>Search</button>
                </div>
                <Container>
                    <Row>
                        <Col>
                        <div>
                        
                         <img src={this.state.git_data.avatar_url} className="img-thumbnail"/>
                         
                          <h2>
                         {this.state.git_data.name}
                         </h2>
                         <p>{this.state.git_data.bio}</p>
                        
                        
                         </div>
                         </Col>
                    <Col>
                    <div className="text-center">
                    <Button className="repo-btn" color="secondary" onClick={this.onChangeHandler2} >Repositroies</Button>
                    </div>
                    {this.state.git_data.repo_url}
                    {this.state.repos.map(repo=><ul key={repo.id}>
                        
                            <div className="repo-name">{repo.name}</div>
                           <div className="text-secondary"> {repo.language}</div>
                           <div className="text-secondary">{repo.description}</div> 
                           
                    </ul>)}
                
                </Col>
                </Row>
            </Container>
        </>    
        
        );
    }
}

export default Profile;