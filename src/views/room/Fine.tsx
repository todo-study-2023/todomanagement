import React, { useEffect } from "react";
import Text from "../../components/common/Text";
import * as Icon from "react-feather";
import ProfileIcon from "../../components/common/ProfileIcon";
import Title from "../../components/common/Title";
import { useAPI } from "../../hooks/useAPI";
import { fetchFine } from "../../services/api/fine";

export default function Fine() {
  const { data: fine } = useAPI<FineEntity>(fetchFine, { isFetch: true });
  //9시 배열
  //12시
  //18시
  //각각의 배열을 만들고 map돌리기

  const refetchData = () => {
    fine
      .filter((f) => f.time === 9)
      .map((f) => {
        //TODO :리팩토링대상임
        const fmember: any = (f.members as any).data;
        return fmember.map((m: any) => {
          console.log(m.data);
        });
        console.log(fmember);
      });
  };
  useEffect(() => {
    refetchData();
  }, [fine]);

  return (
    <div className="item">
      <div className="item-title">
        <Icon.DollarSign size={18} color="white" />
        <Text style={{ marginLeft: "10px" }} type="title">
          FINE
        </Text>
      </div>
      <div className="fine">
        <div className="fine-container">
          <Title titleName="fine" children={"9시"} />
          <div className="profile-wrapper">
            <ProfileIcon size="xs" />
            <ProfileIcon size="xs" />
          </div>
          <Title titleName="fine" children={"12시"} />

          <div className="profile-wrapper">
            <ProfileIcon size="xs" />
            <ProfileIcon size="xs" />
          </div>
          <Title titleName="fine" children={"18시"} />

          <div className="profile-wrapper">
            <ProfileIcon size="xs" />
            <ProfileIcon size="xs" />
            <ProfileIcon size="xs" />
          </div>
        </div>
      </div>
    </div>
  );
}
