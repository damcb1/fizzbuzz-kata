// saber si la frase contiene la palabra English

// con una frase dada sin tener en cuenta mayusculas o minusculas
// devuelve true

// la frase = string ?
// la palabra = string ? como le paso la palabra a buscar y la frase a la function?
// normalizar a miniscula la frase y la palabra ? si o no lo se
// comprobar si la palabra existe en la frase ? ????

export function wordExist(sentence, word) {
    return sentence.toLowerCase().includes(word.toLowerCase());
}