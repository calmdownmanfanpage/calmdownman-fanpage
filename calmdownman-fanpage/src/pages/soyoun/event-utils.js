let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '2주차 불침번',
    start: "2023-10-13",
  },
  {
    id: createEventId(),
    title: '3주차 불침번',
    start: "2023-10-24"
  }
]

function createEventId() {
  return String(eventGuid++);
}

module.exports = {
  INITIAL_EVENTS,
  createEventId,
}