<script>
  import { deleteEvent } from "@/utils/events-handler";

  export let id = "";
  export let url = "";
  export let title = "";
  export let date = "";
  export let color = "";

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

  console.log(color);
</script>

<article
  class={`flex ${
    (color === "default" &&
      "border-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-800 hover:bg-neutral-50") ||
    (color === "red" &&
      "dark:bg-red-500 dark:bg-opacity-20 dark:border-red-700 dark:border-opacity-40 border-red-300 bg-red-100 hover:bg-red-200 dark:hover:bg-opacity-30") ||
    (color === "blue" &&
      "dark:bg-blue-500 dark:bg-opacity-20 dark:border-blue-700 dark:border-opacity-40 border-blue-300 bg-blue-100 hover:bg-blue-200 dark:hover:bg-opacity-30") ||
    (color === "purple" &&
      "dark:bg-purple-500 dark:bg-opacity-20 dark:border-purple-700 dark:border-opacity-40 border-purple-300 bg-purple-100 hover:bg-purple-200 dark:hover:bg-opacity-30") ||
    (color === "pink" &&
      "dark:bg-pink-500 dark:bg-opacity-20 dark:border-pink-700 dark:border-opacity-40 border-pink-300 bg-pink-100 hover:bg-pink-200 dark:hover:bg-opacity-30") ||
    (color === "yellow" &&
      "dark:bg-yellow-500 dark:bg-opacity-20 dark:border-yellow-700 dark:border-opacity-40 border-yellow-300 bg-yellow-100 hover:bg-yellow-200 dark:hover:bg-opacity-30") ||
    (color === "green" &&
      "dark:bg-green-700 dark:bg-opacity-20 dark:border-green-700 dark:border-opacity-40 border-green-300 bg-green-100 hover:bg-green-200 dark:hover:bg-opacity-30")
  } relative rounded-md border transition group border-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-800 hover:bg-neutral-50`}
>
  <button
    on:click={handleClick}
    class="absolute flex justify-center items-center p-1 right-1 top-1 md:opacity-0 md:group-hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 transition rounded-md cursor-pointer"
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
