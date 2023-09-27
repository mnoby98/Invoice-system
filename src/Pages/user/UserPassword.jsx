import { useState } from "react";
import ProfileInfo from "../../Components/profile/ProfileInfo";
import ProfileOtpEmail from "../../Components/profile/ProfileOtpEmail";
import ProfileNewEdit from "../../Components/profile/ProfileNewEdit";
import ProfileOtpNumber from "../../Components/profile/ProfileOtpNumber";
function UserPassword() {
  const [emailPage, setEmailpage] = useState(true);
  const [otpPage, setOtpPage] = useState(true);
  const [newPage, setNewPage] = useState(false);
  return emailPage ? (
    <ProfileInfo
      id="password"
      label="Password"
      defaultValue="*********"
      type="text"
      tabel="tabel"
      setEmailpage={setEmailpage}
    />
  ) : otpPage ? (
    <ProfileOtpEmail setEmailpage={setEmailpage} setOtpPage={setOtpPage} />
  ) : newPage ? (
    <ProfileNewEdit setNewPage={setNewPage} />
  ) : (
    <ProfileOtpNumber setNewPage={setNewPage} setOtpPage={setOtpPage} />
  );
}

export default UserPassword;
