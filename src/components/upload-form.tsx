"use client";
import { useState } from "react";
import { Button, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function UploadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/results');
      } else {
        setError(data.error || 'Failed to upload files');
      }
    } catch (err) {
      setError(`Failed to upload files. Please try again. Error: ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="space-y-4">
        <div>
          <Text as="label" size="2" weight="bold">
            Watch History File
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
            Subscriptions File
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
  );
}
