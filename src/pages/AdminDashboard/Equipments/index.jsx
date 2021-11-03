import React from "react";
import { useHistory } from "react-router";
import {
  CCard,
  CCardBody,
  CDataTable,
  CRow,
  CCol,
  CCardHeader,
  CButton,
} from "@coreui/react";

import equipmentsData from "./EquipmentsData";

export default function Equipments() {
  const history = useHistory();
  const tableFields = ["equipmentName", "equipmentType", "serialNumber"];

  return (
    <CRow>
      <CCol xs="12" sm="12">
        <CCard>
          <CCardHeader>
            Equipments
            <CButton
              type="submit"
              color="primary"
              className="card-header-actions"
              onClick={() => history.push("/admin/addEquipment")}
            >
              Add Equipment
            </CButton>
          </CCardHeader>
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
              scopedSlots={{
                equipmentName: (item, index) => {
                  return (
                    <td key={index} className="py-2">
                      <div
                        onClick={() => history.push(`/admin/equipment/${item.id}`)}
                      >
                        {item.equipmentName}
                      </div>
                    </td>
                  );
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}
