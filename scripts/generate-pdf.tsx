import fs from "node:fs";
import path from "node:path";
import { renderToFile } from "@react-pdf/renderer";
import { StarterKitDocument } from "../lib/starter-kit/StarterKitDocument";

async function main() {
  const outputDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const outputPath = path.join(
    outputDir,
    "True-Digital-Hustle-AI-Creator-Starter-Kit.pdf"
  );

  await renderToFile(<StarterKitDocument />, outputPath);

  console.log("Generated AI Creator Starter Kit PDF at " + outputPath);
}

main().catch(function (error) {
  console.error("Failed to generate Starter Kit PDF:", error);
  process.exit(1);
});
