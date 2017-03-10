import React from 'react'

export default function Frame(props) {
  return (
    <div className="frame">
      <section className="container">
        {props.children}
      </section>
    </div>
  )
}