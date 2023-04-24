# React Digital Garden 💭

We will be using our [Redis-Express-Node (REN) Backend for Authentication](https://github.com/Kodeden/basic-auth-backend).

But, before that it will be `json-server` to load some thoughts. You can see the structure below 👇🏾.

You'll need to create a `db.json` file **in the root of the project.** It's ignored by Git 🙈. You can then paste this code in there.

Assuming you have already done `npm i`, you can run `npm run json-server` to start the server.

So, yes, eventually, you'll have 4️⃣ terminal instances running 😓. 2️⃣ for back-end, and then the Vite front-end and then the `json-server` for the thoughts.

```json
{
  "thoughts": [
    {
      "id": 1,
      "thought": "React is starting to make sense!",
      "date": "04/24/2023",
      "time": "10:00",
      "author": "admin"
    },
    {
      "id": 2,
      "thought": "Separation of concerns is important. These thoughts 💭 are being loaded from an API service - not directly from a component!",
      "date": "04/25/2023",
      "time": "03:00",
      "author": "admin"
    },
    {
      "id": 3,
      "thought": "Code quality matters. Watch for ESLint warnings and errors 🚨.",
      "date": "04/26/2023",
      "time": "18:00",
      "author": "admin"
    }
  ]
}
```
