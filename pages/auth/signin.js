import { async } from "@firebase/util";
import { getSession } from "next-auth/react";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";

function signIn({ providers }) {
  return (
    <>
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
        <div className="content text-3xl text-center md:text-left">
          <h1 className="text-5xl text-blue-500 font-bold">FaceBook</h1>
          <p>Connect with friends and the world around you on FaceBook.</p>
        </div>
        <div className="container mx-auto flex flex-col items-center">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg"
                onClick={() =>
                  signIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
          <hr />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default signIn;
