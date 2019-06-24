<template>
  <table class="artwork-meta">
    <tr>
      <th>Year</th>
      <td>{{ artwork.year }}</td>
    </tr>
    <tr>
      <th>Material</th>
      <td>{{ artwork.material }}</td>
    </tr>
    <tr>
      <th>Dimensions</th>
      <td>{{ artwork.dimensions }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['artwork']
}
</script>

<style lang="scss">
.artwork-meta {
  font-size: .8em;
  opacity: .8;
  margin: auto;

  tr {
    th {
      text-align: right;
      padding-right: 1rem;
    }
    td {
      text-align: left;
      font-weight: 600;
    }
  }
}
</style>