import React, { Component } from 'react'
import Axios from 'axios'
import Pagination from './Pagination'
 
 export default class Posts extends Component {
   constructor(){
     super()
     this.state={
       loading:true,
       data:[],
       currentPage:1,
       postsPerPage:10,
       currentPosts:[]
     }
   }

   fetchPosts=()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      this.setState({
        loading:false,
        data:res.data,
        currentPosts:res.data.slice(1,10)
      })
    })
    .catch(err=>console.log(err))
   }
  
   componentDidMount(){
     this.fetchPosts()
   }

   paginate = (p)=>{
    let indexOfLastPost = p * this.state.postsPerPage
    let indexOfFirstPost=  indexOfLastPost - this.state.postsPerPage
    
    this.setState({
      currentPage:p,
      currentPosts:this.state.data.slice(indexOfFirstPost, indexOfLastPost)
    })
     
   }
   render() {
     return (
       <div className="container">
         <h1 className="text-primary">JSON PLACEHOLDER POSTS</h1>

         <h3>{this.state.loading?"loading.......": ""}</h3>
         {
          this.state.data.length > 0?
          
          this.state.currentPosts.map(p=>{
            return(
              <>
              <div className="card" key={p.id}>
                <div className="card-body">
                  <div className="card-title"><b className="text-success">{p.title}</b></div>
                  <div className="card-text"><i>{p.body}</i></div>
                </div>
              </div>
              <hr color="black"/>
              </>
            )
          }): ""
         }
         {this.state.data.length > 0? <Pagination posts={this.state.data} 
          postsPerPage={this.state.postsPerPage}
          paginate={this.paginate}/>:""}
        
       </div>
     )
   }
 }
 