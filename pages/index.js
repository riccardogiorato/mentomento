import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>mentomento</title>
        <link rel="icon" href="/favicon.ico" />
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
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 class="text-2xl font-medium title-font mb-2 text-gray-900">
                What can you help me with?
              </h1>
              <p class="text-base leading-relaxed w-2/4 mx-auto">
                Working together towards a common set of goals will be our focus
                along this process!
              </p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-blue-800 inline-flex"></div>
              </div>
            </div>

            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
                    <img alt="react logo" src="/icons/react.svg" />
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Software Engineering and Fullstack Web Development
                  </h2>
                  <p class="leading-relaxed text-base">
                    React, Next.js, React Hooks, GraphQL, VueJs, Apollo,
                    Serverless Functions with Netlify, Vercel or Cloudflare
                    Workers.
                  </p>
                </div>
              </div>

              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-300 p-6 rounded-lg">
                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
                    <img alt="curriculum vitae" src="/icons/cv.svg" />
                  </div>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Job Hunting and Networking
                  </h2>
                  <p class="leading-relaxed text-base">
                    Finding the right company for you.
                    <br /> Networking with LinkedIn. <br /> Overcoming Interview
                    fears <br /> Test Interviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
