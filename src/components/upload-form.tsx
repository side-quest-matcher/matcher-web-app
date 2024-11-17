"use client";
import { useState } from "react";
import { Button, Text } from "@radix-ui/themes";

interface UploadResult {
  success: boolean;
  watchHistoryPath: string;
  subscriptionsPath: string;
  uploadId: string;
}

export default function UploadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<UploadResult | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Check file names
    const watchHistoryFile = formData.get('watch-history-file') as File;
    const subscriptionsFile = formData.get('subscriptions-file') as File;

    if (watchHistoryFile.name !== 'watch-history.json') {
      alert('The watch history file must be named "watch-history.json".');
      return;
    }

    if (subscriptionsFile.name !== 'subscriptions.csv') {
      alert('The subscriptions file must be named "subscriptions.csv".');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setResult(null);
      
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setError(data.error || 'Failed to upload files');
        } else {
          setError(`Server error: ${response.status} ${response.statusText}`);
        }
        return;
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Upload error:', err);
      setError(`Failed to upload files. Please try again. Error: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="space-y-4">
          <div>
            <Text as="label" size="2" weight="bold">
              Watch History File (must be named "watch-history.json")
            </Text>
            <input
              type="file"
              name="watch-history-file"
              accept=".json"
              className="mt-1 block w-full"
              required
            />
          </div>

          <div>
            <Text as="label" size="2" weight="bold">
              Subscriptions File (must be named "subscriptions.csv")
            </Text>
            <input
              type="file"
              name="subscriptions-file"
              accept=".csv"
              className="mt-1 block w-full"
              required
            />
          </div>
        </div>

        {error && (
          <Text color="red" size="2">
            {error}
          </Text>
        )}

        <Button 
          className="w-fit" 
          type="submit" 
          disabled={isLoading}
        >
          {isLoading ? 'Uploading...' : 'Submit'}
        </Button>
      </form>

      {result && (
        <div className="mt-6 p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Upload Successful!</h3>
          <div className="space-y-2">
            <p>Your upload ID: <span className="font-mono">{result.uploadId}</span></p>
            <p>Save this ID to check your results later.</p>
          </div>
        </div>
      )}
    </div>
  );
}
