<script>
  import EventCard from "./EventCard.svelte";

  const events = JSON.parse(localStorage.getItem("events"));
</script>

{#if events}
  {#each events as event}
    <EventCard
      id={event.id}
      url={event.url}
      title={event.title}
      date={event.date}
      color={event.color}
    >
      <slot />
      <slot name="trash" slot="trash" />
    </EventCard>
  {/each}
{/if}
