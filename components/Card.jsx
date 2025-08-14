export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      {/* Card Title */}
      {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
      
      {/* Card Content */}
      {children}
    </div>
  );
}
