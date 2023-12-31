export async function performRequest<T>({
  query,
  variables = {},
  includeDrafts = false,
  revalidate,
}: {
  query: string;
  variables?: any;
  includeDrafts?: boolean;
  revalidate?: number;
}) {
  const response = await fetch("https://graphql.datocms.com/", {
    headers: {
      Authorization: `Bearer ${process.env.DATO_CMS_API_TOKEN}`,
      ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
    },
    method: "POST",
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate,
    },
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody,
      )}`,
    );
  }

  return responseBody.data as T;
}
