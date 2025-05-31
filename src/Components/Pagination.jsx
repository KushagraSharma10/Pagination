import React from 'react'

const Pagination = ({data}) => {
  return (
    <div>{data.map((d)=> (
        <div key={d} className="pagination-item">
            {d}
        </div>
    ))}</div>
  )
}

export default Pagination