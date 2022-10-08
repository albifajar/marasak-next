import Image from "next/image";

export const Container = ({ children, ...rest }) => {
  return (
    <div className="w-11/12 mx-auto" {...rest}>
      {children}
    </div>
  );
};
