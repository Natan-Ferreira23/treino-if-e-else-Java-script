btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function () {
    var n1 = parseInt(document.querySelector('#n1').value);
    var n2 = parseInt(document.querySelector('#n2').value);
    var n3 = parseInt(document.querySelector('#n3').value);
    var resp = document.getElementById('resp');
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Digite algum valor na caixa de texto ! ");
    }
    else {
        if (n1 > n2 && n1 > n3 && n2 > n3) {

            resp.innerHTML = `O maior numero é ${n1}, o do meio é ${n2}, e o menor ${n3}`;
        }
        else if (n1 > n2 && n1 > n3 && n3 > n2) {
            resp.innerHTML = `O maior numero é ${n1}, o do meio é ${n3}, e o menor ${n2}`;
        }
        else if (n1 > n2 && n1 > n3 && n2 == n3) {
            resp.innerHTML = `O maior numero é ${n1}, ${n2} e ${n3} são iguas`;
        }
        else if (n1 == n2 && n1 > n3) {
            resp.innerHTML = ` ${n1} e ${n2} são iguais e ${n3} é o menor valor`;
        }

        else if (n1 == n3 && n1 > n2) {
            resp.innerHTML = ` ${n1} e ${n3} são iguais e ${n2} é o menor valor`;
        }
        else if (n2 > n1 && n2 > n3 && n1 > n3) {
            resp.innerHTML = `O maior numero é ${n2}, o do meio é ${n1}, e o menor ${n3}`;
        }
        else if (n2 > n1 && n2 > n3 && n3 > n1) {
            resp.innerHTML = `O maior numero é ${n2}, o do meio é ${n3}, e o menor ${n1}`;
        }
        else if (n2 > n1 && n2 > n3 && n1 == n3) {
            resp.innerHTML = `O maior numero é ${n2}, e ${n1} e ${n3} são numeros iguais`;
        }
        else if (n2 == n1 && n3 < n2) {
            resp.innerHTML = `${n2} e ${n1} são iguais, e ${n3} é o menor numero`;
        }
        else if (n2 == n3 && n2 < n1) {
            resp.innerHTML = `${n2} e ${n3} são iguais, e ${n2} é o menor numero`;
        }


        else if (n3 > n1 && n3 > n2 && n1 > n2) {
            resp.innerHTML = `O maior numero é ${n3}, o do meio é ${n1}, e o menor ${n2}`;
        }

        else if (n3 > n1 && n3 > n2 && n2 > n1) {
            resp.innerHTML = `O maior numero é ${n3}, o do meio é ${n2}, e o menor ${n1}`;
        }
        else if (n3 > n1 && n3 > n2 && n1 == n2) {
            resp.innerHTML = `O maior numero é ${n3}, e ${n1} e ${n2} são iguais`;
        }
        else if (n3 == n2 && n3 > n1) {
            resp.innerHTML = `Os numeros ${n3} e ${n2} são iguais e o menor numero é ${n1}`;
        }
        else if (n1 == n2 && n2 == n3) {
            resp.innerHTML = `Os numeros ${n1}, ${n2}, ${n3} são todos iguais`;
        }


    }



})