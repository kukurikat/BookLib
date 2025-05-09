export async function getBook(searchObj) {
  try {
    const resp = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchObj.text}&orderBy=relevance&maxResults=16&key=AIzaSyBVQGRl19itlaJGNDJSN-AgNdyCw1HpLgU`,
      {
        method: "GET",
        body: JSON.stringify(),
      }
    );

    const data = await resp.json();

    if (data.totalItems === 0) {
      const resp = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=Gay&orderBy=relevance&maxResults=16&key=AIzaSyBVQGRl19itlaJGNDJSN-AgNdyCw1HpLgU`,
        {
          method: "GET",
          body: JSON.stringify(),
        }
      );
      const data = await resp.json();
      console.log(data.totalItems);
      return await data.items;
    }
    return await data.items;
  } catch (err) {}
}

export async function getDefault() {
  let i = 0;
  while (true) {
    const wordGet = await fetch(`https://random-word-api.herokuapp.com/word`);
    const word = await wordGet.json();
    const resp = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${word[0]}adw&orderBy=relevance&maxResults=16&key=AIzaSyBVQGRl19itlaJGNDJSN-AgNdyCw1HpLgU`,
      {
        method: "GET",
        body: JSON.stringify(),
      }
    );
    i++;
    const data = await resp.json();

    if (data.totalItems >= 1) {
      console.log(data);
      return await data.items;
    }
    if (i > 5) {
      const resp = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=Gay&orderBy=relevance&maxResults=15&key=AIzaSyBVQGRl19itlaJGNDJSN-AgNdyCw1HpLgU`,
        {
          method: "GET",
          body: JSON.stringify(),
        }
      );
      const data = await resp.json();
      console.log(data.totalItems);
      return await data.items;
    }
  }
}
