import servicesPages from "@/lib/PageData";
import ServiceHero from "@/app/components/main/ServiceHero";
import { notFound } from "next/navigation";
import { ServicesPagesData } from "@/lib/types";

const data: ServicesPagesData = servicesPages;

interface PageProps {
  params: Promise<{ Service: string }>;
}

export default async function Page({ params }: PageProps) {
  const { Service } = await params;
  const content = data[Service];


  if (!content) {
    notFound();
  }

  return (
    <main className=" min-h-screen">
      <ServiceHero data={content} />
    </main>
  );
}
