async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let res = await response.json();
    console.log(response);
}

getData()