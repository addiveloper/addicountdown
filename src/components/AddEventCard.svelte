<script>
  import { addEvent } from "@/utils/events-handler";

  let isModalOpen = false;

  const handleOnClick = () => {
    isModalOpen = !isModalOpen;
  };

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    const res = await fetch("/api/save", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      console.log(await res.json());
      return;
    }

    const event = await res.json();

    addEvent(event);

    window.location.href = event.url;
  };
</script>

<button
  on:click={handleOnClick}
  class="flex justify-center items-center rounded-md border dark:border-neutral-700 border-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition group py-4"
>
  <slot name="plus" />
</button>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if isModalOpen}
  <div
    on:click={handleOnClick}
    class="modal h-full w-full flex justify-center items-center bg-black bg-opacity-30 fixed top-0 left-0 z-10 animate-fade-in-fast"
  >
    <div
      on:click|stopPropagation
      class="relative md:max-w-sm md:mx-auto mx-4 w-full bg-secondary rounded-xl p-4"
    >
      <button
        on:click|stopPropagation={handleOnClick}
        class="absolute right-2 top-2"
      >
        <slot name="close" />
      </button>
      <form
        on:submit|preventDefault={handleSubmit}
        action=""
        class="flex flex-col font-medium gap-4 w-full"
      >
        <div class="border-b pb-2 border-neutral-300 dark:border-neutral-700">
          <h3>New event</h3>
        </div>
        <div class="flex flex-col">
          <label for="title" class="text-xs opacity-90">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title"
            placeholder="Miguel's birthday!"
            minlength="2"
            class="text-sm border border-neutral-200 dark:border-neutral-700 dark:bg-secondary px-2 py-2 rounded outline-none"
          />
        </div>
        <div class="flex flex-col">
          <label for="date" class="text-xs opacity-90">Date</label>
          <input
            required
            type="datetime-local"
            name="date"
            id="date"
            min="1970-01-02T00:00"
            class="text-sm border border-neutral-200 dark:border-neutral-700 dark:bg-secondary px-2 py-2 rounded outline-none"
          />
        </div>
        <div class="flex flex-col">
          <label for="color" class="text-xs opacity-90">Color</label>
          <select
            required
            name="color"
            id="color"
            class="text-sm border border-neutral-200 dark:border-neutral-700 dark:bg-secondary px-2 py-2 rounded outline-none"
          >
            <option value="default">-- Default --</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="yellow">Yellow</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-primary text-secondary py-2 px-3 rounded-md"
          >Create
        </button>
      </form>
    </div>
  </div>
{/if}
