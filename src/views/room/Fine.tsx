import React from "react";
import Text from "../../components/common/Text";
import * as Icon from "react-feather";
import ProfileIcon from "../../components/common/ProfileIcon";
import Title from "../../components/common/Title";

export default function Fine() {
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
