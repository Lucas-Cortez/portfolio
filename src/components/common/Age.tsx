"use client";

import moment from "moment";

export function Age() {
  const age = moment().diff(moment("2000-02-16"), "years");

  return age;
}
