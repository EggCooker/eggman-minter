import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the Eggman Mini App. Try /frame.");
});

app.get("/frame", (req, res) => {
  res.json({
    version: "vNext",
    image: "https://i.imgur.com/Qr71crq.jpeg",
    buttons: [
      {
        label: "Mint Eggman NFT",
        action: "post",
        target: "eggman-minter.vercel.app/mint"
      }
    ]
  });
});

app.post("/mint", (req, res) => {
  res.json({
    version: "vNext",
    image: "https://i.imgur.com/EB8Y63k.jpeg",
    text: "Mint complete!",
  });
});

app.listen(port, () => {
  console.log(`? Mini App running at http://localhost:${port}/frame`);
});
