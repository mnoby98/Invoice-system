const OtpInput = ({ field, form, props }) => {
  return (
    <OtpInput
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      {...field}
      {...form}
    />
  );
};

export default OtpInput;
