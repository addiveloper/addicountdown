<script>
  export let time = "";
  export let dateType = "";
  export let attribute = {};
</script>

<div
  class="flex flex-col items-center font-medium min-w-16 md:min-w-44 md:gap-0 gap-2"
>
  <span class="text-3xl md:text-8xl tabular-nums" {...attribute}>{time}</span>
  <span class="opacity-80 text-xs md:text-sm uppercase">{dateType}</span>
</div>
