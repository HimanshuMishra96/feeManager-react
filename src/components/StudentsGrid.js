import React, { useEffect, useState } from "react";
import { PageHeader } from "antd";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import { Space, Table, Tag, Button } from "antd";
import axios from "axios";
import StudentData from "./StudentData";
import { useNavigate } from "react-router-dom";

function StudentsGrid() {
  let navigate = useNavigate();
  const [StudentsData, setStudentsData] = useState([]);
  const [singleStudentData, setSingleStudentData] = useState(" ");

  //   AadharNo
  // SrNo
  // addmissionFor
  // admissionNo
  // alterContactNo
  // caste
  // contactNo
  // dob
  // fatherName
  // gender
  // lastExam
  // localAddress
  // medium
  // motherName
  // parentAnnualInc
  // parentsOccupation
  // permanentAddress
  // previousSchool
  // religion
  // studentName

  const columns = [
    {
      title: "Course",
      dataIndex: "addmissionFor",
      key: "addmissionFor",
      render: (t) => <>{t || "NA"}</>,
    },

    {
      title: "Name",
      dataIndex: "studentName",
      key: "studentName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Father Name",
      dataIndex: "fatherName",
      key: "fatherName",
      render: (text) => <>{text || "NA"}</>,
    },
    // {
    //   title: "Mother Name",
    //   dataIndex: "motherName",
    //   key: "motherName",
    //   render: (text) => <>{text || "NA"}</>,
    // },
    {
      title: "Phone",
      dataIndex: "contactNo",
      key: "contactNo",
      render: (text) => <>{text || "NA"}</>,
    },
    {
      title: "Date of birth",
      dataIndex: "dob",
      key: "dob",
      render: (text) => <>{text || "NA"}</>,
    },
    // {
    //   title: "Gender",
    //   dataIndex: "gender",
    //   key: "gender",
    //   render: (text) => <>{text || "NA"}</>,
    // },
    {
      title: "Permanent Address",
      dataIndex: "permanentAddress",
      key: "permanentAddress",
      render: (text) => <>{text || "NA"}</>,
    },
    {
      title: "Total Fees",
      dataIndex: "totalFee",
      key: "totalFee",
    },
    {
      title: "Paid Fees",
      dataIndex: "paidFees",
      key: "paidFees",
    },
    {
      title: "Fee Status",
      dataIndex: "feeStatus",
      key: "feeStatus",
      render: (data) => {
        return <Tag color={"volcano"}>{data || "NA"}</Tag>;
      },
    },

    {
      title: "AadharNo",
      dataIndex: "AadharNo",
      key: "AadharNo",
      onCell: (record, rowIndex) => {
        return {
          onClick: () => {
            setSingleStudentData(record);
          },
        };
      },

      render: (text) => <>{text || "NA"}</>,
    },
    {
      title: "Action",
      render: (record) => (
        <a
          onClick={() => {
            console.log(record, "record");
            navigate("/studentdata", { state: record });
          }}
        >
          View
        </a>
      ),
    },
    {
      title: "Send sms",
      render: (record) => (
        <a
          onClick={() => {
            axios
            .get("http://localhost:4000/sendSms")
            .then(function (response) {
              console.log(response.data);
            });
          }}
        >
          Send
        </a>
      ),
    },
  ];

  useEffect(() => {
    getAllStudent();
  }, []);

  const getAllStudent = () => {
    axios.get("http://localhost:4000/students").then((res) => {
      console.log(res.data);
      setStudentsData(res.data);
    });
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        // onBack={() => null}
        title="Students"
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
        subTitle="All students record"
      />
      <br />
      <Table columns={columns} dataSource={StudentsData} />
      {/* <StudentData data={singleStudentD+ata} />; */}
    </>
  );
}

export default StudentsGrid;
