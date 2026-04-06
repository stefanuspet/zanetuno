// const trustItems = [
//   { value: "10+", label: "Countries Served" },
//   { value: "1 kg", label: "Minimum Sample Order" },
//   { value: "2", label: "Shipping Modes" },
//   { value: "3+", label: "High Quality Product Lines" },
// ];

export default function TrustBar() {
  return (
    <section className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {/* {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl font-bold text-gold">{item.value}</span>
              <span className="text-sm text-white/60">{item.label}</span>
            </li>
          ))} */}
        </ul>
      </div>
    </section>
  );
}
