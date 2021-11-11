import React from "react";
import qs from "query-string";
import { useHistory } from "react-router";
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CCardHeader,
  CCardFooter,
  CButton,
  CInput,
} from "@coreui/react";

export default function EquipmentDetailsView(props) {
  const id = props?.match?.params?.id; // EquipmentID For Fetch Equipment Data by ID
  const history = useHistory();
  const { isEdit } = qs.parse(location.search);
  const [selectedEquipmentName, setSelectedEquipmentName] = React.useState("");
  const [selectedEquipmentType, setSelectedEquipmentType] = React.useState("");
  const [selectedSerialNumber, setSelectedSerialNumber] = React.useState("");

  // eslint-disable-next-line no-console
  console.log(id, "EquipmentID", isEdit);

  function handleEditEquipment() {
    history.push(`/admin/equipment/${id}?isEdit=true`);
    const updateAPIBody = {
      equipmentId: id,
      equipmentName: selectedEquipmentName,
      equipmentType: selectedEquipmentType,
      serialNumber: selectedSerialNumber,
    };
    // eslint-disable-next-line no-console
    console.log(updateAPIBody, "updateAPIBody");
  }

  function handleDeleteEquipment() {
    const deleteAPIBody = {
      equipmentId: id,
      equipmentName: selectedEquipmentName,
      equipmentType: selectedEquipmentType,
      serialNumber: selectedSerialNumber,
    };
    // eslint-disable-next-line no-console
    console.log(deleteAPIBody, "deleteAPIBody");
  }

  return (
    <CRow>
      <CCol xs="12" lg="12" sm="12">
        <CCard>
          <CCardHeader>Equipment Details</CCardHeader>
          <CCardBody>
            <CRow className="py-3">
              <CCol className="col-3">Equipment ID</CCol>
              <CCol>1</CCol>
            </CRow>
            <CRow className="py-3">
              <CCol className="col-3">Equipment Name</CCol>
              <CCol className="col-3">
                {isEdit === "true" ? (
                  <CInput
                    required
                    type="text"
                    name="equipmentName"
                    placeholder="Equipment Name"
                    defaultValue="Dummy Dell Laptop" //Add fetched value here
                    // value={selectedEquipmentName}
                    onChange={(e) => {
                      setSelectedEquipmentName(e.target.value);
                    }}
                  />
                ) : (
                  "Dell Laptop"
                )}
              </CCol>
            </CRow>
            <CRow className="py-3">
              <CCol className="col-3">Equipment Type</CCol>
              <CCol className="col-3">
                {isEdit === "true" ? (
                  <CInput
                    required
                    type="text"
                    name="equipmentType"
                    placeholder="Equipment Type"
                    defaultValue="Laptop Computer" //Add fetched value here
                    // value={selectedEquipmentType}
                    onChange={(e) => {
                      setSelectedEquipmentType(e.target.value);
                    }}
                  />
                ) : (
                  "Laptop"
                )}
              </CCol>
            </CRow>
            <CRow className="py-3">
              <CCol className="col-3">Serial Number</CCol>
              <CCol className="col-3">
                {isEdit === "true" ? (
                  <CInput
                    required
                    type="text"
                    name="serialNumber"
                    defaultValue="12345" //Add fetched value here
                    placeholder="Serial Number"
                    // value={selectedSerialNumber}
                    onChange={(e) => {
                      setSelectedSerialNumber(e.target.value);
                    }}
                  />
                ) : (
                  "1234"
                )}
              </CCol>
            </CRow>
            <CRow className="py-3">
              <CCol className="col-3">Employee ID</CCol>
              <CCol className="col-3">19</CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton
              type="submit"
              color="primary"
              className="mr-2"
              onClick={handleEditEquipment}
            >
              {/* Bind Edit API on onClick here */}
              {isEdit ? "Update" : "Edit"}
            </CButton>
            <CButton
              type="submit"
              color="danger"
              onClick={handleDeleteEquipment}
            >
              {/* Bind Delete API on onClick here */}
              Delete
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
}
