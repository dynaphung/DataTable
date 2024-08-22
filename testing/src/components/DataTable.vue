<script setup>
import { ref, onMounted } from "vue";
const customers = ref([]);
const totalRecords = ref(0);
const first = ref(0); // Starting index of the displayed records
const rows = ref(5); // Number of records per page
const loadCustomers = (event) => {
  // Simulate a larger dataset
  const data = [
    {
      name: "James Butt",
      country: "Algeria",
      company: "Benton, John B Jr",
      representative: "Ioni Bowcher",
    },
    {
      name: "Josephine Darakjy",
      country: "Egypt",
      company: "Chanay, Jeffrey A Esq",
      representative: "Amy Elsner",
    },
    {
      name: "Art Venere",
      country: "Panama",
      company: "Chemel, James L Cpa",
      representative: "Asiya Javayant",
    },
    {
      name: "Lenna Paprocki",
      country: "Slovenia",
      company: "Feltz Printing Service",
      representative: "Xuxue Feng",
    },
    {
      name: "Donette Foller",
      country: "South Africa",
      company: "Printing Dimensions",
      representative: "Asiya Javayant",
    },
    {
      name: "Alfred Futterkiste",
      country: "Germany",
      company: "Benton, John B Jr",
      representative: "Ioni Bowcher",
    },
    {
      name: "Maria Anders",
      country: "Germany",
      company: "Chanay, Jeffrey A Esq",
      representative: "Amy Elsner",
    },
    {
      name: "Francisco Chang",
      country: "Mexico",
      company: "Chemel, James L Cpa",
      representative: "Asiya Javayant",
    },
    {
      name: "Roland Mendel",
      country: "Austria",
      company: "Feltz Printing Service",
      representative: "Xuxue Feng",
    },
    {
      name: "Helen Bennett",
      country: "UK",
      company: "Printing Dimensions",
      representative: "Asiya Javayant",
    },
    {
      name: "Yoshi Tannamuri",
      country: "Japan",
      company: "Benton, John B Jr",
      representative: "Ioni Bowcher",
    },
    {
      name: "Giovanni Rovelli",
      country: "Italy",
      company: "Chanay, Jeffrey A Esq",
      representative: "Amy Elsner",
    },
    {
      name: "Eduardo Roel",
      country: "Brazil",
      company: "Chemel, James L Cpa",
      representative: "Asiya Javayant",
    },
    {
      name: "Paul Henriot",
      country: "France",
      company: "Feltz Printing Service",
      representative: "Xuxue Feng",
    },
    {
      name: "Paolo Accorti",
      country: "Italy",
      company: "Printing Dimensions",
      representative: "Asiya Javayant",
    },
  ];
  totalRecords.value = data.length;
  customers.value = data.slice(event.first, event.first + event.rows);
};
const onPage = (event) => {
  first.value = event.first;
  rows.value = event.rows;
  loadCustomers(event);
};
onMounted(() => {
  loadCustomers({ first: first.value, rows: rows.value });
});
</script>
<template>
  <div>
    <DataTable :value="customers" :paginator="true" :rows="rows" :totalRecords="totalRecords" :rowsPerPageOptions="[2, 5, 10, 20]" :lazy="true" :first="first" @page="onPage">
      <Column field="name" header="Name"></Column>
      <Column field="country" header="Country"></Column>
      <Column field="company" header="Company"></Column>
      <Column field="representative" header="Representative"></Column>
    </DataTable>
    <p class="text-red-500 font-mono mt-5">
      <ul>
        <li>DataTable</li>
        <li>Column</li>
        <li>Paginator</li>
        <li>button</li>
      </ul>
    </p>
  </div>
</template>
<style scoped></style>
