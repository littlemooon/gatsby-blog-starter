import React from 'react'
import PropTypes from 'prop-types'

export default function Sidebar({ title, description }) {
  return (
    <div
      style={{
        border: '2px solid #e6e6e6',
        maxWidth: 960,
        padding: '0.5rem',
        marginBottom: '25px',
      }}
    >
      <strong>{title}.</strong> {description}
    </div>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
