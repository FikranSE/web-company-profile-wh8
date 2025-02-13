// ProductData.js
const productData = [
  {
    type: "header",
    title: "PRO\nDUCTS",
  },
  {
    id: 1,
    logo: "/path-to-citrix-logo.png",
    logoAlt: "Citrix",
    title: "Airline Solution",
    description: "An innovative solution that helps airlines to effectively manage customer complaints and queries. It integrates with the airline website and acts as a CRM system.",
  },
  {
    id: 2,
    logo: "/path-to-github-logo.png",
    logoAlt: "GitHub",
    title: "Expense Management Solution",
    description: "An easy to use business travel & expense management solution that helps automate travel booking and tracking of all expenses using a single web-based interface.",
  },
  {
    id: 3,
    logo: "/path-to-napster-logo.png",
    logoAlt: "Napster",
    title: "Group Revenue Management",
    description: "GroupRM is an innovative solution that helps airlines to effectively control group traffic. It aids in increasing sales by enabling the group analysts to better manage and optimize group sales.",
  },
];

// Products Component
const Products = () => {
  return (
    <section id="products" className="max-container p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {productData.map((item, index) => (
          item.type === "header" ? (
            // Header Card
            <div 
              key={`header-${index}`}
              className="h-52 flex-1 bg-sky-600 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-white font-bold text-2xl whitespace-pre-line">
                {item.title}
              </h2>
            </div>
          ) : (
            // Product Card
            <div 
              key={item.id}
              className="flex-1 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={item.logo}
                alt={item.logoAlt}
                className="h-8 mb-6"
              />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-8">
                {item.description}
              </p>
              <div className="flex items-center">
                <button className="bg-white shadow-lg px-4 md:px-6 lg:px-4 lg:py-2 py-2 md:py-2.5 rounded-full flex items-center group transition-all hover:bg-gray-50">
                  <span className="text-xs md:text-sm lg:text-sm mr-2 md:mr-3 text-gray-700">Book a demo</span>
                  <div className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-sky-600 text-white flex items-center justify-center group-hover:bg-sky-700">
                    <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Products;