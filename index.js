import fs from "fs";
import mdToPdf from "md-to-pdf";

(async () => {
  const pdf = await mdToPdf(
    { path: "README.md" },
    { dest: "README.pdf" }
  ).catch(console.error);

  if (pdf) {
    fs.writeFileSync(pdf.filename, pdf.content);
  }
})();
