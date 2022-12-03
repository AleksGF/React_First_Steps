export const getDateNow = (withTime = false) => {
  const now = new Date(Date.now());
  let result = `${
    now.getFullYear()
  }-${
    (now.getMonth() + 1) < 10 ? ('0' + now.getMonth() + 1) : (now.getMonth() + 1)
  }-${
    (now.getDate() < 10) ? ('0' + now.getDate()): (now.getDate())
  }`;

  if (withTime) {
    result = `${
      result
    } at ${
      (now.getHours() < 10) ? ('0' + now.getHours()) : (now.getHours())
    }:${
      (now.getMinutes() < 10) ? ('0' + now.getMinutes()) : (now.getMinutes())
    }:${
      (now.getSeconds() < 10) ? ('0' + now.getSeconds()) : (now.getSeconds())
    }`;
  }

  return result;
};