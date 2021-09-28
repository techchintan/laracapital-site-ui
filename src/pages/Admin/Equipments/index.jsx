import React from "react";
import {
  CCard,
  CCardBody,
  CDataTable,
  CRow,
  CCol,
  CCardHeader,
} from "@coreui/react";

import equipmentsData from "./EquipmentsData";

export default function Equipments() {
  const tableFields = ["equipmentName", "equipmentType", "serialNumber"];

  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>Equipments</CCardHeader>
          <CCardBody>
            <CDataTable
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              clickableRows
              items={equipmentsData}
              fields={tableFields}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
