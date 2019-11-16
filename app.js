db.collection("cafes")
  .get()
  .then(snapshot => {
    // console.log(snapshot.docs);
    snapshot.forEach(doc => {
      console.log(doc.data());
    });
  });
