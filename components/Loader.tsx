import { Dna } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
     <Dna 
      visible={true}
      height={80}
      width={80}
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
     />
    </div>
  );
};