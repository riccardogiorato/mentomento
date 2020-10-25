import Head from "next/head";

export default function Home() {
  const helpSections = [
    {
      name: "Fullstack Web Development",
      icon: "/icons/react.svg",
      list: [
        "React, Next.js, React Hooks, GraphQL, Apollo",
        "Serverless Functions with Netlify, Vercel",
        "Engineering and Architecture creation",
      ],
    },
    {
      name: "Job Hunting and Networking",
      icon: "/icons/cv.svg",
      list: [
        "Finding the right company for you",
        "Networking with LinkedIn",
        "Overcoming Interview fears",
        "Mock Interviews",
      ],
    },
    {
      name: "Exclusive Videos and Articles",
      icon: "/icons/video.svg",
      list: [
        "Written tutorials on development with React or NextJS",
        "Networking and job hunting Video examples",
      ],
    },
  ];

  const pricingSections = [
    {
      name: "Basic - 20€",
      list: ["One Call every month", "Curriculum Reviews", "Weekly Reviews"],
    },
    {
      name: "Extra - 40€",
      list: [
        "Two Calls every month",
        "Support on personal projects",
        "Mock Interviews",
      ],
    },
    {
      name: "Basic - 60€",
      list: ["Three Calls every month", "Private Chat", "Weekly Reviews"],
    },
  ];

  function sectionGrid(sectionsGrid) {
    return sectionsGrid.map((section) => (
      <div class="w-full md:w-1/2 xl:w-1/3 p-4 flex-grow">
        <div class="border border-gray-300 p-6 rounded-lg w-full">
          {section.icon && section.icon !== "" && (
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
              <img alt="react logo" src={section.icon} />
            </div>
          )}

          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
            {section.name}
          </h2>
          <p class="leading-relaxed text-base w-full">
            <ul class="list-decimal ml-6">
              {section.list.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    ));
  }

  function sectionHeading(heading) {
    return (
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="text-2xl font-medium title-font mb-2 text-gray-900">
          {heading.title}
        </h1>
        <p class="text-base leading-relaxed w-2/4 mx-auto">
          {heading.description}
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-blue-800 inline-flex"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Head>
        <title>mentomento</title>
        <link rel="icon" href="/icons/favicon.png" />
      </Head>

      <main className="">
        <section class="text-gray-700 body-font">
          <div class="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
            <img
              class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="mentomento logo"
              src="/icons/mentomento.svg"
            />
            <div class="text-center lg:w-2/3 w-full">
              <p class="mb-8 leading-relaxed">
                Reach your Professional and Development Goals!
              </p>
            </div>
          </div>
        </section>
        <section class="text-gray-700 body-font">
          <div class="container px-5 py-16 mx-auto">
            <div class="text-center mb-20">
              <h1 class="text-2xl font-medium title-font text-gray-900 mb-4">
                How it works?
              </h1>
              <p class="text-base leading-relaxed w-2/4 mx-auto">
                Working together towards a common set of goals will be our focus
                along this process!
              </p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-blue-800 inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    1. Find your Needs
                  </h2>
                  <p class="leading-relaxed text-base">
                    We find together your needs and define your Roadmap with
                    Objectives and Projects to work on.
                  </p>
                </div>
              </div>

              <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    2. Weekly Sprint
                  </h2>
                  <p class="leading-relaxed text-base">
                    Each week we define specific goals and deadlines for you,
                    tracking everything with Trello.
                  </p>
                </div>
              </div>

              <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    3. Review
                  </h2>
                  <p class="leading-relaxed text-base">
                    We then Review and discuss improvements and changes to your
                    Roadmap to keep you on track!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto">
            {sectionHeading({
              title: " What can you help me with?",
              description:
                "Working together towards a common set of goals will be our focus along this process!",
            })}
            <div class="flex flex-wrap -m-4">{sectionGrid(helpSections)}</div>
          </div>
        </section>

        <section class="text-gray-700 body-font">
          <div class="container px-5 py-24 mx-auto">
            {sectionHeading({
              title: " Mentoring Levels",
              description:
                "Each call will last from 30 minutes to 1 hour to keep us focused! \n Each level includes the previous levels tiers.",
            })}
            <div class="flex flex-wrap -m-4">
              {sectionGrid(pricingSections)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
