 export  default function Selection({ title, items }: { title: string; items: React.ReactNode[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="text-gray-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}