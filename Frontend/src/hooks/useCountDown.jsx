import { useState, useEffect } from 'react';
import { setTime } from '../lib/Time';
function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!targetDate) {
      return; // Không làm gì nếu targetDate không hợp lệ ngay từ đầu
    }

    let validTargetDate;
    
    if (typeof targetDate === 'string') {
      const date = new Date(targetDate);
      if (isNaN(date.getTime())) {
        return; // Không làm gì nếu chuỗi targetDate không phải là ngày hợp lệ
      }
      validTargetDate = date;
    } else if (targetDate instanceof Date && !isNaN(targetDate.getTime())) {
      validTargetDate = targetDate;
    } else {
      return; // Không làm gì nếu targetDate không phải là Date hợp lệ
    }

    const updateCountdown = () => {
      try {
        const now = new Date();
        const distance = validTargetDate.getTime() - now.getTime();

        if (distance > 0) {
          setTimeLeft(setTime(distance));
        } else {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      } catch (error) {
        console.error('Lỗi tính toán thời gian:', error);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);
  // Nếu targetDate hợp lệ (hoặc đã được chuyển đổi thành công), trả về timeLeft
  return timeLeft;
}

export default useCountdown;