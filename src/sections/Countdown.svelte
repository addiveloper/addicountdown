<script>
  import DateComponent from "@/components/Date.svelte";

  export let title = "";
  export let dateParams = "";

  let seconds = "00";
  let minutes = "00";
  let hours = "00";
  let days = "00";

  const date = new Date(dateParams).getTime();

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function init() {
    const formatTime = (time) => {
      return Math.floor(time).toString().padStart(2, "0");
    };

    function updateCountdown() {
      const now = Date.now();
      const diff = date - now;

      days = formatTime(diff / DAY);
      hours = formatTime((diff % DAY) / HOUR);
      minutes = formatTime((diff % HOUR) / MINUTE);
      seconds = formatTime((diff % MINUTE) / SECOND);
    }

    setInterval(updateCountdown, SECOND);
    updateCountdown();
  }

  init();
</script>

<section class="flex flex-col justify-center items-center">
  <h1 class="text-center font-medium text-lg md:text-2xl mb-8">
    {title}
  </h1>
  <div class="flex flex-row gap-x-1">
    <DateComponent
      time={days}
      dateType="Días"
      attribute={{ "data-days": "" }}
    />
    <span class="text-2xl md:text-5xl md:mt-5">:</span>
    <DateComponent
      time={hours}
      dateType="Horas"
      attribute={{ "data-hours": "" }}
    />
    <span class="text-2xl md:text-5xl md:mt-5">:</span>
    <DateComponent
      time={minutes}
      dateType="Minutos"
      attribute={{ "data-minutes": "" }}
    />
    <span class="text-2xl md:text-5xl md:mt-5">:</span>
    <DateComponent
      time={seconds}
      dateType="Segundos"
      attribute={{ "data-seconds": "" }}
    />
  </div>
</section>
