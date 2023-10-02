import { useState, useEffect } from "react";

// Unspalsh
import { createApi } from "unsplash-js/dist/";

// Components
import { UnsplashCard } from "../../components/UnsplashCard";

// Types
import { Random } from "unsplash-js/dist/methods/photos/types";

// Interface
interface PageProps {
  image: Random;
}

export default function SignIn() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [image, setImage] = useState<Random>();

  // Create API instance with Unsplash
  const api = createApi({
    accessKey: import.meta.env.UNSPLASH_KEY!,
  });

  // fetch random image
  const fetchRandomImage = async () => {
    // Get random image
    let res = await api.photos.getRandom({
      orientation: "portrait",
      collectionIds: [import.meta.env.NEXT_PUBLIC_UNSPLASH_COLLECTION!],
    });

    // wait for response resolve
    return await res.response;
  };

  // Fetch image
  useEffect(() => {
    fetchRandomImage().then((image) => setImage(image));
    console.log(image);
  }, []);

  return (
    <main className="h-screen">
      <div className="flex h-full w-full flex-row">
        <section className="flex flex-col items-center justify-center bg-white py-10 md:w-1/2">
          <h1 className="absolute top-2 left-5 text-4xl font-bold leading-tight tracking-tighter md:pr-8 md:text-6xl">
            Skarp.
          </h1>

          <div className="mx-auto flex w-full max-w-sm flex-col break-words text-left">
            <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tighter md:pr-8 md:text-3xl">
              Welcome back, Frederik
            </h2>
            <p className="text-md mb-8">
              We&apos;re glad to see you again! Please sign in to your account
              to access all the features and services.
            </p>

            {/** Authentication providers */}
            <div>
              <button className="flex w-full items-center justify-center rounded border border-erie bg-none py-3 font-semibold text-erie shadow-erie hover:shadow-xl">
                <img
                  src={`https://logo.clearbit.com/github.com`}
                  width={25}
                  height={25}
                  alt={" logo"}
                  className="mr-2"
                />
                Sign in with Github
              </button>
            </div>

            <small className="text-base-400 mx-auto mt-4">
              Dont have an account?{" "}
              <a className="link" href="mailto:thorbensen@gmail.com">
                Contact Team
              </a>
            </small>
          </div>
        </section>

        <section className="h-screen w-1/2 flex-initial">
          <div className="relative h-full w-full">
            <img
              src={image?.urls.regular}
              alt={
                image?.alt_description
                  ? image.alt_description
                  : `Illustration by ${image?.user.name}`
              }
              className="object-cover"
              sizes="100vw, 50vw, 33vw"
            />
          </div>

          <UnsplashCard image={image} />
        </section>
      </div>
    </main>
  );
}
