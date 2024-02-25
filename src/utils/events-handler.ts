export const addEvent = (event: any) => {
  let eventsStorage = JSON.parse(localStorage.getItem("events")!);

  if (!eventsStorage) {
    localStorage.setItem("events", JSON.stringify([event]));
    return;
  }

  eventsStorage.push(event);
  localStorage.setItem("events", JSON.stringify(eventsStorage));
};

export const deleteEvent = (id: string) => {
  const eventsStorage = JSON.parse(localStorage.getItem("events")!);
  const newEvents = eventsStorage.filter((event: any) => event.id !== id);

  localStorage.setItem("events", JSON.stringify(newEvents));
};
