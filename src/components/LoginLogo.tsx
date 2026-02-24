import React from 'react'

const LoginLogo = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <img src="/images/logo.png" alt="BFS Logo" style={{ height: 100 }} />

      <div>
        <div style={{ fontWeight: 600, fontSize: 30, marginBottom: '1rem' }}>CMS BFS</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>Content Management System</div>
      </div>
    </div>
  )
}

export default LoginLogo
