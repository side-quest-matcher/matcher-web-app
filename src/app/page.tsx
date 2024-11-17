import UploadForm from "@/components/upload-form";
import { Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <main className="flow mt-8">
        <Heading size="7" as="h1">
          Matcher
        </Heading>
        <UploadForm />
      </main>
    </>
  );
}
