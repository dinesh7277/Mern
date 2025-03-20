import Image from "next/image";
import {Container} from "@/components/container";
import  {Hero} from "@/components/hero";
import { SectionTitle } from "@/components/sectionTitle";
import { Benefits } from "@/components/benifits";
import { benefitOne, benefitTwo } from "@/components/data";
import { Video} from "@/components/video";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
        </SectionTitle>

      <Benefits data={benefitOne}/>
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video videoId="fZ0D0cnR88E" />

    </Container>
  );
}