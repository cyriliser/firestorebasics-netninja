const cafelist = document.querySelector("#cafe-list");

// create element and render cafe
const rendercafe = doc => {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);

  cafelist.appendChild(li);
};

db.collection("cafes")
  .get()
  .then(snapshot => {
    // console.log(snapshot.docs);

    snapshot.forEach(doc => {
      // console.log(`Object id: ${doc.id}`);
      // console.log(doc.data());
      rendercafe(doc);
    });
  });
