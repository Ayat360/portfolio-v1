import { useEffect, useState } from "react";

export default function Loader() {

  const [hide, setHide] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setHide(true);
    }, 2000); // loading duration

    return () => clearTimeout(timer);

  }, []);

  if (hide) return null;

  return (

    <div className="loader">

      <div className="loader-content">

        <div className="loader-logo">
          AYAT<span>360</span>
        </div>

        <div className="loader-bar">
          <div></div>
        </div>

        <p>Loading experience...</p>

      </div>

    </div>

  );

}