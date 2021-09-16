import React from "react";
import { useRecoilValue } from "recoil";

import { userProfileDataAtom } from "../../recoils/auth";

export default function WelcomeLayout() {
  const userProfileData = useRecoilValue(userProfileDataAtom);
  return (
    <div>
      Welcome <p>{userProfileData?.displayName}</p>
      <p>{userProfileData?.email}</p>
    </div>
  );
}
