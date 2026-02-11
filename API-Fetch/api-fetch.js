const URL = "https://dummyjson.com/recipes";

async function chamarAPi() {
  const resp = await fetch(URL);

  if (!resp.ok) {
    throw new Error("Erro ao buscar dados");
  }

  const res = await resp.json();
  console.log(res);
}

chamarAPi();
