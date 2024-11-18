"use client";
import { matches } from "@/app/results/matches";
import React, { useState, useEffect } from "react";

// type Props = {}


const Results = () => {
    // const [matches, setMatches] = useState<UserMatches>({});

    const [userToken, setUserToken] = useState<string>("") // has to be a string bcuz typescript

    const getIdFromURL = (url: string) => {
        try {
        // Parse the URL
        const urlObj = new URL(url);

        // Check if the URL is from YouTube
        if (
            urlObj.hostname === "www.youtube.com" ||
            urlObj.hostname === "youtube.com"
        ) {
            return urlObj.searchParams.get("v"); // Extract the 'v' parameter
        }

        // For shortened YouTube URLs (e.g., youtu.be)
        if (urlObj.hostname === "youtu.be") {
            return urlObj.pathname.slice(1); // The video ID is in the pathname
        }

        // Invalid YouTube URL
        return null;
        } catch (error) {
        // Handle invalid URLs or other errors
        console.error("Invalid URL:", error);
        return null;
        }
    };

    //   useEffect(() => {
    //     const fetchMatches = async () => {
    //       const response = await fetch('../../matches.json'); // Update the path as necessary
    //       const data = await response.json();
    //       setMatches(data);
    //       console.log(matches)
    //     };

    //     fetchMatches();
    //   }, []);

    const [tokens, setTokens] = useState<string[]>([])

    useEffect(() => {
        const fetchTokens = async () => {
            const response = await fetch('/api/tokens');
            if (response.ok) {
                const data = await response.json();
                setTokens(data);
            } else {
                console.error('Failed to fetch tokens');
            }
        };

        fetchTokens();
    }, []);

    const getUserIfRevealed = (matchKey: string) => {

        const tokens_only = tokens.map(t => t.split("--")[0])

        console.log(`${tokens} \n ${matchKey}`)
        if(tokens_only.includes(matchKey)) {
            const username = tokens[tokens_only.indexOf(matchKey)].split("--")[1];
            return (<span className='text-green-500 font-bold'>{username}!</span>);
        } else {
            return <p>anonymous user <code className="bg-gray-800 text-red-400 rounded-sm px-1 py-[1px]">{matchKey.slice(0, 5)} ...</code>!</p> ;
        }
    }

    useEffect(() => {
        const userToken = localStorage.getItem("userToken");
        if (userToken) {
            setUserToken(userToken);
        }
    })

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl bold mt-4">Your Matches</h1>

      <input
        type="text"
        className="border-2 p-2 my-4"
        value={userToken || ""}
        onChange={(e) => {
            const userToken = e.target.value;
            localStorage.setItem("userToken", userToken);
            setUserToken(userToken)
        }}
        placeholder="Enter your user token"
      />

    {(userToken in matches) ? (
        <div className='flex flex-col gap-4'>
            {Object.entries(matches[userToken].matches).map(([matchKey, match]) => (
                <div key={matchKey} className='p-4 border-gray-400 border-2 rounded-lg flex gap-4'>
                    
                    <iframe
                        width="300"
                        height="169"
                        src={`https://www.youtube.com/embed/${getIdFromURL(match.recommendedVideo)}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    
                    <div>
                        <a className="text-blue-400" href={match.recommendedVideo} target="_blank" rel="noopener noreferrer">
                            {match.recommendedVideo}
                        </a>
                        <h4>You've matched with {" "}
                            {getUserIfRevealed(matchKey)}
                        </h4>
                    </div>
                </div>
            )
          )}
        </div>
      ) : (
        <p>Please enter a valid user token.</p>
      )}
    </div>
  );
};

export default Results;
