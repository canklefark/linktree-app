<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { db, user } from "$lib/firebase";
  import { doc, getDoc, writeBatch } from "firebase/firestore";

  let username = "";
  let loading = false;
  let isAvailable = false;

  async function chekcAvailability(params: type) {}
</script>

<AuthCheck>
  <h2>Username</h2>
</AuthCheck>
