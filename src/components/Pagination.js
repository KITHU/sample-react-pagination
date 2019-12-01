import React from 'react'

export default function Pagination(props) {
  let pageNumbers = []
  for(let i=1;i<=Math.ceil(props.posts.length/props.postsPerPage);i++){
    pageNumbers.push(i)
  }
  
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          {
            pageNumbers.map(p=>{
            return(
              <li className="page-item" key={p}><a className="page-link" onClick={()=>props.paginate(p)}>{p}</a></li>
            )
          })
        }
      </ul>
      </nav>
    </div>
  )
}
