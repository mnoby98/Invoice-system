import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

function InputField(props) {
  const { name, placeholder, id, type, label } = props;

  return (
    <div className="relative mb-5  flex flex-col gap-2 ">
      <label htmlFor={id} className="px-2 text-[18px] text-emerald-900">
        {label}
      </label>
      <Field name={name}>
        {(props) => {
          const { meta, field } = props;
          console.log(meta);
          return (
            <input
              placeholder={placeholder}
              id={id}
              type={type}
              className={`w-40 grow rounded-[8px] border-[1px] ${
                meta.touched && meta.error
                  ? " border-red-500"
                  : " border-stone-400 "
              }  px-1  py-1  text-[18px] font-normal focus:outline-none    sm:w-auto`}
              {...field}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
}

export default InputField;
