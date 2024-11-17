"use client";
import { uploadFile } from "@/app/upload-action";
import { Button, Text } from "@radix-ui/themes";

export default function UploadForm() {
  return (
    <form action={uploadFile} className="flex flex-col gap-4">
      <label>
        <Text as="span">Upload a file </Text>
        <input type="file" name="file" accept=".zip" />
      </label>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </form>
  );
}
