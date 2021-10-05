import React from "react";
import {
  CCard,
  CCardBody,
  CDataTable,
  CRow,
  CCol,
  CCardHeader,
} from "@coreui/react";

import locationData from "./LocationData";

export default function Location() {
  const tableFields = ["locationName", "locationType", "serialNumber"];

  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>Location</CCardHeader>
          <CCardBody>
            <CDataTable
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              clickableRows
              items={locationData}
              fields={tableFields}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
