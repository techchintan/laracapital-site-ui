import React from "react";
import clsx from "clsx";
import { AutoComplete } from "antd";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
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
import { addNewEquipment } from "../../../../services/equipments";

export default function AddEquipments() {
  const authToken = localStorage.getItem("laraCapitalAuthToken");
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const {
    mutate: addNewEquipmentMutation,
    isLoading: isAddingEquipment,
    isSuccess: isAddedSuccessfully,
    data: addedEquipmentData,
  } = useMutation((data) => addNewEquipment(data));

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data, "data"); //This is whole data of form, pass those data which you need pass to Backend, for now i added whole data i,e {data:data}
    const query = {
      data: data,
      token: authToken, //This is our authToken which is used for api authentication, remove if you dont need
    };
    toast.success("Added Equipment Successfully"); // Here we added Alert message if Equipment add.(its temporary you can add it everywhere based on condition)
    addNewEquipmentMutation(query);
  };

  // eslint-disable-next-line no-console
  console.log(addedEquipmentData, "addedEquipmentData", isAddedSuccessfully);

  const options = [
    {
      value: "Jessamine Forbes",
    },
    {
      value: "Evan Munoz",
    },
    {
      value: "Darryl Gibson",
    },
    {
      value: "Arjun Reddy",
    },
    {
      value: "Marah Pennington",
    },
    {
      value: "Kyra Herman",
    },
    {
      value: "Arjun Vaisya",
    },
  ];

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
                    <CSelect
                      name="equipmentType"
                      aria-label="Default select example"
                      onChange={(e) =>
                        setValue("equipmentType", e.target.value)
                      }
                    >
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
                    <CSelect
                      name="equipmentSubType"
                      aria-label="Default select example"
                      onChange={(e) =>
                        setValue("equipmentSubType", e.target.value)
                      }
                    >
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
                    <CSelect
                      aria-label="Default select example"
                      name="state"
                      onChange={(e) => setValue("state", e.target.value)}
                    >
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
              <CRow className="py-2">
                <CCol className="col-3">Employee Name</CCol>
                <CCol className="col-6">
                  <CInputGroup>
                    <AutoComplete
                      style={{
                        width: 1000,
                      }}
                      options={options}
                      placeholder="Enter employee name"
                      filterOption={(inputValue, option) =>
                        option.value
                          .toUpperCase()
                          .indexOf(inputValue.toUpperCase()) !== -1
                      }
                    />
                  </CInputGroup>
                  <CFormText className="help-block text-danger" color="danger">
                    {getErrorMessage(errors, "employeeName", "Employee Name")}
                  </CFormText>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" color="primary">
                {isAddingEquipment ? "Loading" : "Add"}
              </CButton>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  );
}
