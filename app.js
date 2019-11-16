const cafelist = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");

// create element and render cafe
const rendercafe = doc => {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  let cross = document.createElement("div");

  cross.textContent = "x";
  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  cafelist.appendChild(li);

  // deleting data
  cross.addEventListener("click", e => {
    e.stopPropagation(); //stops the event from bubbling up
    let id = e.target.parentElement.getAttribute("data-id");
    // console.log(id);
    db.collection("cafes")
      .doc(id)
      .delete();
  });
};

// getting data
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

// saving data
form.addEventListener("submit", e => {
  e.preventDefault();
  db.collection("cafes").add({
    name: form.name.value,
    city: form.city.value
  });

  // clear input fields
  form.name.value = "";
  form.city.value = "";
});
