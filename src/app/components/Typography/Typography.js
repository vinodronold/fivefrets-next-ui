import React from 'react'
export const Caption = ({ children }) => (
  <div className="caption">
    {children}
    <style jsx>{`
      .caption {
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: 0.08rem;
        line-height: 1.25rem;
        text-decoration: inherit;
        text-transform: inherit;
      }
    `}</style>
  </div>
)
