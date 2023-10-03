import { ErrorMessage, Field } from "formik";
import ErrorText from "./ErrorText";

function CostInput(props) {
  const { name1, name2, placeholder, id, type, label, error, error2, table } =
    props;

  return (
    <div
      className={`relative mb-5 ${
        table ? " grid grid-cols-[1fr_2fr] " : " flex flex-col gap-2"
      }     `}
    >
      <label htmlFor={id} className="px-2 text-[18px] text-[#04749B]">
        {label}
      </label>
      <div className="grid h-4 grid-cols-[2fr_1fr]">
        <div className="flex  flex-col">
          <Field name={name1}>
            {(props) => {
              const { meta, field } = props;
              return (
                <input
                  placeholder={placeholder}
                  id={id}
                  type={type}
                  className={`w-40 grow rounded-[8px] border-[1px] ${
                    (meta.touched && meta.error) || error != null
                      ? " border-red-500"
                      : " border-stone-400 "
                  }  px-1  py-1  text-[18px] font-normal focus:outline-none    sm:w-auto`}
                  {...field}
                />
              );
            }}
          </Field>
          {error == null ? (
            <ErrorMessage name={name1} component={ErrorText} />
          ) : (
            <ErrorText>{error} </ErrorText>
          )}
        </div>
        <div className="flex h-4 flex-col">
          <Field
            name={name2}
            as="select"
            className={`w-40 grow rounded-[8px] border-[1px] ${
              error != null ? " border-red-500" : " border-stone-400 "
            }  px-1  py-1  text-[18px] font-normal focus:outline-none    sm:w-auto`}
          >
            <option value="">Select Currency</option>
            <option value="1">USD</option>
            <option value="2">Euro</option>
          </Field>
          {error2 == null ? (
            <ErrorMessage name={name2} component={ErrorText} />
          ) : (
            <ErrorText>{error2} </ErrorText>
          )}
        </div>
      </div>
    </div>
  );
}

export default CostInput;
