
function calculateEllipseArea() {
    // get ellipseALength
    const ellipseALength = parseFloat(document.getElementById('ellipse_a_length').value);

    //  get ellipseBLength
    const ellipseBLength = parseFloat(document.getElementById('ellipse_b_length').value);

    // get areaContainer

    const areaContainer = document.getElementById('area_container');

    // create p(tag)

    const p = document.createElement('p');



    if (isNaN(ellipseALength) || isNaN(ellipseBLength)) {
        alert('Invalid Number');
    } else {
        const areaFloat = Math.PI * ellipseBLength * ellipseALength;
        const area = parseFloat(areaFloat.toFixed(2))


        p.innerText = `${sum++}. Ellipse  ${area} cm²`;

        areaContainer.appendChild(p);

        document.getElementById('ellipse_a_length').value = '';
        document.getElementById('ellipse_b_length').value = '';

    }


}