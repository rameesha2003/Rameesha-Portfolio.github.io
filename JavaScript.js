const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
function downloadCV() {
    // Get the iframe element
    var pdfViewer = document.getElementById("pdfViewer");
    // Get the source URL of the PDF
    var pdfSrc = pdfViewer.getAttribute("src");
    // Open the PDF in a new tab or window
    window.open(pdfSrc, '_blank');
}
