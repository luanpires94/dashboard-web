const BASE_URL = "https://dummyjson.com";

export async function httpGet<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  return response.json();
}
