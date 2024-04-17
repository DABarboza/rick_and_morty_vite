const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(200);
    });
    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin', e 'image'", async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(200);

      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 404", async () => {
      const response = await agent
        .get("/rickandmorty/character/999999")
        .expect(404);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Responde con un objeto con la propiedad 'access' igual a true si se ingresa la información de login correcta", async () => {
      const response = await agent
        .get("/rickandmorty/login")
        .query({ email: "bardanii7@gmail.com", password: "Daniel364" })
        .expect(200);

      expect(response.body).toHaveProperty("access", true);
    });

    it("Responde con un objeto con la propiedad 'access' igual a false si se ingresa la información de login incorrecta", async () => {
      const response = await agent
        .get("/rickandmorty/login")
        .query({ email: "invalid@example.com", password: "invalidpassword" })
        .expect(200);

      expect(response.body).toHaveProperty("access", false);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send({ name: "Rick Sanchez" })
        .expect(200);

      expect(response.body).toEqual([{ name: "Rick Sanchez" }]);
    });

    it("Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente", async () => {
      const response = await agent
        .post("/rickandmorty/fav")
        .send({ name: "Morty Smith" })
        .expect(200);

      expect(response.body).toEqual([
        { name: "Rick Sanchez" },
        { name: "Morty Smith" },
      ]);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si no hay ningún personaje con el ID que envías, se devuelve el arreglo con los elementos previos sin modificar", async () => {
      const response = await agent
        .delete("/rickandmorty/fav/999999")
        .expect(200);

      expect(response.body).toEqual([
        { name: "Rick Sanchez" },
        { name: "Morty Smith" },
      ]);
    });

    it("Cuando envías un ID válido se elimina correctamente al personaje", async () => {
      const response = await agent.delete("/rickandmorty/fav/1");
    });
  });
});
