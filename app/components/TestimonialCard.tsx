export default function TestimonialCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex-shrink-0 rounded-3xl bg-white w-[320px] flex flex-col items-center p-4 gap-y-2">
      <div className="rounded-full bg-gray-700 w-40 h-40"></div>
      <h3 className="font-museo-moderno text-3xl font-bold mb-1">{name}</h3>
      <p className="text-center mb-20">{description} </p>
    </div>
  );
}
