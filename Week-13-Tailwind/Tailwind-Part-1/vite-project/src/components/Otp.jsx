import { useRef, useState, forwardRef } from "react";
import { Button } from "./Button";

export function Otp({ number }) {
  const ref = useRef([]);
  const [disabled, setDisabled] = useState(true);

  const handleChange = () => {
    const allFilled = ref.current.every((input) => input?.value);
    setDisabled(!allFilled);
  };

  return (
    <div className="flex justify-center">
      {Array(number)
        .fill(0)
        .map((_, index) => (
          <SubOtpBox
            key={index}
            ref={(el) => (ref.current[index] = el)}
            onDone={() => {
              if (index + 1 < number) ref.current[index + 1].focus();
              handleChange();
            }}
            onBack={() => {
              if (index > 0) ref.current[index - 1].focus();
              handleChange();
            }}
          />
        ))}

      <br />
      <Button disabled={disabled}>Sign Up</Button>
    </div>
  );
}

const SubOtpBox = forwardRef(({ onDone, onBack }, ref) => {
  const [inputBoxVal, setInputBoxVal] = useState("");

  return (
    <input
      value={inputBoxVal}
      ref={ref}
      type="text"
      maxLength={1}
      onKeyUp={(e) => {
        if (e.key === "Backspace") onBack();
      }}
      onChange={(e) => {
        const val = e.target.value;
        if (/^[1-9]$/.test(val)) {
          setInputBoxVal(val);
          onDone();
        } else {
          setInputBoxVal("");
        }
      }}
      className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white text-center"
    />
  );
});
