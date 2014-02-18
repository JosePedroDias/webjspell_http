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
webjspell_http('um grande passo para a humanidade', function(err, o) {
    console.log(err, o);
});
```

would output:

```javascript
{
  "um": [
    {
      "morf": {
        "categoria": "artigo",
        "número": "singular",
        "classificação": "indefinido",
        "género": "masculino",
        "lema": "um"
      },
      "sin": ["singular", "único", "uno"],
      "def": [
        "adj.\nDiz-se do número cardinal, que exprime uma...",
        "m.\nÁrvore de Damão, (guatteria cerasoides)."
      ]
    },
    {
      "morf": {
        "categoria": "cardinal",
        "número": "singular",
        "género": "masculino",
        "lema": "um"
      },
      "sin": ["singular", "único", "uno"],
      "def": [
        "adj.\nDiz-se do número cardinal, que exprime uma...",
        "m.\nÁrvore de Damão, (guatteria cerasoides)."
      ]
    },
    {
      "morf": {
        "categoria": "pronome indefinido",
        "número": "singular",
        "género": "masculino",
        "lema": "um"
      },
      "sin": ["singular", "único", "uno"],
      "def": [
        "adj.\nDiz-se do número cardinal, que exprime uma...",
        "m.\nÁrvore de Damão, (guatteria cerasoides)."
      ]
    }
  ],
  "grande": [
    {
      "morf": {
        "categoria": "adjectivo",
        "número": "singular",
        "género": "indefinido",
        "lema": "grande"
      },
      "sin": ["amplo", "espaçoso", "extenso", "largo", "vasto"],
      "def": [
        "adj.\nQue tem dimensões mais que ordinárias.\nVas..."
      ]
    }
  ],
  "passo": [
    {
      "morf": {
        "categoria": "substantivo comum",
        "número": "singular",
        "género": "masculino",
        "lema": "passo"
      },
      "sin": ["escancha", "passada"],
      "def": [
        "m.\nActo de collocar um pé adeante do outro, par...",
        "adj. Ant.\nSoffredor? paciente?: «O Deos lá de c...",
        "adj.\nO mesmo que passado ou sêco, (falando-se d..."
      ]
    },
    {
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
        "v. t.\nTranspor; atravessar, passando de um lado..."
      ]
    }
  ],
  "para": [
    {
      "morf": {
        "categoria": "preposição",
        "lema": "para"
      },
      "def": [
        "prep.\nNa direcção de: navegou para o Norte.\nA f..."
      ]
    },
    {
      "morf": {
        "categoria": "verbo",
        "tempo": "presente",
        "número": "singular",
        "pessoa": "terceira",
        "transitividade": "transitivo/intransitivo",
        "lema": "parar"
      },
      "sin": ["cessar", "sobrestar"],
      "def": [
        "v. i.\nDeixar de andar: o cavallo parou.\nCessar ..."
      ]
    },
    {
      "morf": {
        "categoria": "verbo",
        "tempo": "imperativo",
        "número": "singular",
        "pessoa": "segunda",
        "transitividade": "transitivo/intransitivo",
        "lema": "parar"
      },
      "sin": ["cessar", "sobrestar"],
      "def": [
        "v. i.\nDeixar de andar: o cavallo parou.\nCessar ..."
      ]
    },
    {
      "morf": {
        "categoria": "verbo",
        "tempo": "presente do conjuntivo",
        "número": "singular",
        "pessoa": "primeira",
        "transitividade": "transitivo/intransitivo",
        "lema": "parir"
      },
      "def": [
        "v. t.\nDar á luz ou expellir do útero, tratando-..."
      ]
    },
    {
      "morf": {
        "categoria": "verbo",
        "tempo": "presente do conjuntivo",
        "número": "singular",
        "pessoa": "terceira",
        "transitividade": "transitivo/intransitivo",
        "lema": "parir"
      },
      "def": [
        "v. t.\nDar á luz ou expellir do útero, tratando-..."
      ]
    },
    {
      "morf": {
        "categoria": "verbo",
        "tempo": "imperativo",
        "número": "singular",
        "pessoa": "terceira",
        "transitividade": "transitivo/intransitivo",
        "lema": "parir"
      },
      "def": [
        "v. t.\nDar á luz ou expellir do útero, tratando-..."
      ]
    }
  ],
  "a": [
    {
      "morf": {
        "categoria": "preposição",
        "lema": "a"
      },
      "def": [
        "m.\nPrimeira letra do alphabeto português.\n* Mús...",
        "art.\n(fem. de o).\nAnt. la.\n(Do lat. illa).",
        "prep.\nQue indica várias relações.\n(Lat. ad).",
        "pron.\nFlexão fem. do pron. o."
      ]
    },
    {
      "morf": {
        "categoria": "artigo",
        "número": "singular",
        "classificação": "definido",
        "género": "feminino",
        "lema": "o"
      },
      "def": [
        "m.\nDécima quinta letra do alphabeto português.\n...",
        "Art. def., m., sing.\n(Ant. lo, do lat. illum)",
        "pron. demonstr., m., sing.\n(que se emprega em l..."
      ]
    },
    {
      "morf": {
        "categoria": "pronome pessoal",
        "número": "singular",
        "caso latino": "acusativo",
        "pessoa": "terceira",
        "género": "feminino",
        "lema": "o"
      },
      "def": [
        "m.\nDécima quinta letra do alphabeto português.\n...",
        "Art. def., m., sing.\n(Ant. lo, do lat. illum)",
        "pron. demonstr., m., sing.\n(que se emprega em l..."
      ]
    }
  ],
  "humanidade": [
    {
      "morf": {
        "categoria": "substantivo comum",
        "número": "singular",
        "género": "feminino",
        "lema": "humanidade"
      },
      "def": [
        "f.\nO conjunto dos homens.\nNatureza humana.\nO gê..."
      ]
    },
    {
      "morf": {
        "categoria": "substantivo comum",
        "número": "singular",
        "função semântica do sufixo": "-idade",
        "género": "feminino",
        "lema": "humano"
      },
      "sin": ["benevolente", "benévolo", "benigno", "bom", "bondoso", "caridoso", "caritativo", "clemente", "generoso", "indulgente", "misericordioso", "patriarcal", "piedoso"],
      "def": [
        "adj.\nRelativo ao homem; próprio do homem.\nHuman..."
      ]
    }
  ]
}
```
