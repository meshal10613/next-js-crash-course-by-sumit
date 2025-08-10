export default async function getPost ({id}){
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    return result.json();
};