<template>
  <v-container fluid class="packagecontainer-class">
    <h1>Wybierz odpowiedni pakiet dla siebie</h1>
    Każdy plan oferuje unikalne funkcje,które pomoga ci efektywnie zarządzać swoimi urządeniami i usługami
    <v-row justify="center">
      <v-col cols="12" sm="6" md="3" lg="2">
        <v-btn class="packageButton" block>
          Mini
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="2">
        <v-btn class="packageButton" block>
          Standard
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="2">
        <v-btn class="packageButton" block>
          Plus
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="2">
        <v-btn class="packageButton" block>
          Biznes
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

  <style scoped lang="scss">
  .packagecontainer-class {
    max-width: 100%;
    margin: 0 auto;
  }

  .packageButton {
    font-size: 1rem; /* Domyślna wielkość tekstu */
    padding: 10px 15px; /* Wygodniejsze paddingi */
    width: 100%; /* Przyciski rozciągają się na pełną szerokość */
    text-align: center; /* Wyśrodkowanie tekstu */
  }

  @media (max-width: 768px) {
    .packageButton {
      font-size: 0.9rem; /* Zmniejszanie tekstu na urządzeniach mobilnych */
    }
  }
  </style>
