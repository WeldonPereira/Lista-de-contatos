document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".list-item__action a:first-child");
    const editButtons = document.querySelectorAll(".list-item__action a:last-child");
    
    deleteButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            
            const listItem = this.closest(".list-item");
            
            if (listItem) {
                listItem.remove();
            }
        });
    });

    editButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            
            const listItem = this.closest(".list-item");
            const nameElement = listItem.querySelector(".list-item__name");
            const emailElement = listItem.querySelector(".list-item__email");
            
            const newName = prompt("Digite o novo nome:", nameElement.textContent);
            const newEmail = prompt("Digite o novo e-mail:", emailElement.textContent);
            
            if (newName) nameElement.textContent = newName;
            if (newEmail) emailElement.textContent = newEmail;
        });
    });
});