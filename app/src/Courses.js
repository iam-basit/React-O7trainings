import React from 'react'
export default function CourseDetails(props) {
  const tableStyles = {
    // borderCollapse: 'collapse',
    width: '100%',
    backgroundColor: 'yellow',
  }

  // Define cell styles
  const cellStyles = {
    border: '1px solid red',
    padding: '8px',
    textAlign: 'left',
  }

  return (
    <div>
      <h1>The Course Details Component!</h1>
      <table style={tableStyles}>
        <tr>
          <th style={cellStyles}>Course Name</th>
          <th style={cellStyles}>Duration</th>
          <th style={cellStyles}>Cost</th>
        </tr>
        <tr>
          <td style={cellStyles}>{props.courseName}</td>
          <td style={cellStyles}>{props.duration}</td>
          <td style={cellStyles}>{props.cost}</td>
        </tr>
      </table>
    </div>
  )
}
