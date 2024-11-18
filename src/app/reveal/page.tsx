"use client"
import React, { useState } from 'react'


const Reveal = () => {

    const [tokenState, setTokenState] = useState("")
    const [username, setUsername] = useState("")
    const [submissionStatus, setSubmissionStatus] = useState("NA")

    const handleSubmit = async () => {

        setSubmissionStatus("Loading...")

        const response = await fetch('/api/reveal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: tokenState, username: username }),
        })

        if (response.ok) {
            console.log('Token appended successfully')
        } else {
            console.error('Failed to append token')
        }

        setSubmissionStatus("Success!")
    }

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-3xl font-bold mt-2">
        Looking to Reveal Your Identity?
      </h1>
      <p className="mt-2">
        Enter your token here & de-anonymize yourself to people that match with
        you!{" "}
      </p>

            <input 
                type="text" 
                className='mt-4 p-2 border-gray-400 border-2 rounded-lg w-full'
                value={tokenState} 
                onChange={(e) => setTokenState(e.target.value)} 
                placeholder="Enter your user token"
            />

            <input 
                type="text" 
                className='mt-4 p-2 border-gray-400 border-2 rounded-lg w-full'
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter your name :)"
            />

            {(submissionStatus === "NA") ? 
                (
                    <button onClick={handleSubmit} className='mt-4 p-4 border-white border-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition-all'>
                        De-anonymize!
                    </button>
                ) 
                : 
                (
                    <p className='text-green-400 p-4'>{submissionStatus}</p>
                )
            }
        </div>
    )
}

export default Reveal;
