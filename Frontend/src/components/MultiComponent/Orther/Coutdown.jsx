import React from "react";
import useCountdown from "../../../hooks/useCountDown";
import Timer from "../../SingleComponent/Block/Timer";
const Coutdown = ({ targetDate }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  // Handle trường hợp targetDate không hợp lệ
  if (!targetDate) {
    return (
      <div>Ngày mục tiêu không hợp lệ. Vui lòng cung cấp một ngày hợp lệ.</div>
    );
  }
  // Chuyển đổi targetDate sang kiểu Date nếu nó là string
  const validTargetDate =
    typeof targetDate === "string" ? new Date(targetDate) : targetDate;

  // Kiểm tra xem targetDate có phải là một đối tượng Date hợp lệ không
  if (isNaN(validTargetDate.getTime())) {
    return (
      <div>Ngày mục tiêu không hợp lệ. Vui lòng cung cấp một ngày hợp lệ.</div>
    );
  }
  return (
    <div className="flex gap-2 justify-center items-center w-3xs">
      <Timer color={"gray"} Time={days} type="Days" />
      <Timer color={"gray"} Time={hours} type="Hours" />
      <Timer color={"gray"} Time={minutes} type="Mins" />
      <Timer color={"gray"} Time={seconds} type="Secs" />
    </div>
  );
};

export default Coutdown;
