import React, { useState, useEffect } from "react";

const Coutdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      try {
        const now = new Date();
        const distance = new Date(targetDate).getTime() - now.getTime();

        if (distance > 0) {
          // Extract days, hours, minutes, and seconds (approximate, for display)
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTimeLeft({
            days,
            hours,
            minutes,
            seconds,
          });
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Đặt về 0 khi hết giờ
        }
      } catch (error) {
        console.error("Lỗi tính toán thời gian:", error);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateCountdown(); // Gọi ngay lập tức để tránh delay ban đầu
    const intervalId = setInterval(updateCountdown, 1000); // Cập nhật mỗi giây

    return () => clearInterval(intervalId); // Clear interval khi component unmount
  }, [targetDate]);

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
    <div className="flex gap-2 justify-center items-center">
      <div className="text-center absolute_center flex-col ">
        <span className="text-gray-900 font-bold text-lg">{timeLeft.days}</span>
        <span className="text-gray-400">Days</span>
      </div>
      <div className="text-center absolute_center flex-col ">
        <span className="text-gray-900 font-bold text-lg">
          {timeLeft.hours} <span className="text-lg mx-1">:</span>
        </span>
        <span className="text-gray-400">Hours</span>
      </div>
      <div className="text-center absolute_center flex-col ">
        <span className="text-gray-900 font-bold text-lg">
          {timeLeft.minutes} <span className="text-lg mx-1">:</span>
        </span>
        <span className="text-gray-400">Mins</span>
      </div>
      <div className="text-center absolute_center flex-col ">
        <span className="text-gray-900 text-lg font-bold">{timeLeft.seconds}</span>
        <span className="text-gray-400">Secs</span>
      </div>
    </div>
  );
};

export default Coutdown;
