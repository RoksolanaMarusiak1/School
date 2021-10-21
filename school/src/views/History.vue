<template>
  <div class="timeline">
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            {{ year.headline }}
          </h2>
          <div>
            {{ year.description }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: "cyan",
        year: "1853",
        headline: "Заснування школи",
        description:
          "Перші відомості про школу належать до 1853 року. Першим учителем був Антон Марковський. З самого початку заснування школи грамоти вчили дяки, тому школу ще називали в селі дяківською.",
      },
      {
        headline: "Директором школи став житель села Зигмунд Рижевський",
        description:
          "Згодом розпочинається викладання українською мовою. Тимчасово ще вчителював Микола Семеняк, який теж викладав українською мовою.",
        color: "green",
        year: "1890 ",
      },
      {
        headline: "Побудова нового приміщення",
        description:
          "На кошти сільської громади було побудовано приміщення 5-ти класної школи. Воно збереглося до сьогоднішніх днів.",
        color: "pink",
        year: "1931",
      },
      {
        headline: "Директором стає Секала Іванна Петрівна",
        description:
          "В селі було відкрито семирічну школу. Якщо до 1939 року в школі навчалося близько 100 учнів, то в 1940 році уже навчалося 404 учні.",
        color: "amber",
        year: "1940",
      },
      {
        headline: "Директором школи стає Вербовий Володимир Степанович",
        description: "За його керівництва було добудовано 5 класних кімнат.",
        color: "orange",
        year: "1954",
      },
      {
        headline: "Директором школи стає Вербовий Володимир Степанович",
        description: "За його керівництва було добудовано 5 класних кімнат.",
        color: "red",
        year: "1954",
      },
    ],
  }),
};
</script>

<style scoped>
.timeline {
  margin: 0 auto;
  width: 70%;
}
</style>