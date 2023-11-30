import UserName from "./UserName";
import UserEmail from "./UserEmail";
import UserPassword from "./UserPassword";

//////////////////////////////////////////////////////////////////////////////////////////////
///////Put {initialValues:initialProps,validationProps,onSubmitProps} to InputFormik ////////
////////////////////////////////////////////////////////////////////////////////////////////

function Profile() {
  //get data from Api from User info
  return (
    <div className=" h-full  bg-[#f9fafb]">
      <div className="ml-10 mr-10 pb-28 pt-8">
        <UserName />
        <UserEmail />
        <UserPassword />
      </div>
    </div>
  );
}

export default Profile;
