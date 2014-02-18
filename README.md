# webjspell_http

webscraps the awesome webjspell service from natura.di.uminho.pt


Each word is stored in a key.

Possible details are:

* morf - morphological analysis, key-value pairs
* sin - synonyms,(a) array
* def - dictionary definitions


## Usage example:

```javascript
var webjspell_http = request('webjspell_http');
webjspell_http('talvez faça falta', function(err, o) {
    console.log(err, o);
});
```

would output:

```javascript
{
  "um": {
    "morf": {
      "categoria": "pronome indefinido",
      "número": "singular",
      "género": "masculino",
      "lema": "um"
    },
    "sin": ["singular", "único", "uno"],
    "def": [
      "adj.\nDiz-se do número cardinal, que exprime uma só unidade: um homem.\nQue é o...",
      "m.\nÁrvore de Damão, (guatteria cerasoides)."
    ]
  },
  "grande": {
    "morf": {
      "categoria": "adjectivo",
      "número": "singular",
      "género": "indefinido",
      "lema": "grande"
    },
    "sin": ["amplo", "espaçoso", "extenso", "largo", "vasto"],
    "def": [
      "adj.\nQue tem dimensões mais que ordinárias.\nVasto, extenso: grande território..."
    ]
  },
  "passo": {
    "morf": {
      "categoria": "verbo",
      "tempo": "presente",
      "número": "singular",
      "pessoa": "primeira",
      "transitividade": "transitivo/intransitivo",
      "lema": "passar"
    },
    "sin": ["atravessar", "cruzar", "encruzar", "galgar", "terçar", "transpor"],
    "def": [
      "v. t.\nTranspor; atravessar, passando de um lado para outro: passar o rio.\nTra..."
    ]
  },
  "para": {
    "morf": {
      "categoria": "verbo",
      "tempo": "imperativo",
      "número": "singular",
      "pessoa": "terceira",
      "transitividade": "transitivo/intransitivo",
      "lema": "parir"
    },
    "def": [
      "v. t.\nDar á luz ou expellir do útero, tratando-se das mulheres e de todas as ..."
    ],
    "sin": ["cessar", "sobrestar"]
  },
  "a": {
    "morf": {
      "categoria": "pronome pessoal",
      "número": "singular",
      "caso latino": "acusativo",
      "pessoa": "terceira",
      "género": "feminino",
      "lema": "o"
    },
    "def": [
      "m.\nDécima quinta letra do alphabeto português.\nExt.\nCírculo, anel, qualquer o...",
      "Art. def., m., sing.\n(Ant. lo, do lat. illum)",
      "pron. demonstr., m., sing.\n(que se emprega em lugar de um substantivo ou de u..."
    ]
  },
  "humanidade": {
    "morf": {
      "categoria": "substantivo comum",
      "número": "singular",
      "função semântica do sufixo": "-idade",
      "género": "feminino",
      "lema": "humano"
    },
    "def": [
      "adj.\nRelativo ao homem; próprio do homem.\nHumanitário; bondoso.\nM. pl.\nOs hom..."
    ],
    "sin": ["benevolente", "benévolo", "benigno", "bom", "bondoso", "caridoso", "caritativo", "clemente", "generoso", "indulgente", "misericordioso", "patriarcal", "piedoso"]
  }
}
```
