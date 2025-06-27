export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    version: "vNext",
    image: "https://placekitten.com/600/400",
    text: "Mint Eggman",
    buttons: [
      {
        label: "Mint",
        action: "post",
        target: "https://eggman-minter.vercel.app/api/mint"
      }
    ]
  });
}
