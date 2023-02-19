import React from "react";
import Text from "../../components/common/Text";
import * as Icon from "react-feather";
import ProfileIcon from "../../components/common/ProfileIcon";

export default function Fine() {
  return (
    <div className="item fine">
      <div className="item-title">
        <Icon.DollarSign size={18} color="white" />
        <Text style={{ marginLeft: "10px" }} type="title">
          FINE
        </Text>
      </div>
      <div className="fine-container">
        <div className="fine-time-title">
          <div className="red-dot"></div>
          <Text style={{ marginLeft: "10px" }} size="sm" type="title">
            9시
          </Text>
        </div>
        <div className="profile-wrapper">
          <ProfileIcon size="xs" />
          <ProfileIcon size="xs" />
        </div>
        <div className="fine-time-title">
          <div className="red-dot"></div>
          <Text style={{ marginLeft: "10px" }} size="sm" type="title">
            12시
          </Text>
        </div>
        <div className="profile-wrapper">
          <ProfileIcon size="xs" />
          <ProfileIcon size="xs" />
        </div>
        <div className="fine-time-title">
          <div className="red-dot"></div>
          <Text style={{ marginLeft: "10px" }} size="sm" type="title">
            18시
          </Text>
        </div>
        <div className="profile-wrapper">
          <ProfileIcon size="xs" />
          <ProfileIcon size="xs" />
          <ProfileIcon size="xs" />
        </div>
      </div>
    </div>
  );
}
