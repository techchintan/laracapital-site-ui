import React from "react";
import {
  CCard,
  CCardBody,
  CDataTable,
  CRow,
  CCol,
  CCardHeader,
} from "@coreui/react";

import employeesData from "./EmployeesData";

export default function Employees() {
  const tableFields = ["locationName", "country", "state", "city"];
  return (
    <CRow>
      <CCol xs="12" lg="12" sm="12">
        <CCard>
          <CCardHeader>Employees</CCardHeader>
          <CCardBody>
            <CDataTable
              tableFilter
              itemsPerPageSelect
              itemsPerPage={5}
              hover
              sorter
              pagination
              clickableRows
              items={employeesData}
              fields={tableFields}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
