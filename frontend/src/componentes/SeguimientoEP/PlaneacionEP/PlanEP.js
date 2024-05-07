import React from "react";
import "./css/PlaneacionEP.css";

function PlanEP() {
  return (
    <div className="main-container__contenedor-hijo">
      <div className="plan-content-box">
        <table className="planEP-table">
          <thead>
            <tr className="planEP-table__tr">
              <td className="planEP-table__td" colSpan={3}>
                <h3 className="text-center">2. PLANEACIÓN ETAPA PRODUCTIVA</h3>
              </td>
            </tr>
            <tr className="planEP-table__td">
              <th className="planEP-table__th text-center" colSpan={3}>
                CONCERTACIÓN PLAN DE TRABAJO DURANTE LA ETAPA PRODUCTIVA DEL
                APRENDIZ
              </th>
            </tr>
            <tr className="planEP-table__td">
              <th className="planEP-table__th">
                Text
              </th>
              <th className="planEP-table__th">
                Text
              </th>
              <th className="planEP-table__th">
                Text
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default PlanEP;
