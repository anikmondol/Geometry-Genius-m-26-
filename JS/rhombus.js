function calculateRhombusArea() {
    // get pentagonPerimeter
    const parallelogramAse1 = parseFloat(document.getElementById('parallelogram_base1').value);

    //  get pentagonBase
    const parallelogramBase2 = parseFloat(document.getElementById('parallelogram_base2').value);

    // get areaContainer

    const areaContainer = document.getElementById('area_container');

    // create p(tag)

    const p = document.createElement('p');

    if (isNaN(parallelogramAse1) || isNaN(parallelogramBase2)) {
        alert ('Invalid Number');
    }else{
        const area = 0.5 * parallelogramAse1 * parallelogramBase2;

        p.innerText = `${sum++}. Rhombus  ${area} cm²`;

        areaContainer.appendChild(p);

        document.getElementById('parallelogram_base1').value = '';
        document.getElementById('parallelogram_base2').value = '';

    }


}