export default function handler(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
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
    })
  );
}
