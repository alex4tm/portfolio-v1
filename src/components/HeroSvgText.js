
const svgText = () => {
  document.addEventListener("DOMContentLoaded", async function() {
  const moveText = document.querySelector('#text_path');
   function updateMoveText(offset, fill) {
    let currentOffset = parseInt(moveText.getAttribute('startOffset'));
    // Code for changing svg text fill
    // let currentFill = parseInt(moveText.getAttribute('fill').substring(1));
    // let random = Math.floor(Math.random() * (145 - 25 + 1) + 25)
    // moveText.setAttribute("fill", (`#${currentFill + random }`));
    //
    if (currentOffset <= 750) {
      moveText.setAttribute("startOffset", (currentOffset + (currentOffset/130) + 1.5));

    } else {
        moveText.setAttribute("startOffset", (0));
    }
};

 setInterval(updateMoveText, 40);
});
}

export default svgText;
