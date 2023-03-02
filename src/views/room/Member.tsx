import React from "react";
import ProfileIcon from "../../components/common/ProfileIcon";
import Text from "../../components/common/Text";
import * as Icon from "react-feather";
import ProgressBar from "../../components/common/ProgressBar";
import { useAPI } from "../../hooks/useAPI";
import { fetchMember } from "../../services/api/member";

export default function Member({}) {
  const { data: member } = useAPI<MemberEntity>(fetchMember, { isFetch: true });
  return (
    <div className="item">
      <div className="item-title">
        <Icon.User size={18} color="white" />
        <Text style={{ marginLeft: "10px" }} type="title">
          MEMBERS
        </Text>
      </div>
      <div className="member">
        {member.map((m) => {
          return (
            <div className="member-container" key={m.id}>
              <div className="member-wrapper">
                <ProfileIcon
                  profileImg={m.profileImg}
                  name={m.name}
                  size="sm"
                />
                <div className="member-content-wrapper">
                  <div className="member-text-wrapper">
                    <Text>{m.name}</Text>
                    <Text style={{ marginLeft: "5px" }}>{`-${3000}원`}</Text>
                  </div>
                  <ProgressBar progress={30} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
