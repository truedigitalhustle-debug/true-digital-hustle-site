import { Document } from "@react-pdf/renderer";
import { LIBRARIES } from "./content";
import {
  CoverPage,
  WelcomePage,
  RoadmapPage,
  LibraryPage,
  ChecklistPage,
  ToolsPage,
  MagicaBonusPage,
  NextStepsPage,
} from "./Sections";

export function StarterKitDocument() {
  return (
    <Document
      title="True Digital Hustle - AI Creator Starter Kit"
      author="True Digital Hustle"
      subject="AI Creator Starter Kit"
    >
      <CoverPage />
      <WelcomePage />
      <RoadmapPage />
      {LIBRARIES.map(function (library) {
        return <LibraryPage library={library} key={library.key} />;
      })}
      <ChecklistPage />
      <ToolsPage />
      <MagicaBonusPage />
      <NextStepsPage />
    </Document>
  );
}
