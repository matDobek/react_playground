import React from "react"

export default function Experience() {
  console.log("----- Render :: Experience")

  //
  // React renders Component and it's children when state ( from `useState` ) changes.
  //
  // `memo` can be used to mark component as pure.
  //    pure component only renders if `property` changes
  //

  const [counter, setCounter] = React.useState(0)

  // same as previous snapshot
  const primitive = "primitive"
  const obj_1 = React.useRef( {v: "obj_1"} )

  // new value
  const obj_2 = {v: "obj_2"}
  const SampleCMemo = React.memo(Sample)

  return (
    <>
      <button onClick={ () => { setCounter( (c) => ( c+1 ) ) } }>inc</button>
      <span> {counter} </span>

      {/* no re-renders */}
      <SampleMemo value={primitive} />
      <SampleMemo value={obj_1.current.v} />
      <SampleMemo value={obj_2.v} />

      {/* re-renders */}
      <SampleBMemo value={obj_2} />
      <SampleCMemo value={primitive} />
    </>
  )
}

function Sample({value}) {
  console.log(value)
  return <div> {value} </div>
}
const SampleMemo = React.memo(Sample)

function SampleB({value}) {
  console.log(value.v)
  return <div> {value.v} </div>
}
const SampleBMemo = React.memo(SampleB)
