"use client";
import { uploadFile } from "@/app/upload-action";
import { Button, Text } from "@radix-ui/themes";

export default function UploadForm() {
  return (
    <form action={uploadFile} className="flex flex-col gap-4">
      <label>
        <span>JSON File</span>
        <input type="file" name="file" accept=".json" />
        <span>.csv File </span>
        <input type="file" name="file" accept=".csv" />
        <Text as="span">Upload a file </Text>
        <input type="file" name="file" accept=".zip" />
      </label>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </form>
  );
}
