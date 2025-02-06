export default function TestimonialCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex-shrink-0 rounded-3xl bg-white w-[320px] flex flex-col items-center p-6 gap-y-4 shadow-lg">
      <h3 className="font-museo-moderno text-2xl font-bold mb-2">{name}</h3>
      <p className="text-center text-base mb-4 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
