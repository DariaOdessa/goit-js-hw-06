const categoriesRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const itemElementsCount = item.querySelectorAll("li");
    console.log(`Elements: ${itemElementsCount.length}`);
});