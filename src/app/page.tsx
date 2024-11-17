import UploadForm from "@/components/upload-form";
import { Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <header className="min-h-16">
        <Heading as="h1">Matcher</Heading>
      </header>
      <main>
        <UploadForm />
      </main>
    </>
  );
}
