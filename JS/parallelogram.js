function calculateParallelogramArea(){
    // get parallelogramBase
    const parallelogramBase = parseFloat(document.getElementById('parallelogram_base').value);

     //  get parallelogramWidth
     const parallelogramWidth = parseFloat(document.getElementById('parallelogram_width').value);

     // get areaContainer

     const areaContainer = document.getElementById('area_container');

     // create p(tag)
 
     const p = document.createElement('p');



     if (isNaN(parallelogramBase) || isNaN(parallelogramWidth)) {
        alert ('Invalid Number');
    }else{
        const area =  parallelogramWidth * parallelogramBase;

        p.innerText = `${sum++}. Parallelogram  ${area} cm²`;

        areaContainer.appendChild(p);

        document.getElementById('parallelogram_base').value = '';
        document.getElementById('parallelogram_width').value = '';

    }


}