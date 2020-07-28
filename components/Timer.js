import { useState, useEffect } from 'react';

export default function Timer({ setTimeUp }) {
  const [remaining, setRemaining] = useState(600);

  useEffect(() => {
    remaining > 0 && setTimeout(() => setRemaining(remaining - 1), 1000);
    if (remaining === 0) {
      setTimeUp(true);
    }
  }, [remaining]);

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60 > 9 ? remaining % 60 : `0${remaining % 60}`;

  return (
    <div className="timer">
      <p className={remaining < 60 ? 'hurry' : null}>
        {mins}:{secs} remaining
      </p>
    </div>
  );
}
