import { performRequest } from "@/lib/cms";

const CV_QUERY = `
    query {
        upload (filter : {filename:{matches:{pattern:"resume"}}} , orderBy:_createdAt_DESC){
            url
        }
    }

`;

const fetchExternalCvUrl = async () => {
  const { upload: cv } = await performRequest<{
    upload: { url: string };
  }>({
    query: CV_QUERY,
  });
  return cv.url;
};

export async function GET() {
  const cvUrl = await fetchExternalCvUrl();

  const res = await fetch(cvUrl, {});

  const pdf = await res.blob();

  return new Response(pdf);
}
