import React from 'react'

export default function Detailpost({post}) {
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}
