"use client"
import React, { useEffect, useState } from 'react'

type Props = {}

type Match = {
    recommendedVideo: string;
};

type UserMatches = {
    [userId: string]: {
        matches: {
            [matchKey: string]: Match;
        };
    };
};

// Temporary store for matches
const matches : UserMatches = {
    "test-user-1": {
        "matches": {
            "match-key-1a": {
                "recommendedVideo": "https://www.youtube.com/watch?v=a0ANLUYyRYI&ab_channel=Stanford"
            },
            "test-user-3": {
                "recommendedVideo": "https://www.youtube.com/watch?v=a0ANLUYyRYI&ab_channel=Stanford"
            },
            "test-user-2": {
                "recommendedVideo": "https://www.youtube.com/watch?v=a0ANLUYyRYI&ab_channel=Stanford"
            }
        }
    },
    "test-user-2": {
        "matches": {
            "test-user-1": {
                "recommendedVideo": "https://www.youtube.com/watch?v=b5Ho2_Si6hY&ab_channel=GitHub"
            },
            "test-user-3": {
                "recommendedVideo": "https://www.youtube.com/watch?v=b5Ho2_Si6hY&ab_channel=GitHub"
            },
            "match-key-2c": {
                "recommendedVideo": "https://www.youtube.com/watch?v=a0ANLUYyRYI&ab_channel=Stanford"
            }
        }
    },
    "test-user-3": {
        "matches": {
            "match-key-3a": {
                "recommendedVideo": "https://www.youtube.com/watch?v=b5Ho2_Si6hY&ab_channel=GitHub"
            },
            "test-user-2": {
                "recommendedVideo": "https://www.youtube.com/watch?v=a0ANLUYyRYI&ab_channel=Stanford"
            }
        }
    }
}

const Results = (props: Props) => {
    //   const [matches, setMatches] = useState<UserMatches>({});

    const [userToken, setUserToken] = useState<string>("") // has to be a string bcuz typescript

    const getIdFromURL = (url: string) => {
        try {
            // Parse the URL
            const urlObj = new URL(url);
        
            // Check if the URL is from YouTube
            if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
              return urlObj.searchParams.get('v'); // Extract the 'v' parameter
            }
        
            // For shortened YouTube URLs (e.g., youtu.be)
            if (urlObj.hostname === 'youtu.be') {
              return urlObj.pathname.slice(1); // The video ID is in the pathname
            }
        
            // Invalid YouTube URL
            return null;
          } catch (error) {
            // Handle invalid URLs or other errors
            console.error('Invalid URL:', error);
            return null;
          }
    }

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
        console.log(`${tokens} \n ${matchKey}`)
        if(tokens.includes(matchKey)) {
            return (<span className='text-green-500 font-bold'>DE-ANON</span>);
        } else {
            return matchKey
        }
    }

  return (
    <div>

        <h1 className='text-3xl bold'>Your Matches</h1>

        <input 
            type="text" 
            className='border-2 p-2 mb-4'
            value={userToken || ''} 
            onChange={(e) => setUserToken(e.target.value)} 
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
                        <a href={match.recommendedVideo} target="_blank" rel="noopener noreferrer">
                            {match.recommendedVideo}
                        </a>
                        <h4>You've matched with {" "}
                            {getUserIfRevealed(matchKey)}
                        !</h4>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <p>Please enter a valid user token.</p>
    )}
    </div>
  )
}

export default Results