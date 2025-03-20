export default function ValuesSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-primary uppercase font-medium mb-2">WHY US</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            The values that drive what we teach
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Sit amet massa vitae tortor condimentum lacinia quis enim praesent
            elementum facilisis leo vel fringilla orci ac auctor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="border p-8 rounded-sm flex flex-col items-center text-center shadow-lg">
            <h3 className="text-5xl font-bold text-primary mb-4">01</h3>
            <h4 className="text-xl font-semibold text-gray-900 uppercase mb-4">
              Excellence
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est velitolm dol.
            </p>
            <div className="w-16 h-1 bg-primary mt-8" />
          </div>

          <div className="border p-8 rounded-sm flex flex-col items-center text-center shadow-lg">
            <h3 className="text-5xl font-bold text-primary mb-4">02</h3>
            <h4 className="text-xl font-semibold text-gray-900 uppercase mb-4">
              Integrity
            </h4>
            <p className="text-gray-600">
              Mattis tempor nullam massa semper eu lobortis mattis sit purus
              viverra di ipsum arcu enim risus ultricies diam.
            </p>
            <div className="w-16 h-1 bg-primary mt-8" />
          </div>

          <div className="border p-8 rounded-sm flex flex-col items-center text-center shadow-lg">
            <h3 className="text-5xl font-bold text-primary mb-4">03</h3>
            <h4 className="text-xl font-semibold text-gray-900 uppercase mb-4">
              Respect
            </h4>
            <p className="text-gray-600">
              Sed viverra facilisis curabitur nulla dui libero erat vel turpis
              ipsum velit nam suspendisse sapien amet et nibh.
            </p>
            <div className="w-16 h-1 bg-primary mt-8" />
          </div>

          <div className="border p-8 rounded-sm flex flex-col items-center text-center shadow-lg">
            <h3 className="text-5xl font-bold text-primary mb-4">04</h3>
            <h4 className="text-xl font-semibold text-gray-900 uppercase mb-4">
              Impact
            </h4>
            <p className="text-gray-600">
              Purus at vel massa nisl non varius feugiat ased nisl a id purus
              magna quis sapien eu pretium purus.
            </p>
            <div className="w-16 h-1 bg-primary mt-8" />
          </div>

          <div className="border p-8 rounded-sm flex flex-col items-center text-center shadow-lg">
            <h3 className="text-5xl font-bold text-primary mb-4">05</h3>
            <h4 className="text-xl font-semibold text-gray-900 uppercase mb-4">
              Accountability
            </h4>
            <p className="text-gray-600">
              Quis amet neque vitae cum eget id volutpat volutpat ultricies
              neque non non sequis et nec egestas nullam.
            </p>
            <div className="w-16 h-1 bg-primary mt-8" />
          </div>

          <div className="border p-8 rounded-sm flex flex-col items-center text-center shadow-lg">
            <h3 className="text-5xl font-bold text-primary mb-4">06</h3>
            <h4 className="text-xl font-semibold text-gray-900 uppercase mb-4">
              Passion
            </h4>
            <p className="text-gray-600">
              Sed pretium mattis sed enim quis ac eget non at tortor non nec
              quam faucibus diam lobortis morbi magna.
            </p>
            <div className="w-16 h-1 bg-primary mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
