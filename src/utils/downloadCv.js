import { headerData } from "../data/headerData";

export const downloadCv = async () => {
  try {
    const response = await fetch(headerData.resumePdf);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Shanika_Ayasmanthi_CV.pdf";
    link.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading CV:", error);
  }
};
