function BrowseRange() {
  const categories = [
    { src: "/assets/mask_group.png", alt: "dining", label: "Dining" },
    { src: "/assets/Image-living_room.png", alt: "livingroom", label: "Living" },
    { src: "/assets/mask_group_1.png", alt: "bedroom", label: "Bedroom" },
  ];

  return (
    <section className="w-[70%] mx-auto mt-6">
      <h1 className="text-center text-3xl font-bold lg:text-4xl sm:text-3xl">Browse The Range</h1>
      <p className="text-center text-[20px] font-normal sm:text-base mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 my-8 gap-5 w-full object-cover ">
        {categories.map((cat) => (
          <div key={cat.label}>
            <img src={cat.src} alt={cat.alt} className="w-full object-cover shadow-sm transition duration-300 ease-in-out hover:scale-102 hover:shadow-xl" />
            <h2 className="text-center font-semibold text-[20px] lg:text-3xl mt-3 ">{cat.label}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseRange;
