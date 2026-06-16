export default function ServiceCard({
  title,
  description,
  icon
}) {
  return (
    <div className="bg-card p-6 rounded-xl border border-slate-700 hover:border-primary transition">
      <div className="text-primary text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-white text-xl font-semibold">
        {title}
      </h3>

      <p className="text-slate-400 mt-3">
        {description}
      </p>
    </div>
  );
}
