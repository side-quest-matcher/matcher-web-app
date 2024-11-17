import React from 'react'

type Props = {}

const Results = (props: Props) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Files Uploaded Successfully!</h1>
      <p>Your files are being processed. Results will appear here soon.</p>
    </div>
  )
}

export default Results