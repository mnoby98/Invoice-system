import UserName from "./UserName";
import UserEmail from "./UserEmail";
import UserPassword from "./UserPassword";

//////////////////////////////////////////////////////////////////////////////////////////////
///////Put {initialValues:initialProps,validationProps,onSubmitProps} to InputFormik ////////
////////////////////////////////////////////////////////////////////////////////////////////

function Profile() {
  //get data from Api from User info
  return (
    <div className=" h-full  bg-blue-100">
      <div className="ml-10 mr-10 pb-28 pt-8">
        <UserName />
        <UserEmail />
        <UserPassword />

        {/* {otpPage ? (
          <InputFormik
            initialProps={{ otp: "" }}
            validationProps={Yup.object({
              otp: Yup.number().required("Required Field"),
            })}
            onSubmitProps={(values) => console.log(values)}
          >
            <InputField
              name="otp"
              label="OPT Number"
              table="table"
              id="otp "
              type="text"
            />
          </InputFormik>
        ) : (
          <InputFormik
            initialProps={{ email: "test" }}
            validationProps={Yup.object({
              email: Yup.string().email().required("Required Field"),
            })}
            onSubmitProps={(values) => console.log(values)}
          >
            <InputField
              name="email"
              label="Email"
              table="table"
              id="email "
              type="text"
            />
          </InputFormik>
        )}
        <InputFormik
          initialProps={{ password: "********", newPassword: "" }}
          validationProps={Yup.object({
            password: Yup.string().required("Required Field"),
            newPassword: Yup.string().required("Required Field"),
          })}
          onSubmitProps={(values) => console.log(values)}
        >
          <InputField
            name="password"
            label="Password"
            table="table"
            id="password "
            type="text"
          />
          <InputField
            name="newPassword"
            label="New Password"
            table="table"
            id="newPassword "
            type="text"
          />
        </InputFormik> */}

        {/* <InputFormik
          initialProps={{ password: "Mahmoud", newPassword: "" }}
          validationProps={Yup.object({
            password: Yup.string().required("Required Field"),
            newPassword: Yup.string().required("Required Field"),
          })}
          onSubmitProps={onSubmit}
        >
          <InputField
            name="password"
            label="Password"
            table="table"
            id="password "
            type="text"
          />
          <InputField
            name="newPassword"
            label="New Password"
            table="table"
            id="newPassword "
            type="text"
          />
        </InputFormik> */}
        {/* <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          <Form className="  rounded-lg border-2 border-gray-300 bg-white">
            <div className="mx-8 flex items-center justify-between ">
              <p className="mb-8 mt-6  text-lg">Edit Profile</p>
              <Button design="active" type="submit">
                edit
              </Button>
            </div>
            <div className=" px-8 pb-8">
              <InputField
                name="name"
                label="Name"
                table="table"
                id="name "
                type="text"
              />
              <InputField
                name="email"
                label="Email"
                table="table"
                id="email "
                type="text"
              />
              <p className=" py-3 text-xl text-red-600">Change password</p>
              <InputField
                name="password"
                label="Password"
                table="table"
                id="password "
                type="password"
              />
              <InputField
                name="confirmpassword"
                label="Confirm password"
                table="table"
                id="confirmpassword "
                type="password"
              />
            </div>
          </Form>
        </Formik> */}
      </div>
    </div>
  );
}

export default Profile;
