import Button from "../../ui/Button";

function ProfileInfo(props) {
  const { tabel, label, id, defaultValue, type, setEmailpage } = props;
  return (
    <div className="ml-10 mr-10  pt-8">
      <div className="rounded-lg border-2 border-gray-300 bg-white px-8 py-4">
        <div className="mb-3 text-right">
          <Button onClick={() => setEmailpage(false)} design="active">
            edit
          </Button>
        </div>
        <div
          className={`relative mb-5 ${
            tabel
              ? "  grid grid-cols-[1fr_2fr] items-center "
              : " flex flex-col  justify-between gap-2"
          }     `}
        >
          <label htmlFor={id} className="px-2 text-[18px] text-[#04749B]">
            {label}
          </label>
          <div className="flex h-12  flex-col ">
            <input
              defaultValue={defaultValue}
              id={id}
              type={type}
              disabled
              className={` w-40 grow 
              rounded-[8px] border-[1px] border-stone-400
          px-3  py-1  text-[18px] font-normal focus:outline-none    sm:w-auto`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
