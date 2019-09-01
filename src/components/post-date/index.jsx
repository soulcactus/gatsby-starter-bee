import React from 'react'

import './index.scss'

const koreanDate = (postDate) => {
  const splitDate = postDate.replace(",", "").split(" ");
  const year = splitDate[2];
  const month = splitDate[0];
  let date = splitDate[1];
  let koreanMonth;

  if (month === "January") {
    koreanMonth = "1";
  } else if (month === "Feburary") {
    koreanMonth = "2";
  } else if (month === "March") {
    koreanMonth = "3";
  } else if (month === "April") {
    koreanMonth = "4";
  } else if (month === "May") {
    koreanMonth = "5";
  } else if (month === "June") {
    koreanMonth = "6";
  } else if (month === "July") {
    koreanMonth = "7";
  } else if (month === "August") {
    koreanMonth = "8";
  } else if (month === "September") {
    koreanMonth = "9";
  } else if (month === "October") {
    koreanMonth = "10";
  } else if (month === "November") {
    koreanMonth = "11";
  } else if (month === "December") {
    koreanMonth = "12";
  }

  if (date.charAt(0) === "0") {
    date = date.replace("0", "");
  }

  return `${year}년 ${koreanMonth}월 ${date}일`;
}

export const PostDate = ({ date }) => {
  return <p className="post-date">{koreanDate(date)}</p>
}