const clearSecondInput = () => {
    const input = document.getElementById('second-input');
    input.value = '';
}

const addTitle = (title) => {
    const box = document.getElementById('title');
    box.innerText = title;
}

addTitle('Mess this up');