import { useState } from "react";
import { apiReports } from "../shared";

export const EmploymentLetterComponent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiReports.get(
        "/basic-reports/employment-letter",
        {
          responseType: "blob",
        }
      );

      // Crear blob y descargar
      const blob = new Blob([response.data], { type: "application/pdf" });
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
    } catch (err) {
      setError("Error al descargar la constancia");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="employment-letter-container">
      <h3>Constancia de Empleo</h3>

      {error && <div className="alert alert-error">{error}</div>}

      <button
        onClick={handleDownload}
        disabled={loading}
        className="btn btn-primary"
      >
        {loading ? "Descargando..." : "Descargar Constancia"}
      </button>

      {loading && <div className="loading-spinner">Generando PDF...</div>}
    </div>
  );
};
