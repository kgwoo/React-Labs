export class API {
  private readonly url = "https://63045983761a3bce77e63eb7.mockapi.io/memo";

  constructor() {}

  async getMemoList(): Promise<Memo[]> {
    let res = await fetch(this.url, { method: "GET" });
    let data: Promise<Memo[]> = await res.json();

    return data;
  }

  async postMemo(): Promise<void> {
    const formData = new FormData();
    formData.append("title", "haha");

    await fetch(this.url, { method: "POST", body: formData });

    return;
  }

  async deleteMemo(id: string): Promise<Memo> {
    let res = await fetch(`${this.url}/${id}`, { method: "DELETE" });
    let data: Promise<Memo> = await res.json();

    return data;
  }
}

export interface Memo {
  createdAt: string;
  name: string;
  avatar: string;
  title: string;
  contents: string;
  id: string;
}
