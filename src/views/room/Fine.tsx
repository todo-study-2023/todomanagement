import React, { useEffect, useState } from "react";
import Text from "../../components/common/Text";
import * as Icon from "react-feather";
import ProfileIcon from "../../components/common/ProfileIcon";
import Title from "../../components/common/Title";
import { useAPI } from "../../hooks/useAPI";
import { fetchFine } from "../../services/api/fine";
import dayjs from "dayjs";

interface FineList {
  nine: string[];
  noon: string[];
  night: string[];
}

export default function Fine() {
  const { data: fine } = useAPI<FineEntity>(fetchFine, { isFetch: true });
  const [fineList, setFineList] = useState<FineList>({
    nine: [],
    noon: [],
    night: [],
  });

  const refetchData = () => {
    const _nine = fine
      .filter((f) => f.time === 9)
      .map((f) => {
        const fmember: StrapiWrapper<MemberEntity>[] = f.members.data;
        const profileImgs = fmember.map((m: StrapiWrapper<MemberEntity>) => {
          return m.attributes.profileImg;
        });
        setFineList((prev) => ({ ...prev, nine: profileImgs }));
        return profileImgs;
      });

    const _noon = fine
      .filter((f) => f.time === 12)
      .map((f) => {
        const fmember: StrapiWrapper<MemberEntity>[] = f.members.data;
        const profileImgs = fmember.map((m: StrapiWrapper<MemberEntity>) => {
          return m.attributes.profileImg;
        });
        setFineList((prev) => ({ ...prev, noon: profileImgs }));
        return profileImgs;
      });

    const _night = fine
      .filter((f) => f.time === 18)
      .map((f) => {
        const fmember: StrapiWrapper<MemberEntity>[] = f.members.data;
        const profileImgs = fmember.map((m: StrapiWrapper<MemberEntity>) => {
          return m.attributes.profileImg;
        });
        setFineList((prev) => ({ ...prev, night: profileImgs }));
        return profileImgs;
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
            {fineList.nine.map((nine) => {
              return <ProfileIcon size="xs" profileImg={nine} key={nine} />;
            })}
          </div>
          <Title titleName="fine" children={"12시"} />

          <div className="profile-wrapper">
            {fineList.noon.map((noon) => {
              return <ProfileIcon size="xs" profileImg={noon} key={noon} />;
            })}
          </div>
          <Title titleName="fine" children={"18시"} />

          <div className="profile-wrapper">
            {fineList.night.map((night) => {
              return <ProfileIcon size="xs" profileImg={night} key={night} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
