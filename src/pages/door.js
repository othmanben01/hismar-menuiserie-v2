import { useEffect } from "react";

const Door = () => {
  useEffect(() => {
    dataLayer.push({ productCategory: "door" });
  }, []);

  return <section className="container col-xxl-8 px-4 py-5 "></section>;
};

export default Door;
