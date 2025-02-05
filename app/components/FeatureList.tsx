import Image from "next/image";
import { packages } from "../constants";
const FeatureList = ({ packageIndex }: { packageIndex: number }) => {
  return (
    <ul className="flex flex-col gap-y-2">
      {packages[packageIndex]?.features.map((item, index) => (
        <li key={index} className="">
          <div className="flex items-start">
            {item.included ? (
              <Image
                src="/assets/check-circle.svg"
                alt="check mark"
                width={25}
                height={25}
              />
            ) : (
              <div className="min-w-6 min-h-6 bg-[#FDEDED] rounded-full flex items-center justify-center">
                <Image src="/assets/X.svg" alt="red X" width={15} height={15} />
              </div>
            )}
            <p className="ml-2">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
