const removeFilho = document.getElementById('pai');

for (let index = removeFilho.childNodes.length - 1; index >= 0; index -= 1){
    const currentChildren = removeFilho.childNodes[index];
    if(currentChildren.id !== 'elementoOndeVoceEsta'){
        currentChildren.remove();
    }
}

const segundoEUltimo = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimo.remove();