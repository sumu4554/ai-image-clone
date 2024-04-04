const input = document.querySelector(".input-text");
const sentBtn = document.querySelector(".btn");
const image = document.querySelector(".ai-image");
const token = "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";
async function query(data) {
  image.src =
    "https://media4.giphy.com/media/uIJBFZoOaifHf52MER/200w.gif?cid=6c09b952sgvnh4d1m06y1sajotccld2sh7900ozlzqxuh6lw&ep=v1_gifs_search&rid=200w.gif&ct=g";
  const response = await fetch(
    "https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(input.value),
    }
  );
  const result = await response.blob();
  return result;
}
query({ inputs: "Astronaut riding a horse" }).then((response) => {
  // Use image
});
sentBtn.addEventListener("click", async function () {
  query().then((response) => {
    const objectUrl = URL.createObjectURL(response);
    image.src = objectUrl;
  });
});
