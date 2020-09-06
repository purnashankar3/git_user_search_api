import React, { Component } from 'react';

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
            <div className="profile fixed text-center">
                
                <input type="text" value={this.state.query} onChange={this.onChangeHandler} placeholder="Enter the git username"/>
                
                <button type="submit" onClick={this.onClickHandler}>Search</button>
                </div>
            
                <div>   
                <img src={this.state.git_data.avatar_url} className="img-thumbnail"/>
                <h2>
                {this.state.git_data.name}
                </h2>
                <p>{this.state.git_data.bio}</p>
                <div>
                    <button onClick={this.onChangeHandler2} >Repositroies</button>
                    {this.state.git_data.repo_url}
                    {this.state.repos.map(repo=><ul key={repo.id}>
                            <li className="repo">{repo.name}</li><br/>
                            {repo.language}<br/>
                            {repo.description}
                    </ul>)}
                </div>

            </div>
        </>
        );
    }
}

export default Profile;