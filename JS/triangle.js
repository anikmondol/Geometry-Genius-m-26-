let sum = 1;
function calculateTriangleArea() {
    // get triangleBase
    const triangleBase = parseFloat(document.getElementById('triangle_base').value);

    //  get triangleHight
    const triangleHight = parseFloat(document.getElementById('triangle_hight').value);

    // get areaContainer

    const areaContainer = document.getElementById('area_container');

    // create p(tag)

    const p = document.createElement('p');

    if (isNaN(triangleHight) || isNaN(triangleBase)) {
        alert ('Invalid Number');
    }else{
        const area = 0.5 * triangleBase * triangleHight;

        p.innerText = `${sum++}. Triangle  ${area} cm²`;

        areaContainer.appendChild(p);

        document.getElementById('triangle_base').value = '';
        document.getElementById('triangle_hight').value = '';

    }


   


}