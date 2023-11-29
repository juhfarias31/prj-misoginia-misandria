document.addEventListener('DOMContentLoaded', function () {
    const draggableItems = document.querySelectorAll('.draggable-item');
    const dropzones = document.querySelectorAll('.dropzone');

    draggableItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });

    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragover', dragOver);
        dropzone.addEventListener('dragenter', dragEnter);
        dropzone.addEventListener('dragleave', dragLeave);
        dropzone.addEventListener('drop', dragDrop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function dragEnd() {
        // No action needed
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter() {
        this.classList.add('over');
    }

    function dragLeave() {
        this.classList.remove('over');
    }

    function dragDrop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggedItem = document.getElementById(data);

        if (this.classList.contains('dropzone')) {
            this.appendChild(draggedItem);
            this.classList.remove('over');
        }
    }
});
