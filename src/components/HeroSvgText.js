
const svgText = () => {
  document.addEventListener("DOMContentLoaded", async function() {
  const moveText = document.querySelector('#text_path');
   function updateMoveText(offset) {
    let currentOffset = parseInt(moveText.getAttribute('startOffset'));
    if (currentOffset <= 750) {
      moveText.setAttribute("startOffset", (currentOffset + ((currentOffset/100) + 1)));
    } else {
        moveText.setAttribute("startOffset", (0));
    }
};

 setInterval(updateMoveText, 30);
});
}

export default svgText;
