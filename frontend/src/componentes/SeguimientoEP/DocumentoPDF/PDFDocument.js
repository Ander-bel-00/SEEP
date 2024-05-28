import React from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import InformacionGeneral from "../InformacionGeneral/InformacionGeneral";
import PlanEP from "../PlaneacionEP/PlanEP";
import SeguimientoEp from "../SeguimientoEP/SeguimientoEp";
import EvaluacionEp from "../EvaluacionEP/EvaluacionEp";

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#ffffff",
  },
});

// Componente PDFDocument que genera el PDF
const PDFDocument = ({ informacionGeneralData, planEPData, seguimientoEPData, evaluacionEPData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InformacionGeneral data={informacionGeneralData} />
        <PlanEP data={planEPData} />
      </Page>
      <Page size="A4" style={styles.page}>
        <SeguimientoEp data={seguimientoEPData} />
      </Page>
      <Page size="A4" style={styles.page}>
        <EvaluacionEp data={evaluacionEPData} />
      </Page>
    </Document>
  );
};

export default PDFDocument;
