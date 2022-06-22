const commentCounter = async (id) => {
  let scoreArray = [];
  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eeE9kmiK9ON5LxnmgZ0i/comments?item_id=${id}`).then((res) => res.json());

  scoreArray = result;
  return scoreArray.length;
};

export default commentCounter;