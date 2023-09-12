import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
      <h1 style={heading}> Inline </h1>
      <h1 className='error'>Inline Error</h1>
      {/* <h1 className={styles.success}>Success</h1>  // error here b/c of annot reg styles -> for app but not child component */}
    </div>
  )
}

export default Inline