import React from 'react'
import Joke from './Joke'
import jokesData from './jokesData'

export default function App(props) {
  const jokeElements = jokesData.map((joke,i) => <Joke
      punchline={joke.punchline}
      setup={joke.setup}
      index={i}
    />
  )
  return (
    <>
      {jokeElements}
    </>
  )
}


// {/* <div>
//   <Joke 
//     setup="I got my daughter a fridge for her birthday."
//     punchline="I can't wait to see her face light up when she opens it."
//     likes={123}
//     isPun={true}
//     comments={[
//       {
//         by: "Mairaj",
//         text: "Awesome post, thanks",
//         date: new Date().getFullYear()
//       },
//       {
//         by: "Sajid",
//         text: "Awesome post, thanks",
//         date: 2022-2-1
//       },
//     ]}
//   />
//   <Joke 
//     setup="How did the hacker escape the police?"
//     punchline="He just ransomware!"
//     likes={Number("3")}
//     isPun={true}
//   />
//   <Joke 
//     setup="Why don't pirates travel on mountain roads?"
//     punchline="Scurvy."
//     isPun={true}
//   />
//   <Joke 
//     setup="Why do bees stay in the hive in the winter?"
//     punchline="Swarm."
//     isPun={false}
//   />
//   <Joke 
//     setup="What's the best thing about Switzerland?"
//     punchline="I don't know, but the flag is a big plus!"
//     isPun={false}
//   />
// </div> */}