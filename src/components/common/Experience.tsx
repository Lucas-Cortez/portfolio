"use client";

import moment from "moment";

export function Experience() {
  const experience = Math.round(moment().diff(moment("2020-08-01"), "years", true));

  return experience;
}
