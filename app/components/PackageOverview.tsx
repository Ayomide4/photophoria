import Image from "next/image";
import Link from "next/link";

interface item {
  included: boolean;
  description: string;
}

export default function PackageOverview({
  title,
  features,
  buttonText,
  buttonColor,
  bgColor,
}: {
  title: string;
  features: item[];
  buttonText?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  bgColor?: string;
}) {
  const renderFeatures = features.map((item: item, index: number) => {
    return (
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
            <div className="w-6 h-6 bg-[#FDEDED] rounded-full flex items-center justify-center">
              <Image src="/assets/X.svg" alt="red X" width={15} height={15} />
            </div>
          )}
          <p className="ml-2">{item.description}</p>
        </div>
      </li>
    );
  });

  return (
    // <div className="flex-shrink-0 w-[320px] bg-white rounded-[50px] px-6 py-8">
    <div
      className={`relative flex-shrink-0 flex flex-col justify-between w-[320px]  ${bgColor ? bgColor : "bg-white"} rounded-3xl px-8 py-10`}
    >
      <h3 className="flex font-bold text-3xl font-museo-moderno mb-4  text-left text-nowrap ">
        {title}
      </h3>
      <ul className="flex flex-col gap-y-3 mb-8">{renderFeatures}</ul>
      <Link
        href="/packages"
        scroll={true}
        className={`${buttonColor ? `text-white ${buttonColor}` : "bg-primary"} text-black font-bold rounded-2xl px-4 py-4 mt-4 w-full flex items-center justify-center `}
      >
        {buttonText ? buttonText : "VIEW PACKAGES"}
      </Link>
    </div>
  );
}
