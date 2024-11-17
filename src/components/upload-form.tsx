"use client";
import { uploadFile } from "@/app/upload-action";
import { Button } from "@radix-ui/themes";

export default function UploadForm() {
  return (
    <form action={uploadFile} className="flex flex-col gap-4">
      <label>
        <span>Upload a file </span>
        <input type="file" name="file" accept=".zip" />
      </label>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </form>
  );
}
