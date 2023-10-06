import React from 'react'

export default function Joke(props) {
  return (
    <div id={props.index}>
      <h3>Punchline: {props.punchline}</h3>
      {props.setup && <p>Setup: {props.setup}</p>}
      {props.likes && <p>Likes: {props.likes}</p>}
      {props.isPun && <p>This is a pun</p>}
      {props.comments && <p>Comment: {props.comments[0].by} says, {props.comments[0].text} on {props.comments[0].date}</p>}
      <hr />
    </div>
  )
}  
