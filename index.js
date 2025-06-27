import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the Eggman Mini App. Try /frame.");
});

app.get("/frame", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({
    version: "vNext",
    image: "https://placekitten.com/600/400",
    text: "Mint Eggman",
    buttons: [
      {
        label: "Mint",
        action: "post",
        target: "https://eggman-minter.vercel.app/mint"
      }
    ]
  });
});

app.post("/mint", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({
    version: "vNext",
    image: "https://placekitten.com/600/401",
    text: "Minted!"
  });
});

app.listen(port, () => {
  console.log(`✅ Mini App running at http://localhost:${port}/frame`);
});

app.listen(port, () => {
  console.log(`? Mini App running at http://localhost:${port}/frame`);
});
