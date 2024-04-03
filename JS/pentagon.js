function calculatePentagonArea(){
    // get pentagonPerimeter
    const pentagonPerimeter = parseFloat(document.getElementById('pentagon_perimeter').value);

     //  get pentagonBase
     const pentagonBase = parseFloat(document.getElementById('pentagon_base').value);

     // get areaContainer

     const areaContainer = document.getElementById('area_container');

     // create p(tag)
 
     const p = document.createElement('p');



     if (isNaN(pentagonPerimeter) || isNaN(pentagonBase)) {
        alert ('Invalid Number');
    }else{
        const area = pentagonPerimeter * pentagonBase ;

        p.innerText = `${sum++}. pentagon  ${area} cm²`;

        areaContainer.appendChild(p);

        document.getElementById('pentagon_perimeter').value = '';
        document.getElementById('pentagon_base').value = '';

    }


}