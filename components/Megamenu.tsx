import Image from "next/image";

export default function MegaMenu() {
  return (
    <section className="w-full bg-white border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-4">
        
        {/* Accessories */}
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b pb-2">
            Accessories
          </h3>

          <ul className="space-y-4 text-lg">
            <li className="hover:text-primary cursor-pointer">Headphone</li>
            <li className="hover:text-primary cursor-pointer">Mouse</li>
            <li className="hover:text-primary cursor-pointer">Cover</li>
            <li className="hover:text-primary cursor-pointer">Charger</li>
            <li className="hover:text-primary cursor-pointer">Pen Drives</li>
          </ul>
        </div>

        {/* Computer */}
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b pb-2">
            Computer
          </h3>

          <ul className="space-y-4 text-lg">
            <li className="hover:text-primary cursor-pointer">HP</li>
            <li className="hover:text-primary cursor-pointer">Dell</li>
            <li className="hover:text-primary cursor-pointer">Lenovo</li>
            <li className="hover:text-primary cursor-pointer">Macbook</li>
            <li className="hover:text-primary cursor-pointer">Acer</li>
          </ul>
        </div>

        {/* Smartphone */}
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b pb-2">
            Smartphone
          </h3>

          <ul className="space-y-4 text-lg">
            <li className="hover:text-primary cursor-pointer">Apple</li>
            <li className="hover:text-primary cursor-pointer">Nokia</li>
            <li className="hover:text-primary cursor-pointer">Realme</li>
            <li className="hover:text-primary cursor-pointer">Samsung</li>
            <li className="hover:text-primary cursor-pointer">Redmi</li>
          </ul>
        </div>

        {/* Banner */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[250px] h-[260px] overflow-hidden rounded-md">
            <img
              src="https://www.shutterstock.com/image-photo/different-modern-household-appliances-on-260nw-2726223977.jpg"
              alt="Product Banner"
          
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}