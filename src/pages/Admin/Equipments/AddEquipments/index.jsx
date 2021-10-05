import React from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import {
  CCard,
  CCardBody,
  CRow,
  CCol,
  CCardHeader,
  CCardFooter,
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CFormText,
  CSelect,
} from "@coreui/react";

import { getErrorMessage } from "../../../../utils";

export default function AddEquipments() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const query = {
      data: { id: data.deviceName, owner: userId },
      token: token,
    };
    // eslint-disable-next-line no-console
    console.log(query);
  };

  return (
    <CRow>
      <CCol xs="12" lg="12" sm="12">
        <CCard>
          <CForm onSubmit={handleSubmit(onSubmit)}>
            <CCardHeader>Add Equipment</CCardHeader>
            <CCardBody>
              <CRow className="py-2">
                <CCol className="col-3">Equipment Name</CCol>
                <CCol className="col-6">
                  <CInputGroup>
                    <CInput
                      name="equipmentName"
                      type="text"
                      placeholder="Equipment Name"
                      className={clsx(
                        "form-control",
                        errors.equipmentName && "is-invalid",
                      )}
                      value={getValues("equipmentName")}
                      ref={register("equipmentName", {
                        required: true,
                      })}
                      onChange={(e) =>
                        setValue("equipmentName", e.target.value)
                      }
                    />
                  </CInputGroup>
                  <CFormText className="help-block text-danger" color="danger">
                    {getErrorMessage(errors, "equipmentName", "Equipment Name")}
                  </CFormText>
                </CCol>
              </CRow>
              <CRow className="py-2">
                <CCol className="col-3">Type</CCol>
                <CCol className="col-6">
                  <CInputGroup>
                    <CSelect aria-label="Default select example">
                      <option>Select Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CSelect>
                  </CInputGroup>
                  <CFormText className="help-block text-danger" color="danger">
                    {getErrorMessage(errors, "equipmentName", "Equipment Name")}
                  </CFormText>
                </CCol>
              </CRow>
              <CRow className="py-2">
                <CCol className="col-3">Sub type</CCol>
                <CCol className="col-6">
                  <CInputGroup>
                    <CSelect aria-label="Default select example">
                      <option>Select Sub type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CSelect>
                  </CInputGroup>
                  <CFormText className="help-block text-danger" color="danger">
                    {getErrorMessage(errors, "equipmentName", "Equipment Name")}
                  </CFormText>
                </CCol>
              </CRow>
              <CRow className="py-2">
                <CCol className="col-3">Serial Number</CCol>
                <CCol className="col-6">
                  <CInputGroup>
                    <CInput
                      name="serialNumber"
                      type="number"
                      placeholder="Serial Number"
                      className={clsx(
                        "form-control",
                        errors.serialNumber && "is-invalid",
                      )}
                      value={getValues("serialNumber")}
                      ref={register("serialNumber", {
                        required: true,
                      })}
                      onChange={(e) => setValue("serialNumber", e.target.value)}
                    />
                  </CInputGroup>
                  <CFormText className="help-block text-danger" color="danger">
                    {getErrorMessage(errors, "serialNumber", "Serial Number")}
                  </CFormText>
                </CCol>
              </CRow>
              <CRow className="py-2">
                <CCol className="col-3">States</CCol>
                <CCol className="col-6">
                  <CInputGroup>
                    <CSelect aria-label="Default select example">
                      <option>Select State</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </CSelect>
                  </CInputGroup>
                  <CFormText className="help-block text-danger" color="danger">
                    {getErrorMessage(errors, "equipmentName", "Equipment Name")}
                  </CFormText>
                </CCol>
              </CRow>
              <CRow className="py-2">
                <CCol className="col-3">Employee ID</CCol>
                <CCol className="col-6">
                  <CInputGroup>
                    <CInput
                      name="employeeId"
                      type="number"
                      placeholder="Employee Id"
                      className={clsx(
                        "form-control",
                        errors.employeeId && "is-invalid",
                      )}
                      value={getValues("employeeId")}
                      ref={register("employeeId", {
                        required: true,
                      })}
                      onChange={(e) => setValue("employeeId", e.target.value)}
                    />
                  </CInputGroup>
                  <CFormText className="help-block text-danger" color="danger">
                    {getErrorMessage(errors, "employeeId", "Employee Id")}
                  </CFormText>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" color="primary">
                Submit
              </CButton>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  );
}
