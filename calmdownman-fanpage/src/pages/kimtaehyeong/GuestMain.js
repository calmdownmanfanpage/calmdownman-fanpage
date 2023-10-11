import { GuestAll, GuestSmall, GuestLarge } from "./GuestWindow";

const GuestMain = () => {
  return (
    <div>
      <div>게스트관계도 메인페이지입니다.</div>
      <GuestAll>
        <GuestSmall>마우스대기전</GuestSmall>
        <GuestLarge>마우스댄후</GuestLarge>
      </GuestAll>
    </div>
  );
};

export default GuestMain;
