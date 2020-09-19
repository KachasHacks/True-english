// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const response = await fetch(
    "https://rocky-temple-28661.herokuapp.com/translate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: req.body.text,
      }),
    }
  );

  const data = await response.json();
  res.statusCode = 200;
  res.json({ text: data.text });
};
