import { GuestAll, GuestSmall } from "./GuestWindow";

const GuestMain = () => {
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

export default GuestMain;
