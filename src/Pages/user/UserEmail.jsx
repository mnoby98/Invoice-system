import { useState } from "react";
import ProfileInfo from "../../Components/profile/ProfileInfo";
import ProfileOtpEmail from "../../Components/profile/ProfileOTP";
import ProfileNewEdit from "../../Components/profile/ProfileNewEdit";
import ProfileOtpNumber from "../../Components/profile/ProfileOtpNumber";

function UserEmail() {
  const [emailPage, setEmailpage] = useState(true);
  const [otpPage, setOtpPage] = useState(true);
  const [newPage, setNewPage] = useState(true);

  return emailPage ? (
    <ProfileInfo
      id="email"
      label="Email"
      defaultValue="Put Email"
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

export default UserEmail;
