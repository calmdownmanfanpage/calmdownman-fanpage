import React from "react";
import { Descriptions, Image, Typography } from "antd";
import dataId from "./GuestInfo.json";

const Course = ({ id }) => {
  const courseData = dataId.find((item) => item.id === id);
  const imgurl = courseData.image_url;
  const ment = courseData.ment;
  const { Title } = Typography;
  if (!courseData) {
    return <div>데이터를 찾을 수 없습니다.</div>; // 데이터를 찾을 수 없는 경우 예외 처리
  }

  const items = [
    {
      label: "사진",
      children: <Image width={500} src={imgurl} alt={"none"} />,
    },
    {
      label: "별명",
      children: courseData.nickname,
    },
    {
      label: "이름",
      children: courseData.name,
    },
    {
      label: "나이",
      children: "",
    },
    {
      label: "직업",
      span: {
        xl: 2,
        xxl: 2,
      },
      children: "",
    },
    {
      label: "",
      span: {
        xl: 2,
        xxl: 2,
      },
      children: "",
    },
    {
      label: "어록",
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: <Title level={4}>{ment}</Title>,
    },
  ];

  return (
    <Descriptions
      title="인물정보"
      bordered
      column={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      items={items}
    />
  );
};

export default Course;
