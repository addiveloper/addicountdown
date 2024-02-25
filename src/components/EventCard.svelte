<script>
  import { deleteEvent } from "@/utils/events-handler";

  export let id = "";
  export let url = "";
  export let title = "";
  export let date = "";

  let isMenuOpen = false;

  const handleClick = () => {
    isMenuOpen = !isMenuOpen;
  };

  const handleConfirmDelete = () => {
    deleteEvent(id);

    location.reload();
  };

  const formatDate = new Date(date).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
</script>

<article
  class="flex relative rounded-md border border-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-800 hover:bg-neutral-50 transition group"
>
  <button
    on:click={handleClick}
    class="absolute flex justify-center items-center p-1 right-1 top-1 md:opacity-0 md:group-hover:opacity-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition rounded-md cursor-pointer"
  >
    <slot />
  </button>
  {#if isMenuOpen}
    <div
      class="absolute flex md:top-6 top-8 z-[3] md:-right-12 right-0 animate-fade-in-fast bg-secondary rounded shadow-sm shadow-black/30 overflow-hidden"
    >
      <ul class="text-sm">
        <li class="border-b border-neutral-300 dark:border-neutral-700">
          <span class="inline-flex w-full py-2 px-4 font-medium">Menú</span>
        </li>
        <li class="hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
          <button
            on:click|stopPropagation={handleConfirmDelete}
            class="inline-flex w-full py-2 px-4 items-center gap-2"
            ><slot name="trash" /><span>Delete</span></button
          >
        </li>
      </ul>
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      on:click|stopPropagation={handleClick}
      class="w-full h-full fixed top-0 left-0 z-[1]"
    ></div>
  {/if}
  <a href={url} class="p-3 md:overflow-hidden w-full">
    <h1
      class="font-medium text-wrap md:text-nowrap md:truncate leading-5 md:leading-normal"
    >
      {title}
    </h1>
    <p class="font-medium text-xs opacity-80">{formatDate}</p>
  </a>
</article>
