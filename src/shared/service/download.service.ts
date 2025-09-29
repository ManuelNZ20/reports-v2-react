import { apiReports } from "../api/api-reports";

export const downloadEmploymentLetter = async () => {
  try {
    const response = await apiReports.get("/basic-reports/employment-letter", {
      responseType: "blob",
    });
    const blob = new Blob([response.data], { type: "application/pdf" });

    // Crear url temporal para descargar el archivo
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `constancia_empleo_${
      new Date().toISOString().split("T")[0]
    }.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading employment letter:", error);
  }
};
