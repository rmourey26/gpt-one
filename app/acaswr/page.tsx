import useSWR, { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const API = "https://marketplace.api.healthcare.gov/api/v1/households/lcsp?year=2019&apikey=${ACA_API_KEY}";

export async function getRepo(props) {
  const repoInfo = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: repoInfo
      }
    }
  };
}

function AcaSwr() {
  const { data, error } = useSWR(API);

  // there should be no `undefined` state
  console.log("Is data ready?", !!data);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>{data.id}</h1>
      <p>{data.name}</p>
      <strong>👀 {data.premium}</strong>{" "}
      <strong>✨ {data.metal_level}</strong>{" "}
    
    </div>
  );
}


export default function AcaSwrPage ({fallback}) {
    return (
        <SWRConfig value={{ fallback }}>
          <AcaSwr />
        </SWRConfig>
      );

}