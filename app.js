const dados = {
  Brasil: {
    ligas: {
      "série A": {
        Times: {
          Flamengo: ["Gabigol", "Arrascaeta"],
          Palmeiras: ["Dudu", "Scarpa"],
          ABC: ["kingNildo", "Golden Boy"],
        },
      },
      "série B": {
        Times: {
          Cruzeiro: ["Fábio", "Thiago Neves"],
          Avenida: ["Tigre", "Alcindo"],
        },
      },
      "série C": {
        Times: {
          SenacFc: ["Arthur", "ArthurTwo"],
          ArthurFc: ["Gruta", "Groundoum"],
        },
      },
      "série D": {
        Times: {
          Avenida: ["João, Pedro"],
          "Santa Casa": ["Roger", "Ronaldo"],
        },
      },
    },
  },
  Inglaterra: {
    ligas: {
      "Premier League": {
        Times: {
          Liverpool: ["Salah", "Mane"],
          River: ["Habbib's", "cuDoce"],
        },
      },
      Champions: {
        Times: {
          "Real Madrid": ["Vini Jr", "Endrick"],
          "Atlético de Madrid": ["Messi", "Cristiano Ronaldo"],
        },
      },
      "La liga": {
        Times: {
          "Villa Real": ["Neymar", "McDonald's"],
          "Villa Nova": ["Casa", "Apartamento"],
        },
      },
    },
  },
  Espanha: {
    ligas: {
      "Liga One": {
        Times: {
          "The One": ["Champion", "notChampion"],
          "The Second": ["secondChampion", "notAllow"],
        },
      },
      "Liga Twice": {
        Times: {
          Solo: ["Sozin", "solito"],
          Cotcho: ["Cochin", "Cochado"],
        },
      },
    },
  },
};

const paisSelect = document.getElementById("pais");
const ligaSelect = document.getElementById("liga");
const timeSelect = document.getElementById("time");
const jogadorSelect = document.getElementById("jogador");

for (const pais in dados) {
  const option = document.createElement("option");
  option.value = pais;
  option.textContent = pais;
  paisSelect.appendChild(option);
}

paisSelect.addEventListener("change", function () {
  const ligaSelect = document.getElementById("liga");
  const timeSelect = document.getElementById("time");
  const jogadorSelect = document.getElementById("jogador");

  ligaSelect.innerHTML = '<option value="">Selecione uma liga</option>';
  timeSelect.innerHTML = '<option value="">Selecione um time</option>';
  jogadorSelect.innerHTML = '<option value="">Selecione um jogador</option>';

  ligaSelect.disabled = true;
  timeSelect.disabled = true;
  jogadorSelect.disabled = true;

  const pais = this.value;

  if (pais) {
    for (const liga in dados[pais].ligas) {
      const option = document.createElement("option");
      option.value = liga;
      option.textContent = liga;
      ligaSelect.appendChild(option);
    }

    ligaSelect.disabled = false;
  }
});

ligaSelect.addEventListener("change", function () {
  const timeSelect = document.getElementById("time");
  const jogadorSelect = document.getElementById("jogador");

  timeSelect.innerHTML = '<option value="">Selecione um time</option>';
  jogadorSelect.innerHTML = '<option value="">Selecione um jogador</option>';

  timeSelect.disabled = true;
  jogadorSelect.disabled = true;

  const pais = paisSelect.value;
  const liga = this.value;

  if (pais && liga != null) {
    const times = dados[pais].ligas[liga].Times;
    for (const time in times) {
      const option = document.createElement("option");
      option.value = time;
      option.textContent = time;
      timeSelect.appendChild(option);
    }
    timeSelect.disabled = false;
  }
});

timeSelect.addEventListener("change", function () {
  jogadorSelect.innerHTML = '<option value="">Selecione um jogador</option>';
  jogadorSelect.disabled = true;

  const pais = paisSelect.value;
  const liga = ligaSelect.value;
  const time = this.value;

  if (pais && liga && time != null) {
    const jogadores = dados[pais].ligas[liga].Times[time];
    for (const jogador of jogadores) {
      const option = document.createElement("option");
      option.value = jogador;
      option.textContent = jogador;
      jogadorSelect.appendChild(option);
    }
    jogadorSelect.disabled = false;
  }
});
