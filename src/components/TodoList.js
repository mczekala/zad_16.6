import React from "react";
export const TodoList = props =>
  <
  ul > {
    props.data.map(elem => < li onClick = {
        () => props.remove(elem.id)
      }
      key = {
        elem.id
      } > {
        elem.text
      } < /li>)  }< /
      ul > ;