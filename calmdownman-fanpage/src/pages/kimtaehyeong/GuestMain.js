import { GuestAll, GuestSmall, GuestLarge } from "./GuestWindow";
import React, { useState } from "react";

const GuestMain = () => {
  const [GuestSmall, GuestLarge] = useState(false);
  return (
    <div>
      <div>게스트관계도 메인페이지입니다.</div>
      <GuestAll>
        <GuestSmall>궤도</GuestSmall>
        <GuestSmall>곽민수</GuestSmall>
        <GuestSmall>통닭천사</GuestSmall>
        <GuestSmall>매직박</GuestSmall>
        <GuestSmall>김풍</GuestSmall>
        <GuestSmall>주우재</GuestSmall>
        <GuestSmall>곽튜브</GuestSmall>
        <GuestSmall>박정민</GuestSmall>
      </GuestAll>
    </div>
  );
};

// const CourseHover = () => {
//   const [GuestSmall, GuestLarge] = useState(false);

//   const handleMouseOver = () => {
//     GuestLarge(true);
//   };

//   const handleMouseOut = () => {
//     GuestLarge(false);
//   };
//   return (
//     <div>
//       <GuestSmall>
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//       </GuestSmall>
//     </div>
//   );
// };

export default GuestMain;
