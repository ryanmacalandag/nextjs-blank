import InstallSuccess from "@/components/page/DeleteThisFolder/InstallSuccess";
import PageWrapper from "@/components/wrapper/PageWrapper";
import RowWrapper from "@/components/wrapper/RowWrapper";
import SectionWrapper from "@/components/wrapper/SectionWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <SectionWrapper>
        <RowWrapper>
          <InstallSuccess />
        </RowWrapper>
      </SectionWrapper>
    </PageWrapper>
  );
}
