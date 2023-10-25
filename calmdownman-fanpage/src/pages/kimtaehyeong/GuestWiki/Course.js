import React from "react";
import { Descriptions, Image, Typography } from "antd";
import dataId from "./GuestInfo.json";
import styled from "styled-components";

const Course = ({ id }) => {
  const DivDes = styled.div`
    margin: 30px 30px;
  `;

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
      children: (
        <div style={{ maxWidth: 700 }}>
          <Image
            style={{ width: "100%", height: "auto" }}
            src={imgurl}
            alt={"none"}
          />
        </div>
      ),
      span: {
        xl: 2,
        xxl: 2,
        md: 2,
        lg: 2,
      },
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
      label: "어록",
      children: <Title level={6}>{ment}</Title>,
      span: {
        xl: 2,
        xxl: 2,
        md: 2,
        lg: 2,
      },
    },
  ];

  return (
    <DivDes>
      <Descriptions
        title=<Title level={6}>인물정보</Title>
        bordered
        column={{
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        items={items}
      />
    </DivDes>
  );
};

export default Course;
