import Image from "next/image";
import Link from "next/link";

interface item {
  included: boolean;
  description: string;
}

export default function PackageOverview({
  title,
  features,
}: {
  title: string;
  features: item[];
}) {
  const renderFeatures = features.map((item: item, index: number) => {
    return (
      <li key={index}>
        <div className="flex  items-start">
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
    <div className="flex-shrink-0 w-[320px] bg-white rounded-[50px] px-6 py-8">
      <h3 className="font-bold text-4xl font-museo-moderno ml-2 mb-4">
        {title}
      </h3>
      <ul className="flex flex-col gap-y-3 mb-1">{renderFeatures}</ul>
      <Link
        href="/packages"
        className="bg-primary text-black font-bold rounded-full px-4 py-4 mt-4 w-full flex items-center justify-center"
      >
        VIEW PACKAGES
      </Link>
    </div>
  );
}
