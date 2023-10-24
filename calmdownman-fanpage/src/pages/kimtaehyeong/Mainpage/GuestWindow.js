import React, { useState } from "react";
import styled from "styled-components";
import data from "./GuestClub.json";
import Course from "../GuestWiki/Course";

const GuestWindow = () => {
  const ClubSmall = styled.button`
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2.25rem;
    font-size: 1rem;
    background-color: ${({ selected }) => (selected ? "skyblue" : "blue")};
    &:hover {
      transform: scale(1.4);
      transition: 0.5s;
      background: skyblue;
    }
    & + & {
      margin-left: 1rem;
    }
  `;

  const GuestSmall = styled.button`
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2.25rem;
    font-size: 1rem;
    background-color: ${({ selected }) => (selected ? "orange" : "red")};
    &:hover {
      transform: scale(1.4);
      transition: 0.5s;
      background: orange;
    }
    & + & {
      margin-left: 1rem;
    }
  `;

  const [selectedGroup, setSelectedGroup] = useState(null); //선택클럽 추적
  const [selectedMember, setSelectedMember] = useState(null); //선택멤버 추적
  const [activeCourse, setActiveCourse] = useState(null);

  const handleClick = (group) => {
    //클럽 클릭시
    setSelectedGroup(group); //상태갱신, 화면에 그 멤버만 뜨도록
    setSelectedMember(null);
    setActiveCourse(null);
  };

  const handleMemberClick = (member) => {
    //멤버 클릭시
    if (member === "궤도") {
      setSelectedMember(member); //궤도 멤버일 때 상태
      setActiveCourse("Course");
    } else if (member === "애굽민수") {
      setSelectedMember(member); //애굽민수 멤버일 때 상태
      setActiveCourse("Egypt");
    } else if (member === "철면수심") {
      setSelectedMember(member); //애굽민수 멤버일 때 상태
      setActiveCourse("JJamBBong");
    } else if (member === "옥냥이") {
      setSelectedMember(member); //애굽민수 멤버일 때 상태
      setActiveCourse("RoofCat");
    } else if (member === "매직박") {
      setSelectedMember(member); //애굽민수 멤버일 때 상태
      setActiveCourse("Magic");
    } else if (member === "통닭천사") {
      setSelectedMember(member); //애굽민수 멤버일 때 상태
      setActiveCourse("Chicken");
    } else if (member === "기열킹") {
      setSelectedMember(member); //애굽민수 멤버일 때 상태
      setActiveCourse("Special");
    } else if (member === "주펄") {
      setSelectedMember(member); //애굽민수 멤버일 때 상태
      setActiveCourse("Pearl");
    } else if (member === "승우아빠") {
      setSelectedMember(member); //애굽민수 멤버일 때 상태
      setActiveCourse("Father");
    } else {
      setSelectedMember(null);
      setActiveCourse(null);
    }
  };

  return (
    <>
      <div>
        {data.map((item) => (
          <ClubSmall
            key={item.id}
            selected={selectedGroup === Object.keys(item)[0]}
            onClick={() => handleClick(Object.keys(item)[0])}
          >
            {Object.keys(item)[0]}
          </ClubSmall>
        ))}
      </div>

      <div>
        {data.map(
          (item, index) =>
            selectedGroup === Object.keys(item)[0] && (
              <div key={index}>
                {Object.values(item).map((members, index) =>
                  members.map(
                    (member, i) =>
                      selectedGroup === Object.keys(item)[0] && (
                        <GuestSmall
                          key={i}
                          selected={selectedMember === member}
                          group={Object.keys(item)[0]}
                          onClick={() => handleMemberClick(member)}
                        >
                          {member}
                        </GuestSmall>
                      )
                  )
                )}
              </div>
            )
        )}
      </div>
      {selectedMember && (
        <div style={{ width: "", height: "" }}>
          {selectedMember === "궤도" && activeCourse === "Course" && (
            <Course id="Course" />
          )}
          {selectedMember === "애굽민수" && activeCourse === "Egypt" && (
            <Course id="Egypt" />
          )}
          {selectedMember === "철면수심" && activeCourse === "JJamBBong" && (
            <Course id="JJamBBong" />
          )}{" "}
          {selectedMember === "옥냥이" && activeCourse === "RoofCat" && (
            <Course id="RoofCat" />
          )}
          {selectedMember === "매직박" && activeCourse === "Magic" && (
            <Course id="Magic" />
          )}
          {selectedMember === "통닭천사" && activeCourse === "Chicken" && (
            <Course id="Chicken" />
          )}
          {selectedMember === "기열킹" && activeCourse === "Special" && (
            <Course id="Special" />
          )}
          {selectedMember === "주펄" && activeCourse === "Pearl" && (
            <Course id="Pearl" />
          )}
          {selectedMember === "승우아빠" && activeCourse === "Father" && (
            <Course id="Father" />
          )}
        </div>
      )}
    </>
  );
};

export default GuestWindow;
