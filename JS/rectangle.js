

function calculateRectangleArea() {
    // get rectangleWidth
    const rectangleWidth = parseFloat(document.getElementById('rectangle_width').value);

    //  get rectangleLength
    const rectangleLength = parseFloat(document.getElementById('rectangle_length').value);



    


    const areaContainer = document.getElementById('area_container');

    // create p(tag)

    const p = document.createElement('p');

    if (isNaN(rectangleWidth) || isNaN(rectangleLength)) {
        alert ('Invalid Number');
    }else{
        const area = rectangleWidth * rectangleLength;

        p.innerText = `${sum++}.  Rectangle  ${area} cm²`;

        
        areaContainer.appendChild(p);

        document.getElementById('rectangle_width').value = '';
        document.getElementById('rectangle_length').value = '';
    }




}